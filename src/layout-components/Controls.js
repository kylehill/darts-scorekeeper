import React from "react"
import Styled from "styled-components"


const ControlsContainer = Styled.div`
    padding: 0 4vw;
`

const ActivePlayerContainer = Styled.div`
    padding-top: 2vh;
    position: relative;
    border-bottom: solid 1px #333;
`

const ActiveName = Styled.div`
    font-weight: 300;
    font-size: 5vh;
    position: absolute;
    top: 2vh;
    left: 4vh;
`

const ActiveScore = Styled.div`
    font-size: 7vh;
    position: absolute;
    top: 1vh;
    right: 0;
`

const ActiveTurn = Styled.div`
`

const DartResult = Styled.div`
`

const ActiveTurnScore = Styled.div`
`

const Triangle = (props) => {
    return (
        <svg height="6vh" width="6vh" viewBox="0 0 100 100">
            <polygon points="0,0 50,50 0,100" fill={props.active ? "white" : props.color} />
            <line x1="0" y1="100" x2="50" y2="50" strokeWidth="8" stroke="black" strokeOpacity=".2" />
        </svg>
    )
}

const ActivePlayer = (props) => {
    return (
        <ActivePlayerContainer>
            <Triangle color={props.player.color} />
            <ActiveName>{props.player.name}</ActiveName>
            <ActiveScore>{props.player.score}</ActiveScore>
        </ActivePlayerContainer>
    )
}

const Controls = (props) => {
    return (
        <ControlsContainer>
            <ActivePlayer player={props.state.players[props.state.active]} />
            <ActiveTurn>
                {props.state.activeTurn.map(d => {
                    return (<DartResult result={d}>{d}</DartResult>)
                })}
                <ActiveTurnScore> = {props.state.turnScore}</ActiveTurnScore>
            </ActiveTurn>
        </ControlsContainer>
    )
}


export default Controls