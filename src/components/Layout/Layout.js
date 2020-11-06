import React from 'react'
import './Layout.css';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <div className="Layout">
                <div className="survey-contents-inner">
                    {this.props.children}
                </div>
                 <Footer />
            </div>
        )
    }
}

export default Layout;