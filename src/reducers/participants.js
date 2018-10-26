import * as participantsActions from '../actions/participantsActions';
import guid from '../utils/guid';

export function participants(state = [], action) {
    switch (action.type) {
        case participantsActions.ADD_PARTICIPANT:
            const participantWithId = {...action.participant, id: guid() };
            return [...state, participantWithId];
        case participantsActions.REMOVE_PARTICIPANT:
            return state.filter(el => el.id !== action.id);
        case participantsActions.DECREASE_TICKETS_FOR_PARTICIPANT:
            return state.map((participant) => {
                if (participant.id !== action.id) {
                    return participant;
                }
                return { ...participant, numberOfTickets: participant.numberOfTickets - 1 };
            });
        default:
            return state;
    }
}

const defaultForm = { name: '', numberOfTickets: '', errors: {} };
export function form(state = defaultForm, action) {
    switch (action.type) {
        case participantsActions.UPDATE_PARTICIPANT_FORM:
            return { ...state, [action.key]: action.value };
        case participantsActions.ADD_VALIDATION_ERROR:
            const newErrors = { ...state.errors, [action.key]: action.value };
            return { ...state, errors: newErrors };
        case participantsActions.REMOVE_VALIDATION_ERROR:
            const errorsWithoutKey = state.errors;
            delete errorsWithoutKey[action.key];
            return { ...state, errors: errorsWithoutKey };
        case participantsActions.ADD_PARTICIPANT:
            return defaultForm;
        default:
            return state;
    }
}