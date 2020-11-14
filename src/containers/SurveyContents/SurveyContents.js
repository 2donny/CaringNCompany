import React from 'react';
import './SurveyContents.css';
import SurveyHeader from './SurveyHeader/SurveyHeader';
import SurveyProgress from './SurveyProgress/SurveyProgress';
import SurveyQuestion from './SurveyQuestion/SurveyQuestion';
import SurveyButton from './SurveyButton/SurveyButton';
import SurveyErrormsg from './SurveyErrormsg/SurveyErrormsg';


class SurveyContents extends React.Component {
    state = {
        errmsg: null
    }
    errMsgHandler = (errmsg) => {
        this.setState({errmsg: errmsg});
    }

    render() {
        // console.log(this.props.match.params.questionNum); //현재 이 라우터로 넘겨진 props의 question Number
        return (
            <div className="SurveyContents">
                <SurveyHeader questionNum={this.props.match.params.questionNum}/>  {/* 여기 각각에 3개의 인자를 넘겨줘서, SurveyHeader*/}
                <SurveyProgress questionNum={this.props.match.params.questionNum}/>
                <SurveyQuestion questionNum={this.props.match.params.questionNum}/>
                <SurveyErrormsg errMsg={this.errMsgHandler} questionNum={this.props.match.params.questionNum}/>
                <SurveyButton props={this.props} errmsg={this.state.errmsg} routerProps={this.props}/>
                 {/* 다음 버튼을 누르는 순간 currentCategoryNum, 
                currentProgress, currentQuestionNum를 전부 증가시킨 후에, 
                survey/1/b로 라우터를 옮긴다. 그리고 다시 app에서 이 컴포넌트 SureyContents를 호출한다.
                그때는 이 컴포넌트의 state가 증가된 후이다.
                / 이전버튼을 누르면, 전부 1씩 감소시킨다음에 currentCatoryNum에 따라서 if 문으로 router를 결정해준다.
                */}
            </div>
        )
    }
}

export default SurveyContents