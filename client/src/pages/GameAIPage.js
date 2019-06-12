import React, { Component } from "react";
import GameCom from "../components/GameCom"


class GameAIPage extends Component {
    render() {
        return (
            <>
                <GameCom multiPlayer={1} practiceMode={0}></GameCom>
            </>
        );
    }
}

export default GameAIPage;
