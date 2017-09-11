import * as React from "react";
import PropTypes from 'prop-types';

const style = {
    rootStyle: {
        marginBottom: '2em'
    },
    normalInput: {},
    errorInput: {
        border: '1px solid red'
    }
};

export default class AddParticipantForm extends React.Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        updateParticipantForm: PropTypes.func.isRequired,
        addParticipant: PropTypes.func.isRequired,
        addValidationError: PropTypes.func.isRequired,
    };

    addParticipant = (e) => {
        e.preventDefault();
        const {addValidationError, addParticipant, form} = this.props;
        const {name} = form;
        const numberOfTickets = parseInt(form.numberOfTickets, 10);
        if (name && numberOfTickets) {
            addParticipant({
                name: name,
                numberOfTickets
            });
            this.refs.focusOnMe.focus();
        } else {
            if (!name) {
                addValidationError('name', 'Feltet er påkrevd');
                this.refs.focusOnMe.focus();
            }
            if (!numberOfTickets) {
                addValidationError('numberOfTickets', 'Feltet er påkrevd');
            }
        }
    };

    decideInputStyle = (name) =>{
      if (this.props.form.errors[name]) {
          return style.errorInput;
      }

      return style.normalInput;
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
                               style={this.decideInputStyle('name')}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="number"
                               name="numberOfTickets"
                               className="form-control"
                               value={form.numberOfTickets}
                               placeholder="# tickets"
                               onChange={updateParticipantForm}
                               style={this.decideInputStyle('numberOfTickets')}
                        />
                    </div>
                    <div className="col-md-1">
                        <input type="submit"
                               className="btn btn-primary"
                               value="+"
                        />
                    </div>
                </div>
            </form>
        )
    }
}