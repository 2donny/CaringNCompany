import React from 'react';
import './SurveyErrormsg.css';
import {connect} from 'react-redux';


class SurveyErrormsg extends React.Component {
    state = {
        init_errmsg: null
    }
    
    render() {
        return (
            <nav className={"SurveyErrormsg"}>
               {this.props.errMsg}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.results,
        nextbtnClicked: state.results.nextbtnClicked,
    }
}


export default connect(mapStateToProps, null)(SurveyErrormsg);