const initialState = {
    results: {
        nextbtnClicked: false,
        hasErrMsg: false,
        q1: { //1번 질문(question)
            a1: null, //1번 답(ans)
            a2: null,
        },
        q2: {
            a3: null,
            a4: null,
            a5: null,
            a6: null,
            a7: null,
            a8: null,
            a9: null,
            a10: null,
            a11: null,
        },
        q3: {
            a12: null,
            a13: null,
            a14: null,
            a15: null,
        },
        q4: {
            a16: null,
            a17: null,
            a18: null,
            a19: null,
            a20: null,
            a21: null,
            a22: null,
            a23: null,
            a24: null,
        },
        q5: {
            a25: null,
            a26: null,
        },
        q6: {
            a27: null,
            a28: null,
        },
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHECKED':
            let newState = {
                ...state.results
            }
            if(action.id === 1) {
                newState.q1.a1 = 1
            }else if(action.id === 2) {
                newState.q1.a2 = 1
            }
            
            else if(action.id === 3) {
                newState.q2.a3 = 1
            }else if(action.id === 4) {
                newState.q2.a4 = 1
            }else if(action.id === 5) {
                newState.q2.a5 = 1
            }else if(action.id === 6) {
                newState.q2.a6 = 1
            }else if(action.id === 7) {
                newState.q2.a7 = 1
            }else if(action.id === 8) {
                newState.q2.a8 = 1
            }else if(action.id === 9) {
                newState.q2.a9 = 1
            }else if(action.id === 10) {
                newState.q2.a10 = 1
            }else if(action.id === 11) {
                newState.q2.a11 = 1
            }

            else if(action.id === 12) {
                newState.q3.a12 = 1
            }else if(action.id === 13) {
                newState.q3.a13 = 1
            }else if(action.id === 14) {
                newState.q3.a14 = 1
            }else if(action.id === 15) {
                newState.q3.a15 = 1
            }

            else if(action.id === 16) {
                newState.q4.a16 = 1
            }else if(action.id === 17) {
                newState.q4.a17 = 1
            }else if(action.id === 18) {
                newState.q4.a18 = 1
            }else if(action.id === 19) {
                newState.q4.a19 = 1
            }
            else if(action.id === 21) {
                newState.q4.a21 = 1
            }else if(action.id === 22) {
                newState.q4.a22 = 1
            }else if(action.id === 23) {
                newState.q4.a23 = 1
            }else if(action.id === 24) {
                newState.q4.a24 = 1
            }
            
            else if(action.id === 25) {
                newState.q5.a25 = 1
            }else if(action.id === 26) {
                newState.q5.a26 = 1
            }
            
            else if(action.id === 27) {
                newState.q6.a27 = 1
            }else if(action.id === 28) {
                newState.q6.a28 = 1
            }else {
                return state
            }
            return {
                results: {
                    ...newState
                }
            }
        case 'UNCHECKED':
            const State = {
                ...state.results
            }
            if(action.id === 1) {
                State.q1.a1 = 0
            }else if(action.id === 2) {
                State.q1.a2 = 0
            }
            
            else if(action.id === 3) {
                State.q2.a3 = 0
            }else if(action.id === 4) {
                State.q2.a4 = 0
            }else if(action.id === 5) {
                State.q2.a5 = 0
            }else if(action.id === 6) {
                State.q2.a6 = 0
            }else if(action.id === 7) {
                State.q2.a7 = 0
            }else if(action.id === 8) {
                State.q2.a8 = 0
            }else if(action.id === 9) {
                State.q2.a9 = 0
            }else if(action.id === 10) {
                State.q2.a10 = 0
            }else if(action.id === 11) {
                State.q2.a11 = 0
            }

            else if(action.id === 12) {
                State.q3.a12 = 0
            }else if(action.id === 13) {
                State.q3.a13 = 0
            }else if(action.id === 14) {
                State.q3.a14 = 0
            }else if(action.id === 15) {
                State.q3.a15 = 0
            }

            else if(action.id === 16) {
                State.q4.a16 = 0
            }else if(action.id === 17) {
                State.q4.a17 = 0
            }else if(action.id === 18) {
                State.q4.a18 = 0
            }else if(action.id === 19) {
                State.q4.a19 = 0
            }
            else if(action.id === 21) {
                State.q4.a21 = 0
            }else if(action.id === 22) {
                State.q4.a22 = 0
            }else if(action.id === 23) {
                State.q4.a23 = 0
            }else if(action.id === 24) {
                State.q4.a24 = 0
            }
            
            else if(action.id === 25) {
                State.q5.a25 = 0
            }else if(action.id === 26) {
                State.q5.a26 = 0
            }
            
            else if(action.id === 27) {
                State.q6.a27 = 0
            }else if(action.id === 28) {
                State.q6.a28 = 0
            }else {
                return state
            }
            return {
                results: {
                    ...State
                }
            }
        case 'NEXTBUTTONCLICKED':
            return {
                results: {
                    ...state.results,
                    nextbtnClicked: true
                }
            }
        case 'INIT_NEXT_BUTTON':
            return {
                results: {
                    ...state.results,
                    nextbtnClicked: false
                }
            }
        case 'RETURNBUTTONCLICKED':
        case 'ERROR_MESSAGE_ON':
            return {
                results: {
                    ...state.results,
                    hasErrMsg: true,
                }
            }
        case 'INIT_ERROR_MESSAGE':
            return {
                results: {
                    ...state.results,
                    hasErrMsg: false,
                }
            }
        default: 
            return state;
    }
}

export default reducer;