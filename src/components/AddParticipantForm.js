import * as React from "react";
import PropTypes from 'prop-types';

const style = {
    rootStyle: {
        marginBottom: '2em'
    }
};

export default class AddParticipantForm extends React.Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        updateParticipantForm: PropTypes.func.isRequired,
        addParticipant: PropTypes.func.isRequired
    };

    addParticipant = (e) => {
        const {addParticipant, form} = this.props;
        e.preventDefault();
        addParticipant({
            name: form.name,
            numberOfTickets: parseInt(form.numberOfTickets, 10)
        });
        this.refs.focusOnMe.focus();
    };

    render() {
        const {form, updateParticipantForm} = this.props;
        return (
            <form onSubmit={this.addParticipant}>
                <div className="row" style={style.rootStyle}>
                    <div className="form-group col-md-6">
                        <input type="text"
                               onChange={updateParticipantForm}
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
                               onChange={updateParticipantForm}/>
                    </div>
                    <div className="col-md-1">
                        <input type="submit"
                               className="btn btn-primary"
                               value="+"/>
                    </div>
                </div>
            </form>
        )
    }
}