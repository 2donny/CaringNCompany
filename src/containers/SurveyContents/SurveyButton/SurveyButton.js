import React from 'react';
import './SurveyButton.css';
import Button from '../../../components/UI/Button/Button';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import SurveyErrormsg from '../SurveyErrormsg/SurveyErrormsg';

class SurveyButton extends React.Component {
    state = {
        redirect: null,
        errmsg: null
    }
    
    componentDidMount() { // 각 라우터에서 새로고침을 하면, 마운트가 되니까 시작페이지(/)로 push.
    }
    Redirection = () => {
        if(this.props.routerProps.match.params.questionNum === '1') {
            console.log('Redirected!!');
            this.setState({redirect: true});
        }
        this.props.ReturnBtnClicked();
    }
    NextButtonClicked = (event) => {
        event.preventDefault();
        this.props.NextBtnClicked();

        let questionNumstr = this.props.routerProps.match.params.questionNum; //현재 이 라우터의 QuestionNum
        let questionNum = parseInt(questionNumstr);
        if(questionNum < 1) {
            return null;
        }
        let qN = 'q' + questionNum; // 현재 이 컴포넌트의 QuestionNum를 통해서, store의 q1 ~ q6까지 맞는거 맞추기. qN = 'q1'; 
        const storeValues = Object.values(this.props.store[qN]); //이 배열은 현재 questionNum에 대한(qN) redux store의 answer의 값이다. (null, 0, 1 중 하나)
        // console.log(storeValues); // 객체를 배열로 이렇게 바꿈 => q1일때 [null, 1] 

        const sum = storeValues.reduce((acc, el) => { 
            return acc + el; //sum이 0이면 체크된것이 하나도 없는거니까 [답변을 선택해주세요.] errmsg를 띄운다.
        }, 0);
        if(sum === 0 || sum === null) { //check 아무것도 안된상태
            console.log('nextbtnClicked!');
            alert('적어도 하나를 선택해주세요')
        }else { //sum이 1 이상이면, 적어도 하나 체크된 것
            if(questionNum === 1) {
                if(sum === 2) { // 2개 이상 복수 선택할 때 alert() 시키기.
                    alert('한 가지만 선택해주세요');
                    return null;
                }
            }
            this.props.props.history.push('/survey/' + (questionNum+1));
        }

        
    }
    render() {
        console.log('rendered!');
        let questionNum = this.props.routerProps.match.params.questionNum; //string인 question Num을 가져옴.
        let formerQuestion = parseInt(questionNum) - 1;
        let redirection = null;
        if(this.state.redirect === true) {
            redirection = <Redirect to="/"/>
        }
        
        // console.log('ERRMSG : ' + this.state.errmsg);
        // let ERRMSG = null
        // if(this.state.errmsg) {
        //     ERRMSG = <SurveyErrormsg errMsg={this.state.errmsg}/>
        // }
        return (
            <div className="SurveyButton">
                {redirection}
                <Link to={'/survey/' + String(formerQuestion)}>
                    <Button clicked={this.Redirection} btnType='return'>이전</Button>
                </Link>
                <Button clicked={this.NextButtonClicked} btnType='start'>다음</Button>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        store: state.results,
        hasErrMsg: state.results.hasErrMsg,
        nextbtnClicked: state.results.nextbtnClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        NextBtnClicked: () => dispatch({type: 'NEXTBUTTONCLICKED'}), //이 액션을 취할 때, 이 버튼컴포넌트로 들어온 (checked)정보들을 store에 저장해야한다.
        ReturnBtnClicked: () => dispatch({type: 'RETURNBUTTONCLICKED'}), //이전 버튼을 누르는 건, store에 저장했던 질문에 해당하는 만큼만의 정보(Checked)를 지워버리면됨. 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyButton);