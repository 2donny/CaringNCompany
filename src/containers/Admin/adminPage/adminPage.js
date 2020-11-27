import React from 'react'
import Modal from '../../../components/UI/Modal/Modal';
import './adminPage.css';
import TextField from '../../../components/UI/TextField/TextField';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-results';
import Table from '../../../components/UI/Table/Table';

class adminPage extends React.Component {
    state = {
        show: true,
        loading: true,
        password: '',
        superKey: 'caring123',
        fetchedArr: [],
    }
    onChangeHandler = (event) => {
        let password = event.target.value;
        this.setState({password});
    }
    btnClickHandler = () => {
        if(this.state.password == this.state.superKey) {
            console.log('same');
            this.setState({loading: false, show: false}); //슈퍼키가 맞다면, 메인 페이지 보여주기.
        }else {
            alert('Super key를 확인해주세요.');
        }
    }
    componentDidMount() {  
        axios.get('/results.json')
        .then(res => {
            console.log(res.data);
            let dataObj = res.data; // 모든 객체 받아오기
            let fetchArr = [];
            for (let keys in dataObj) {
                fetchArr.push({
                    id: keys,
                    ...dataObj[keys]
                });
            }
            fetchArr = fetchArr.reverse();
            console.log(fetchArr);
            this.setState({ fetchedArr: fetchArr });
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        let modalContents = (
            <div className="modal--contents">
                <h2>Please validate your super key.</h2>
                <TextField onChange={this.onChangeHandler} label="Super key" variant="standard" />
                <Button clicked={this.btnClickHandler} btnType="start"> Validation </Button>
            </div>
        )
        return (
            <div className="adminPage">
                {this.state.loading ? (
                    <>
                    </>                    
                ) : (
                    <>
                        <div className="adminPage--header">
                            <p>고객 관리 시스템</p>       
                        </div>
                        <Table 
                            data={this.state.fetchedArr}
                        />
                    </>
                )}
                <Modal modalClosed={this.modalCloseHandler} show={this.state.show} >
                    {modalContents}
                </Modal>
            </div>
        )
    }
}

export default adminPage;