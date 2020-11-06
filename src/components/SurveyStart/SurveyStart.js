import React from 'react';
import './SurveyStart.css';
import Button from '../UI/Button/Button';
import Logo from '../../assets/images/caringNcompany.png';

class SurveyStart extends React.Component {
    clicked = () => {
        this.props.history.push('/survey/1/a');
    }

    render() {
        return (
            <div className="SurveyStart">
                <div className="Start-header">
                    <img style={{marginTop: '20px', width: '80px'}} src={Logo} alt="케어링앤컴퍼니 로고"/>
                    <h2>
                        <span style={{textAlign: "center"}}>케어링!</span> <br/>
                        "저희 부모님을 부양하는 것만으로도 
                        정부에서 <br/> 월 150 만원씩 지원해준다구요?"</h2>
                </div>
                <div className="Start-intro">
                    <p>
                        " 네 그렇습니다. 가족도 부양하고 
                        나라에서 돈도 받을 수 있는 귀중한 정보를 케어링해서 제공해드립니다! "  <br/><br/>
                        몇 가지 질문에 답하고 <br/>
                        정부지원금 대상자에 해당하는지 확인해보세요! 
                    </p>
                    <span>약 5분 정도 소요됩니다.</span>
                    <Button btnType="start" clicked={this.clicked}>시작하기</Button>
                    <span>※ 정부에서 제공된 공식 데이터를 기준으로 검사합니다. </span>
                </div>
            </div>
        )
    }
}

export default SurveyStart;