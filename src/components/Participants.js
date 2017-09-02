import React from "react";
import {connect} from "react-redux";
import * as participantsActions from "../actions/participantsActions";

const style = {
    rootStyle: {
        marginBottom: '2em'
    }
};

class Participants extends React.Component {

    addParticipant = (e) => {
        const {actions, form} = this.props;
        e.preventDefault();
        actions.addParticipant({
            name: form.name,
            numberOfTickets: parseInt(form.numberOfTickets, 10)
        });
        this.refs.focusOnMe.focus();
    };

    render() {
        const {actions, form, participants} = this.props;
        return (
            <div className="col-md-5">
                <form onSubmit={this.addParticipant}>
                    <div className="row" style={style.rootStyle}>
                        <div className="form-group col-md-6">
                            <input type="text"
                                   onChange={actions.updateParticipantForm}
                                   name="name"
                                   value={form.name}
                                   className="form-control"
                                   placeholder="Name"
                                   ref="focusOnMe"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number"
                                   name="numberOfTickets"
                                   className="form-control"
                                   value={form.numberOfTickets}
                                   placeholder="# tickets"
                                   onChange={actions.updateParticipantForm}/>
                        </div>
                        <div className="col-md-1">
                            <input type="submit"
                                   className="btn btn-primary"
                                   value="+"/>
                        </div>
                    </div>
                </form>
                {participants.length > 0 &&
                <table className="table">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td># tickets</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {participants.map(p => {
                        return (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.numberOfTickets}</td>
                                <td>
                                    <button className="btn btn-link"
                                            onClick={() => actions.removeParticipant(p.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    participants: state.participants,
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    actions: {
        addParticipant: (participant) => {
            dispatch(participantsActions.addParticipant(participant))
        },
        removeParticipant: (id) => {
            dispatch(participantsActions.removeParticipant(id))
        },
        updateParticipantForm: (e) => dispatch(participantsActions.updateParticipantForm(e.target.name, e.target.value)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Participants);