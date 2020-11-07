import React from 'react';
import SurveyHeader from './SurveyHeader/SurveyHeader';
import SurveyProgress from './SurveyProgress/SurveyProgress';
import SurveyQuestion from './SurveyQuestion/SurveyQuestion';
import SurveyButton from './SurveyButton/SurveyButton';
import SurveyErrormsg from './SurveyErrormsg/SurveyErrormsg';


class SurveyContents extends React.Component {
    state = {
        currentStatus: {
            currentCategoryNum: 1,
            currentQuestionNum: 1,
            currentProgress: '3%',
        },
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
        return (
            <div className="SurveyContents">
                <SurveyHeader />
                <SurveyProgress />
                <SurveyQuestion />
                <SurveyErrormsg />
                <SurveyButton />
            </div>
        )
    }
}

export default SurveyContents