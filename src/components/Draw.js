import React from "react";
import {connect} from "react-redux";
import * as winnerActions from "../actions/winnerActions";

const Draw = ({actions, winners}) => {
    return (
        <div className="col-md-7">
            <button className="btn btn-success btn-lg"
                    onClick={actions.drawWinner}>Draw</button>
            <ul className="list-unstyled">
                {winners.map(winner => {
                    return (
                        <li key={winner.id} style={{fontSize: '3em'}}>{winner.name}</li>
                    )
                })}
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    winners: state.winners
});

const mapDispatchToProps = dispatch => ({
    actions: {
        drawWinner: () => dispatch(winnerActions.drawWinner())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Draw);