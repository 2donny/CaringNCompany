import React from 'react';
import SurveyHeader from './SurveyHeader/SurveyHeader';
import SurveyProgress from './SurveyProgress/SurveyProgress';
import SurveyQuestion from './SurveyQuestion/SurveyQuestion';
import SurveyButton from './SurveyButton/SurveyButton';
import SurveyErrormsg from './SurveyErrormsg/SurveyErrormsg';


class SurveyContents extends React.Component {
    render() {
        return (
            <div className="SurveyContents">
                <SurveyHeader />
                <SurveyProgress />
                <SurveyQuestion />
                <SurveyErrormsg />
                <SurveyButton />
            </div>
        )
    }
}

export default SurveyContents