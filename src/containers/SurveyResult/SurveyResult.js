import React from 'react';
import './SurveyResult.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import ResultPage from './ResultPage/ResultPage';

class SurveyResult extends React.Component {
    componentDidMount() {
        this.props.AnalyzeStart(); // 분석 시작.
        setTimeout(() => {
            this.props.Analyze_Finished();
        }, 3000); // 5초 후에 보여주자.
    } 

    render() {
        return (
            <div className="SurveyResult">
                {
                    this.props.loading ? (
                        <section className="SurveyResult-loading">
                            {this.props.loading ? (
                                <Spinner />
                            ) : null
                            }
                            <p>답변 내용을</p>
                            <h2> 분석하고 있습니다.</h2>
                            <div className='em'>
                                <em>케어링은 정부가 제공하는 <br/>
                                    최신 데이터를 기반으로 결과를 제공합니다.</em>
                                
                            </div>
                            <em style={{fontSize: '12px', textAlign: 'center'}}>잠시만 기다려주십시오..</em>
                        </section>
                    ) : ( //loading이 끝나면
                        <>
                            <ResultPage />
                        </>
                    )
                }
               
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        loading: store.results.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AnalyzeStart: () => dispatch({type: 'ANALYZE_START'}),
        Analyze_Finished: () => dispatch({type: 'ANALYZE_FINISHED'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyResult);