import React from 'react';
import './Radio.css';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';


class Radio extends React.Component {
    state = {
        checked: false
    }
    toggleCheckbox = (event) => {
        this.setState({checked: event.target.checked})
        let ans = parseInt(this.props.ans);
        if(event.target.checked === true) { //check일 때만 dispatching 해서 해당 id만 store에 저장한다.
            this.props.checked(ans); //이 Radio의 ans를 넘긴다.
        }else { // 체크를 풀면 store에 저장된 1 값을 0 으로 돌린다.
            this.props.unchecked(ans);
        }
    }
    render() {
        console.log(this.state.checked);
        // console.log('ans : ' + this.props.ans); // Radio의 answer에 따라 순서대로 번호부여
        return (
            <div className="Radio">
                <Checkbox 
                    style={{width: 25, height: 25, padding: 15, color: 'lightsalmon'}}
                    checked={this.state.checked}
                    onChange={this.toggleCheckbox}
                    value={this.props.ans}
                />
                <div className="Radio-contents"> {this.props.contents} </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checked: (ans) => dispatch({type: 'CHECKED', id: ans}),
        unchecked: (ans) => dispatch({type: 'UNCHECKED', id: ans})
    }
}
export default connect(null, mapDispatchToProps)(Radio);