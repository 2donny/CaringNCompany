import React from 'react';
import './SurveyButton.css';
import Button from '../../../components/UI/Button/Button';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from '../../../axios-results';
// import SurveyErrormsg from '../SurveyErrormsg/SurveyErrormsg';

class SurveyButton extends React.Component {
    state = {
        redirect: null,
        PNum_loading: null
    }
    
    Redirection = () => {
        if(this.props.routerProps.match.params.questionNum === '1') {
            console.log('Redirected!!');
            this.setState({redirect: true});
        }
    }
    NextButtonClicked = (event) => {
        event.preventDefault();
        let questionNumstr = this.props.routerProps.match.params.questionNum; //현재 이 라우터의 QuestionNum
        let questionNum = parseInt(questionNumstr);

        if(questionNum < 1) {
            return null;
        }
        let qN = 'q' + questionNum; // 현재 이 컴포넌트의 QuestionNum를 통해서, store의 q1 ~ q6까지 맞는거 맞추기. qN = 'q1'; 
        const storeValues = Object.values(this.props.store[qN]); //이 배열은 현재 questionNum에 대한(qN) redux store의 answer의 값이다. (null, 0, 1 중 하나)
        // console.log(storeValues); // 객체를 배열로 이렇게 바꿈 => q1일때 [null, 1] 

        const sum = storeValues.reduce((acc, el) => { 
            return acc + el; //sum이 0이면 체크된것이 하나도 없는거니까 [답변을 선택해주세요.] errmsg를 띄운다.
        }, 0);
        if(sum === 0 || sum === null) { //check 아무것도 안된상태
            console.log('nextbtnClicked!');
            alert('적어도 하나를 선택해주세요')
        }else { //sum이 1 이상이면, 적어도 하나 체크된 것
            console.log('questionNum : ' + questionNum)
            if(questionNum === 1) {
                if(sum === 2) { // 2개 이상 복수 선택할 때 alert() 시키기.
                    alert('한 가지만 선택해주세요');
                    return null;
                }
            }else if(questionNum === 2) { 
                if(this.props.store.q2.a11 === 1) { //2번 질문에서 없음 박스를 누르면, 나머지 박스는 하나도 체크되면 안됨.
                    if(sum === 1) { //없음 항목 하나만 선택됐을 때
                        this.props.props.history.push('/survey/' + (questionNum+1));
                    }else {
                        alert('없음 항목만 선택해주세요.');    
                        return null;
                    }
                }
            }else if(questionNum === 3) {
                if(sum > 1) { 
                    alert('한 가지만 선택해주세요.');
                    return null;
                }
            }else if(questionNum === 4) {
                if(this.props.store.q4.a24 === 1) {
                    if(sum === 1) { //기타 항목 하나만 선택됐을 때
                        this.props.props.history.push('/survey/' + (questionNum+1));
                    }else {
                        alert('기타 항목만 선택해주세요.');
                        return null;
                    }
                }
            }else if(questionNum === 5) {
                if(sum > 1) {
                    alert('한 가지만 선택해주세요.');
                    return null;   
                }
            }else if(questionNum === 6) {
                if(sum > 1) {
                    alert('한 가지만 선택해주세요.');
                    return null;   
                }
            }else {
                return null;
            }
            this.props.props.history.push('/survey/' + (questionNum+1));
        }
    }
    
    
    FinalButtonClicked = (event) =>  {
        event.preventDefault();
        let questionNumstr = this.props.routerProps.match.params.questionNum; //현재 이 라우터의 QuestionNum
        let questionNum = parseInt(questionNumstr);
        let phone_number_props = this.props.phone_number_props;
        if(questionNum === 7) {  // 7번 질문은 여기로 바로옴.
            let PN_length = phone_number_props.length;
            if(PN_length === 11) { //올바르게 전화번호 입력받음.
                this.props.add_phone_num(phone_number_props);
                const results = {
                    ...this.props.store
                }
                if(this.props.phone_num) { // store에 phone_num이 생겼을 때 서버로 post한다.
                    console.log('came!');
                    axios.post('/results.json', results)
                    .then(res => {
                        // console.log(res);
                        // console.log(res.data.name);
                    })
                    .catch(err => console.log(err))
                    .finally(() => this.props.routerProps.history.push('/Result'));
                }else {
                    return null;
                }
            }else { 
                alert('전화번호를 올바르게 입력해주세요.');
                return null;
            }
        }
    }

    render() {
        let questionNum = this.props.questionNum;
        questionNum = parseInt(questionNum)
        let formerQuestion = questionNum - 1;
        let redirection = null;
        if(this.state.redirect === true) {
            redirection = <Redirect to="/"/>
        }

        let nextButton = <Button clicked={this.NextButtonClicked} btnType='start'>다음</Button>
        if(questionNum === 7) {
            nextButton = <Button clicked={this.FinalButtonClicked} btnType='start'>결과보기</Button>
        }
        
        return (
            <div className="SurveyButton">
                {redirection}
                <Link to={'/survey/' + String(formerQuestion)}>
                    <Button clicked={this.Redirection} btnType='return'>이전</Button>
                </Link>
                {nextButton}
            </div>
        )
    }
    
}

const mapStateToProps = store => {
    return {
        store: store.survey.results,
        phone_num: store.survey.results.phone_number,
        PNum_loading: store.survey.results.PNum_loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checked: (ans) => dispatch({type: 'CHECKED', id: ans}),
        unchecked: (ans) => dispatch({type: 'UNCHECKED', id: ans}),
        add_phone_num: (P_Num) => dispatch({type: 'ADD_PHONE_NUMBER', P_Num: P_Num}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyButton);