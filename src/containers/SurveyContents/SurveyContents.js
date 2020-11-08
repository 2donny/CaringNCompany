import React from 'react';
import './SurveyContents.css';
import SurveyHeader from './SurveyHeader/SurveyHeader';
import SurveyProgress from './SurveyProgress/SurveyProgress';
import SurveyQuestion from './SurveyQuestion/SurveyQuestion';
import SurveyButton from './SurveyButton/SurveyButton';
import SurveyErrormsg from './SurveyErrormsg/SurveyErrormsg';


class SurveyContents extends React.Component {
    state = {
        //이 state 부터는 사용자의 입력이 들어온다.
        survey_1: { //노인장기요양보험 가능여부
            name: '',
            gender: '',
            age: '',
            hasDisease: null,
            statusNumber: null, //거동이 어려워 누워계시다면 1단계, 이런식으로 ~
        }, 
        survey_2: { //보호자 가능 여부
            isSpouse: null, // 배우자이면 true로 
            isFamily: null, // 배우자가 아닌 가족이면 true로 
            // 둘다 nul이면 기타니까 불가능을 리턴
        },
        survey_3: { //최대금액
            workMorethan160: null,
            hasViolence: null, //폭력성이 있는가
        }
    }

    render() {
        console.log(this.props.match.params.questionNum); //현재 이 라우터로 넘겨진 props의 question Number
        console.log(this.props);
        return (
            <div className="SurveyContents">
                <SurveyHeader questionNum={this.props.match.params.questionNum}/>  {/* 여기 각각에 3개의 인자를 넘겨줘서, SurveyHeader*/}
                <SurveyProgress questionNum={this.props.match.params.questionNum}/>
                <SurveyQuestion questionNum={this.props.match.params.questionNum}/>
                <SurveyErrormsg />
                <SurveyButton routerProps={this.props}/> {/* 다음 버튼을 누르는 순간 currentCategoryNum, 
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