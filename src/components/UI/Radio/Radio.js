import React from 'react';
import './Radio.css';
import Checkbox from '@material-ui/core/Checkbox';


class Radio extends React.Component {
    state = {
        checked: false
    }
    toggleCheckbox = (event) => {
        this.setState({checked: event.target.checked})
        console.log(event.target);
    }
    render() {
        let inputValue = this.props.contents;
        if(inputValue === '65세 이상') {
            inputValue = 'MoreThan65';
        }else if (inputValue === '65세 미만') {
            inputValue = 'LessThan65';
        }

        return (
            <div className="Radio">
                <Checkbox 
                    style={{width: 25, height: 25, padding: 15}}
                    color="primary"
                    checked={this.state.checked}
                    onChange={this.toggleCheckbox}
                    value={inputValue}
                    />
                <div className="Radio-contents"> {this.props.contents} </div>
            </div>
        )
    }
}

export default Radio;