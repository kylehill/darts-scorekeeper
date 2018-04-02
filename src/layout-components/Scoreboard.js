import React from "react"
import Styled from "styled-components"

const Triangle = (props) => {
    return (
        <svg height="4vh" width="4vh" viewBox="0 0 100 100">
            <polygon points="0,0 50,50 0,100" fill={props.active ? "white" : props.color} />
            <line x1="0" y1="100" x2="50" y2="50" strokeWidth="8" stroke="black" strokeOpacity=".2" />
        </svg>
    )
}

const PlayerName = Styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3vh;
    left: 5vh;
`

const PlayerScore = Styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3vh;
    right: 2vh;
    text-align: right;
    font-weight: 400;
`

const PlayerContainer = (props) => {
    return (
        <div {...props}>
            <Triangle color={props.color} active={props.active} />
            <PlayerName>{props.name}</PlayerName>
            <PlayerScore>{props.score.toLocaleString()}</PlayerScore>
        </div>
    )
}

const Player = Styled(PlayerContainer)`
    font-weight: ${props => props.active ? "400" : "300"};
    margin-bottom: 1px;
    background-color: ${props => props.active ? props.color : "white"};
    vertical-align: top;
    position: relative;
    padding: 1.5vh;
    color: ${props => props.active ? "white" : "#333"};
    text-shadow: ${props => props.active ? "2px 2px rgba(51, 51, 51, 0.4)" : "none" };
    
    &:nth-child(even) {
        margin-right: 0 !important;
    }

    border-bottom: solid 2px rgba(51, 51, 51, 0.2);
    border-right: solid 2px rgba(51, 51, 51, 0.2);
`

const ScoreboardContainer = Styled.div`
    border-top: solid 1px #333;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #333;

    ${Player} {
        width: ${props => props.playerCount < 5 ? "100%" : "calc(50% - 0.5px)" };
        display: inline-block;
        margin-right: ${props => props.playerCount > 4 ? "1px" : "0" };
    }
`

const Scoreboard = (props) => {
    return (
        <ScoreboardContainer playerCount={props.state.players.length}>
            {props.state.players.map((p, i) => {
                return (
                    <Player key={i} active={i === props.state.active} {...p} />
                )
            })}
        </ScoreboardContainer>
    )
}

export default Scoreboard