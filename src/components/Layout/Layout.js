import React from 'react'
import './Layout.css';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <div className="Layout">
                 {this.props.children}
                 <Footer />
            </div>
        )
    }
}

export default Layout;