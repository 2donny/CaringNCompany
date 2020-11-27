import React from 'react'
import './Layout.css';
import {withRouter} from 'react-router-dom';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
    render() {
        let pathname = this.props.location.pathname;
        let survey_contents_inner = pathname;
        return (
            <div className="Layout">
                <div className={survey_contents_inner != '/admin' ? 'survey-contents-inner' : null}>
                    {this.props.children}
                </div>
                {survey_contents_inner != '/admin' ? <Footer /> : null}
            </div>
        )
    }
}

export default withRouter(Layout);