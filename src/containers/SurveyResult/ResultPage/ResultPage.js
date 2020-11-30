import React from 'react';
import './ResultPage.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ResultPage extends React.Component {
    state = {
        results: this.props.results
    }
    componentDidMount() {
        if(this.props.results.q1.a1 === null) {
            this.props.history.push('/'); // 이 페이지에서 새로고침 시 Redirect
        }
    }

    render() {
        let first_answer = null;
        if(this.state.results.q1.a1 === 1) { // 65세 이상
            first_answer = <div className="text-contents"> <span className="highlight">0등급 가능성 99% 입니다!</span> <p>65세 이상이신 어르신 분은 <br /> 노인장기요양보험에 해당할 확률이 99%로 매우 높습니다.<br/> 정부 제공 등급으로 따지면 0등급입니다!</p></div>
        }else { //65세 미만.
            if(this.state.results.q3.a12 === 1) { // "거동이 어려워 거의 누워계십니다"
                first_answer = <div className="text-contents"><span className="highlight">0등급 가능성 99% 입니다! </span><p> 어르신이 65세 미만이시더라도, 거동이 어려워 거의 누워계시다면 노인장기요양보험에 해당할 확률이 99%로 매우 높습니다. <br/> 정부 제공 등급으로 따지면 0등급입니다!</p></div>
            }else if(this.state.results.q3.a13 === 1) { // "전적인 도움 없이는 일상생활이 어렵습니다."
                if(this.state.results.q2.a11 !== 1) { //노인성 질병이 있는 경우
                    first_answer = <div className="text-contents"><span className="highlight">가능성 1등급 90%</span><p> 어르신이 65세 미만이실 때<br />전적인 도움 없이 일상생활이 어려우며<br />노인성 질병이 있으신 경우에는<br />노인장기요양보험에 해당할 확률이 90%로 매우 높습니다. <br/> 정부 제공 등급으로 따지면 1등급입니다!</p></div>
                }else { //노인성 질병이 없는경우.
                    first_answer = <div className="text-contents"><span className="highlight">가능성 1.5등급 85%</span><p> 어르신이 65세 미만이실 때<br />전적인 도움 없이 일상생활이 어려우며<br />노인성 질병이 없으신 경우에는<br />노인장기요양보험에 해당할 확률이 85%로 꽤 높습니다. <br/> 정부 제공 등급으로 따지면 1.5등급입니다!</p></div>
                }
            }else if(this.state.results.q3.a14 === 1) { // "일상생활에 있어서 부분적인 도움이 필요합니다."
                if(this.state.results.q2.a11 !== 1) { //노인성 질병이 있는 경우
                    first_answer = <div className="text-contents"><span className="highlight">가능성 2등급 80% </span><p>어르신분이 65세 미만이시고 <br />일상 생활에 있어서 부분적인 도움이 필요하며<br />노인성 질병이 있으신 경우에는<br />노인장기요양보험에 해당할 확률이 80%로 꽤 높습니다. <br/> 정부 제공 등급으로 따지면 2등급입니다!</p></div>
                }else { //노인성 질병이 없는경우.
                    first_answer = <div className="text-contents"><span className="highlight">가능성 2.5등급 75%</span><p>어르신분이 65세 미만이시고<br />일상 생활에 있어서 부분적인 도움이 필요하며<br />노인성 질병이 없으신 경우에는<br />노인장기요양보험에 해당할 확률이 75%로 높습니다. <br/> 정부 제공 등급으로 따지면 2.5등급입니다!</p></div>
                }
            }else if(this.state.results.q3.a15 === 1) { //"가사 일이나 외출의 경우에 만 도움이 필요합니다"
                if(this.state.results.q2.a11 !== 1) { //노인성 질병이 있는 경우
                    first_answer = <div className="text-contents"><span className="highlight">가능성 3등급 70%</span><p>어르신이 65세 미만이실 때<br />가사 일이나 외출의 경우에만 도움이 필요하며<br />노인성 질병이 있으신 경우에는<br />노인장기요양보험에 해당할 확률이 70%로 높습니다. <br/> 정부 제공 등급으로 따지면 3등급입니다!</p></div>
                }else { //노인성 질병이 없는경우.
                    first_answer = <div className="text-contents"><span className="highlight">가능성 3.5등급 65%</span><p>어르신이 65세 미만이실 때<br />가사 일이나 외출의 경우에만 도움이 필요하며<br />노인성 질병이 없으신 경우에는<br />노인장기요양보험에 해당할 확률이 65%로 높습니다. <br/> 정부 제공 등급으로 따지면 3.5등급입니다!</p></div>
                }
            }
        }

        let second_answer = null;
        if(this.state.results.q4.a24 === 1) { //  "보호자와 대상 어르신은 어떤 관계인가요?" 기타일시
            second_answer = <div className="text-contents"><span className="highlight">보호자로서 불가능합니다.</span> <p>보호자와 대상 어르신 간의 관계는 가족이나 배우자여야 합니다.</p></div>
        }else { // 기타 제외, 가족이나 배우자일 때.
            second_answer = <div className="text-contents"><span className="highlight">보호자로서 가능합니다!</span> <p>보호자와 대상 어르신 간의 관계가 배우자이므로 가능합니다.</p> </div>
        }

        let third_answer = null;
        if(this.state.results.q5.a25 === 1) {// "월 160시간 이상 일하고 계신가요?", "예"
            third_answer = <div className="text-contents"><span className="highlight">금액 지급이 불가능합니다.</span><p>월 160시간 이상으로 일하고 계시는 보호자분이시라면 <br /> 안타깝게도 기준에서 제외됩니다.</p></div> 
        }else { //"월 160시간 이상 일하고 계신가요?", "아니오"
            if(this.state.results.q4.a16 === 1) { //배우자일 때.
                third_answer = <div className="text-contents"><span className="highlight">금액 지급이 가능합니다!</span><p>보호자분이 어르신의 배우자이며<br />월 160시간 미만으로 일하고 계신다면 최대 금액은 다음과 같이 측정됩니다.<br /><strong className="highlight-red">90분 * 30일 * 시급</strong></p></div> 
            }else { // 배우자가 아닌 가족일 때.
                if(this.state.results.q6.a27 === 1) { // "치매 및 기타 질환으로 인한 폭력성이 있으신가요?", "예"
                    third_answer = <div className="text-contents"><span className="highlight">금액 지급이 가능합니다!</span><p>보호자분이 월 160시간 미만으로 일하고 계시고 <br />배우자가 아닌 기타 가족이실 때  <br />어르신이 치매 및 기타 질환으로 인한 폭력성이 있으시므로<br />최대 금액은 다음과 같이 측정됩니다.<br /> <strong className="highlight-red">90분 * 30일 * 시급</strong></p></div> 
                }else { // "아니오"
                    third_answer = <div className="text-contents"><span className="highlight">금액 지급이 가능합니다!</span><p>보호자분이 월 160시간 미만으로 일하고 계시고 <br />배우자가 아닌 기타 가족이실 때  <br />최대 금액은 다음과 같이 측정됩니다.<br /> <strong className="highlight-red">60분 * 30일 * 시급</strong></p></div> 
                }
            }
        }



        return (
            <div className="ResultPage">
                <h1>검사 결과</h1>
                <p>※ 본 결과는 정부 지원금 정책법에 기반합니다.</p>
                <div className="baseline"/>

                <h2>노인장기요양보험 가능여부</h2>
                <div className="text">
                    {first_answer}
                </div>
                
                <h2>보호자 가능 여부</h2>
                <div className="text">
                    {second_answer}
                </div>

                <h2>최대 금액</h2>
                <div className="text">
                    {third_answer}
                </div>

                <section className="result-button inner">
                    <a className='red' href="https://caring.co.kr/"><p>케어링 홈페이지 둘러보기</p></a>
                </section>
            </div> 
        )
    }
}

const mapStateToProps = store => {
    return {
        id: store.results.id,
        loading: store.results.loading,
        results: store.survey.results,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Analyze_Finished: () => dispatch({type: 'ANALYZE_FINISHED'}),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultPage));