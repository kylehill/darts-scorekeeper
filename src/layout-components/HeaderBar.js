import React from "react"
import Styled from "styled-components"

const HeaderBarContainer = Styled.div`
    background-color: #333;
    height: 8vh;
    padding: 1vh 3vw;
    position: relative;
    color: white;
    font-weight: 300;
`

const MenuButton = Styled.div`
    div {
        background-color: white;
        padding: .3vh 0;
        width: 8vw;
        max-width: 40px;
        margin-top: 1vh;
        display: block;
        border-radius: 1vh;
    }
`

const AimingAt = Styled.div`
    position: absolute;
    right: 3vw;
    top: 1vh;
    font-size: 5vh;
    text-align: center;
    display: inline-block;
`

const AimingNumber = Styled.div`
    display: inline-block;
    background: white;
    color: #333;
    border-radius: 3px;
    font-weight: 500;
    text-align: center;
    width: 10vh;
`

const HeaderBar = (props) => {
    return (
        <HeaderBarContainer>
            <MenuButton>
                <div></div>
                <div></div>
                <div></div>
            </MenuButton>
            <AimingAt>Target: <AimingNumber>{props.aimingAt}</AimingNumber></AimingAt>
        </HeaderBarContainer>
    )
}

export default HeaderBar