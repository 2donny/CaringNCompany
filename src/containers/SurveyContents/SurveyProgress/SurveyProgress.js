import React from 'react';
import './SurveyProgress.css';

function SurveyProgress({questionNum}) { 
    let ProgressPercent = '0%'; //인자로 들어온 Question Num을 Progress percent로 나타내기.
    if(questionNum === '1') {
        ProgressPercent = '15%';
    } else if (questionNum === '2') {
        ProgressPercent = '25%';
    } else if (questionNum === '3') {
        ProgressPercent = '44%';
    } else if (questionNum === '4') {
        ProgressPercent = '57%';
    } else if (questionNum === '5') {
        ProgressPercent = '62%';
    } else if (questionNum === '6') {
        ProgressPercent = '85%';
    } else if (questionNum === '7') {
        ProgressPercent = '95%';
    }

    return (
        <div className="SurveyProgress">
           <div style={{width: `${ProgressPercent}`}} className="progress-rate">
           </div>
        </div>
    )
}

export default SurveyProgress;