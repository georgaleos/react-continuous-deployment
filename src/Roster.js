import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import PlayerAPI from "./api";
import Player from "./Player";

class Roster extends Component {

    render() {
        return (
            <div>
                <h2>This is a roster page!</h2>
                <Switch>
                    <Route exact path='/roster' component={FullRoster}/>
                    <Route path='/roster/:number' component={Player}/>
                </Switch>
            </div>
        )
    }

}

export default Roster;

class FullRoster extends Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        PlayerAPI.all().map(p => (
                            <li key={p.number}>
                                <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}