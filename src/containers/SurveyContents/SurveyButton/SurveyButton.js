import React from 'react';
import './SurveyButton.css';
import Button from '../../../components/UI/Button/Button';
import {Link, Redirect} from 'react-router-dom';

class SurveyButton extends React.Component {
    state = {
        redirect: null
    }
    Redirection = () => {
        if(this.props.routerProps.match.params.questionNum === '1') {
            console.log('hi');
            this.setState({redirect: true});
        }
    }
    render() {
        let questionNum = this.props.routerProps.match.params.questionNum; //string인 question Num을 가져옴.
        let nextQuestionNum = parseInt(questionNum) + 1; //this.props는  '1'같은 string이기 때문에 Number로 바꿔준다.
        let formerQuestion = parseInt(questionNum) - 1;
        let redirection = null;
        if(this.state.redirect === true) {
            redirection = <Redirect to="/"/>
        }
        console.log(nextQuestionNum);
        return (
            <div className="SurveyButton">
                {redirection}
                <Link to={'/survey/' + String(formerQuestion)}>
                    <Button clicked={this.Redirection} btnType='return'>이전</Button>
                </Link>
                <Link to={'/survey/' + String(nextQuestionNum)}>
                    <Button btnType='start'>다음</Button>
                </Link>
            </div>
        )
    }
    
}

export default SurveyButton;