import React, {Component} from "react";
import PlayerAPI from "./api";

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: PlayerAPI.get(parseInt(props.match.params.number, 10))
        }
    }

    render() {
        if (!this.state.player) {
            return (
                <div>Sorry, but the player was not found</div>
            )
        }

        return (
            <div>
                <h1>{this.state.player.name} (#{this.state.player.number})</h1>
                <h2>{this.state.player.position}</h2>
            </div>
        )
    }

}

export default Player;