import React from 'react';
import './SurveyButton.css';
import Button from '../../../components/UI/Button/Button';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class SurveyButton extends React.Component {
    state = {
        redirect: null
    }
    Redirection = () => {
        if(this.props.routerProps.match.params.questionNum === '1') {
            console.log('Redirected!!');
            this.setState({redirect: true});
        }
        this.props.ReturnBtnClicked();
    }
    componentWillMount = () => { //새로운 버튼이 마운트 되기전에 NextBtnclicked를 false로 초기화시켜준다.
        console.log('componentWillMount');
        this.props.init_nextBtn();
    }
    NextButtonClicked = (event) => {
        event.preventDefault();
        this.props.NextBtnClicked();
        
        let questionNumstr = this.props.routerProps.match.params.questionNum; //현재 이 라우터의 QuestionNum
        let questionNum = parseInt(questionNumstr);
        console.log('NextButtonClicked');
        console.log('questionNum : ' + parseInt(questionNum));
        if(this.props.errmsg !== null) {//errMsg가 있다면 그대로 
            this.props.props.history.push('/survey/' + questionNum); 
        }else { //errMsg가 없다면 다음 question 라우터로 넘어가야하므로.
            questionNum = questionNum + 1;
            this.props.props.history.push('/survey/' + questionNum);
        }
    }
    render() {
        let questionNum = this.props.routerProps.match.params.questionNum; //string인 question Num을 가져옴.
        let nextQuestionNum = parseInt(questionNum) + 1; //this.props는  '1'같은 string이기 때문에 Number로 바꿔준다.
        let formerQuestion = parseInt(questionNum) - 1;
        let redirection = null;
        if(this.state.redirect === true) {
            redirection = <Redirect to="/"/>
        }
        console.log('errmsg : ' + this.props.errmsg);
        console.log('nextQuestionNum : ' + nextQuestionNum);
        // Return 버튼 눌렸을 때 dispatch할 때 action.val을 결정하는 코드
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
        hasErrMsg: state.results.hasErrMsg,
        nextbtnClicked: state.results.nextbtnClicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        NextBtnClicked: () => dispatch({type: 'NEXTBUTTONCLICKED'}), //이 액션을 취할 때, 이 버튼컴포넌트로 들어온 (checked)정보들을 store에 저장해야한다.
        ReturnBtnClicked: () => dispatch({type: 'RETURNBUTTONCLICKED'}), //이전 버튼을 누르는 건, store에 저장했던 질문에 해당하는 만큼만의 정보(Checked)를 지워버리면됨. 
        init_nextBtn: () => dispatch({type: 'INIT_NEXT_BUTTON'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyButton);