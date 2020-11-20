import React from 'react';
import './SurveyHeader.css';

function SurveyHeader({questionNum}) {
    let questionNumber = parseInt(questionNum); //string 값을 integer로 바꾸기
    let ul = null;
    if(questionNumber >= 1 && questionNumber <= 3) {
        ul = (
            <>
                <ul>
                    <li className="on"><span>노인장기요양보험 <br/>가능여부</span></li>
                    <li><span>보호자 가능 여부</span></li>
                    <li><span>최대 금액</span></li>
                    <li><span>기타 정보</span></li>
                </ul>
            </>
        )
    }else if(questionNumber === 4) {
        ul = (
            <>
                <ul>
                    <li><span>노인장기요양보험 <br/>가능여부</span></li>
                    <li className="on"><span>보호자 가능 여부</span></li>
                    <li><span>최대 금액</span></li>
                    <li><span>기타 정보</span></li>
                </ul>
            </>
        )
    } else if(questionNum >=5 && questionNum <= 6){
        ul = (
            <>
                <ul>
                    <li><span>노인장기요양보험 <br/>가능여부</span></li>
                    <li><span>보호자 가능 여부</span></li>
                    <li className="on"><span>최대 금액</span></li>
                    <li><span>기타 정보</span></li>
                </ul>
            </>
        )
    } else {
        ul = (
            <>
                <ul>
                    <li><span>노인장기요양보험 <br/>가능여부</span></li>
                    <li><span>보호자 가능 여부</span></li>
                    <li ><span>최대 금액</span></li>
                    <li className="on"><span>기타 정보</span></li>
                </ul>
            </>
        )
    }
    
    return (
        <nav className="SurveyHeader">
            {ul}
        </nav>
    )
}

export default SurveyHeader;