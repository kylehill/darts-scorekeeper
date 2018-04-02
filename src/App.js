import React from "react"
import { connect } from "react-redux"
import "./App.css"

const App = (store) => {
  const clickResult = (result) => {
    store.dispatch({
      type: "THROW_DART",
      result
    })
  }

  const clickClear = () => {
    store.dispatch({ type: "CLEAR_ROUND" })
  }

  const clickAdvance = () => {
    store.dispatch({ type: "ADVANCE_ROUND" })
  }

  const clickReset = () => {
    store.dispatch({ type: "RESET_GAME" })
  }

  return (
    <div className="container">
      <div className="scoreboard-container">
        <div class="number-container">
          Target 
          <span className="number">{ store.round }</span>
        </div>
        <div class="number-container">
          Score
          <span className="number">{ store.displayScore }</span>
        </div>
      </div>

      <div className="result-container">
        <div className="result-button result-s" onClick={() => clickResult("S")}> S </div>
        <div className="result-button result-d" onClick={() => clickResult("D")}> D </div>
        <div className="result-button result-t" onClick={() => clickResult("T")}> T </div>
        <div className="result-button result-x" onClick={() => clickResult("X")}> X </div>
      </div>

      <div className="config-button-container">
        <div className="config-button" onClick={clickClear}>
          <span role="img" aria-label="Clear Round">🔄</span> Clear Round
        </div>
        <div className="config-button" onClick={clickAdvance}>
          <span role="img" aria-label="Advance Round">✅</span>️ Advance Round
        </div>
        <div className="config-button" onClick={clickReset}>
          <span role="img" aria-label="Reset Game">❌</span> Reset Game
        </div>
      </div>
    </div>
  )
}

export default connect(store => store)(App)
