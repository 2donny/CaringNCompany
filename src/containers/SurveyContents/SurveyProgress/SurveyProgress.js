import React from 'react';
import './SurveyProgress.css';

function SurveyProgress({questionNum}) { 
    let ProgressPercent = '0%'; //인자로 들어온 Question Num을 Progress percent로 나타내기.
    if(questionNum === '1') {
        ProgressPercent = '10%';
    } else if (questionNum === '2') {
        ProgressPercent = '23%';
    } else if (questionNum === '3') {
        ProgressPercent = '43%';
    } else if (questionNum === '4') {
        ProgressPercent = '67%';
    } else if (questionNum === '5') {
        ProgressPercent = '82%';
    } else if (questionNum === '6') {
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