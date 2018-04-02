const actions = {
    THROW_DART(state, action) {
        if (state.roundFinished) {
            return state
        }

        const newState = Object.assign({}, state)
        newState.roundHistory = newState.roundHistory.concat(action.result)
        newState.thrown += 1

        switch(action.result) {
            case "S":
                newState.roundScore += newState.round
                newState.hit += 1
                break

            case "D":
                newState.roundScore += newState.round * 2
                newState.hit += 1
                break

            case "T":
                newState.roundScore += newState.round * 3
                newState.hit += 1
                break
        }

        if (newState.thrown === 3) {
            newState.roundFinished = true

            if (newState.hit === 3) {
                newState.roundScore += newState.round
            }
        }

        newState.displayScore = newState.roundScore + newState.gameScore
        return newState
    },

    CLEAR_ROUND(state, action) {
        return Object.assign({}, state, {
            roundScore: 0,
            roundFinished: false,
            thrown: 0,
            hit: 0,
            roundHistory: [],
            displayScore: state.gameScore
        })
    },

    ADVANCE_ROUND(state, action) {
        if (state.round === 50) {
            return state
        }
        
        const roundDarts = [...state.roundHistory, "X", "X", "X"].slice(0, 3)
        const newGameScore = state.roundScore + state.gameScore
        const newRound = state.round === 20 ? 50 : state.round + 1
        
        return {
            round: newRound,
            roundScore: 0,
            roundFinished: false,
            gameScore: newGameScore,
            displayScore: newGameScore,
            thrown: 0,
            hit: 0,
            roundHistory: [],
            gameHistory: [...state.gameHistory, roundDarts]
        }
    },

    RESET_GAME(state, action) {
        return initialState()
    }
}

const initialState = () => {
    return {
        round: 10,
        roundScore: 0,
        roundFinished: false,
        gameScore: 0,
        displayScore: 0,
        thrown: 0,
        hit: 0,
        roundHistory: [],
        gameHistory: []
    }
}

const reducer = (state = initialState(), action) => {
    if (actions[action.type]) {
        return actions[action.type](state, action)
    }

    return state
}

export default reducer