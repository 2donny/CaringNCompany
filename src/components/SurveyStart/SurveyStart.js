import React from 'react';
import './SurveyStart.css';
import Button from '../UI/Button/Button';

const SurveyStart = () => {
    const clicked = () => {
        
    }
    return (
        <div className="SurveyStart">
            <div className="Start-header">
                <img />
                <h2>"저희 부모님을 부양하는 것만으로도 
                    <br />
                    정부에서 월 150 만원씩 지원해준다구요?"</h2>
            </div>
            <div className="Start-intro">
                <p>

                </p>
                <Button clicked={this.clicked} btnType="start">시작하기</Button>
            </div>
        </div>
    )
}

export default SurveyStart;