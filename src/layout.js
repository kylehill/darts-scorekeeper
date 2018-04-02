import React from "react"
import HeaderBar from "./layout-components/HeaderBar"
import Scoreboard from "./layout-components/Scoreboard"
import Controls from "./layout-components/Controls"

const scoreboardState = {
    active: 0,
    activeTurn: ["S", "X", ""],
    turnScore: 20,
    players: [
        { name: "Kyle", score: 285, color: "#E93635" },
        { name: "Kate", score: 1078, color: "#0051BA" },
        { name: "Rick", score: 59, color: "#0CA22A" },
        { name: "Dan", score: 221, color: "#6D4783" },
        { name: "Ben", score: 460, color: "#F078A2" },
        { name: "Alex", score: 460, color: "#47BDA8" },
        { name: "Cara", score: 460, color: "#EBB422" },
        { name: "Baltz", score: 460, color: "#E46729" },
    ]
}

const Layout = (props) => {
    return (
        <main>
            <HeaderBar aimingAt={"Bull"} />
            <Controls state={scoreboardState} />
            <Scoreboard state={scoreboardState} />
        </main>
    )
}

export default Layout