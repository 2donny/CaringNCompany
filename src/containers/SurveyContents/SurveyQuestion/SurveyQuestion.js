import React from 'react';
import './SurveyQuestion.css';
import Radio from '../../../components/UI/Radio/Radio';


function SurveyQuestion({questionNum}) {
    let radio = null;
    let main = null;
    let description = null;
    if(questionNum === '1') { //questionNumber에 따라 main 질문, detail한 설명, Radio 질문을 만든다.
        main = '어르신의 연세가 어떻게 되시나요?';
        description = '연세에 따라 보조금의 등금이 달라집니다.';
        radio = (
            <>
                <Radio contents="65세 이상"/>
                <Radio contents="65세 미만"/>
            </>
        )
    }else if (questionNum === '2') {
        main = '어르신이 앓고 계신 질환을 모두 선택해주세요.';
        description = '앓고 계신 질환이 없다면 \'없음\' 을 선택해주세요.';
        radio = (
            <>
                <Radio contents="치매"/>
                <Radio contents="알츠하이머"/>
                <Radio contents="뇌출혈/뇌내출혈"/>
                <Radio contents="뇌경색증"/>
                <Radio contents="뇌중풍"/>
                <Radio contents="파킨슨병"/>
                <Radio contents="퇴행성 질환"/>
                <Radio contents="기타 질환"/>
                <Radio contents="없음"/>
            </>
        )
    } else if (questionNum === '3') { //질문 : 생활에 있어서 어느 정도 도움을 필요로 하시나요?
        main = '생활에 있어서 어느 정도 도움을 필요로 하시나요?';
        description = '';
        radio = ( // 이것들은 전부 질문에 대한 답의 Radio이다.
            <> 
                <Radio contents="거동이 어려워 거의 누워 계십니다."/>
                <Radio contents="전적인 도움 없이는 일상생활이 어렵습니다."/>
                <Radio contents=" 일상생활에 있어서 부분적인 도움이 필요합니다."/>
                <Radio contents="가사 일이나 외출의 경우에 만 도움이 필요합니다."/>
            </>
        )
    } else if (questionNum === '4') {
        main = ' 보호자와 대상 어르신은 어떤 관계인가요?';
        description = '';
        radio = (
            <>
                <Radio contents="배우자"/>
                <Radio contents="자녀"/>
                <Radio contents="며느리/사위"/>
                <Radio contents="형제자매"/>
                <Radio contents="손자/외손자"/>
                <Radio contents="손자 며느리/사위"/>
                <Radio contents="처남/처형/처제"/>
                <Radio contents="시부모/시동생"/>
                <Radio contents="기타"/>
            </>
        )
    } else if (questionNum === '5') {
        main = '월 160시간 이상 일하고 계신가요?';
        description = '최대 금액을 결정하는 중요한 요소입니다.';
        radio = ( //이 대답은  전 대답이 배우자 / 기타가족 중에 무엇을 선택했느냐에 따라 출력하는 아웃풋을 달리해야함.
            <>
                <Radio contents="네"/>
                <Radio contents="아니요"/>
            </>
        )
    }else if (questionNum === '6') {
        main = '치매 및 기타 질환으로 인한 폭력성이 있으신가요?';
        description = '';
        radio = ( 
            <>
                <Radio contents="있음"/>
                <Radio contents="없음"/>
            </>
        )
    }else {
        radio = <p>There's an error.</p>
    }
    return (
        <div className="SurveyQuestion">
           <section className="question-section">
                <em>질문 {questionNum}</em>
                <h2>{main}</h2>
                <span>{description}</span>
                <div className="baseline"></div>
                {radio}
           </section>
        </div>
    )
}

export default SurveyQuestion;