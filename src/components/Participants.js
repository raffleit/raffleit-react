import React from "react";
import {connect} from "react-redux";
import * as participantsActions from "../actions/participantsActions";
import AddParticipantForm from './AddParticipantForm';

const Participants = ({actions, form, participants}) => {
        return (
            <div className="col-md-5">
                <AddParticipantForm form={form}
                                    updateParticipantForm={actions.updateParticipantForm}
                                    addParticipant={actions.addParticipant}/>
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
};

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