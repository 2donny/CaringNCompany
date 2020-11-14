import React from 'react';
import './SurveyErrormsg.css';
import {connect} from 'react-redux';


class SurveyErrormsg extends React.Component {
    state = {
        errMsg: null
    }
    
    componentDidMount() {
        this.props.init_ErrMsg();
        this.props.init_next_button();
    }
    componentDidUpdate(prevProps) { //check 버튼을 누를때마다 여기가 호출되므로, 그때마다 hasErrMsg를 확인해줘야함.
        if(this.props.results !== prevProps.results) {
            console.log('updated!');
            let questionNum = parseInt(this.props.questionNum); //문자열 -> 정수
            if(questionNum < 1) {
                return null;
            }
            let qN = 'q' + questionNum; // 현재 이 컴포넌트의 QuestionNum를 통해서, store의 q1 ~ q6까지 맞는거 맞추기. qN = 'q1'; 
            const storeValues = Object.values(this.props.results[qN]); //이 배열은 현재 questionNum에 대한(qN) redux store의 answer의 값이다. (null, 0, 1 중 하나)
            // console.log(storeValues); // 객체를 배열로 이렇게 바꿈 => q1일때 [null, 1] 

            const sum = storeValues.reduce((acc, el) => { 
                return acc + el; //sum이 0이면 체크된것이 하나도 없는거니까 [답변을 선택해주세요.] errmsg를 띄운다.
            }, 0);

            if(this.props.nextbtnClicked === true) { //다음 버튼이 눌러졌을 때만 errmsg를 판별하게끔한다.
                if(sum === 0 || sum === null) {
                    this.setState({errMsg: <p>답변을 선택해주세요.</p>});
                }else { //sum이 1 이상이면, 적어도 하나 체크된것이므로
                    this.setState({errMsg: null})
                }
                //store의 nextbtnClicked을 false로 바꿔줘야, 다음에 또 클릭될 때 false에서 true로 바뀜.
            }
        }
    }
    errMsgHandler = () => {
        let errmsg = this.state.errMsg;
        this.props.errMsg(errmsg);
    }
    
    render() {
        this.errMsgHandler();
        return (
            <nav className="SurveyErrormsg">
               {this.state.errMsg}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.results,
        nextbtnClicked: state.results.nextbtnClicked,
        hasErrMsg: state.results.hasErrMsg
    }
}
const mapDispatchToProps = dispatch => {
    return {
        init_ErrMsg: () => dispatch({type: 'INIT_ERROR_MESSAGE'}),
        init_next_button: () => dispatch({type: 'INIT_NEXT_BUTTON'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyErrormsg);