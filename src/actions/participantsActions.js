export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';

export function addParticipant(participant) {
    return {
        type: ADD_PARTICIPANT,
        participant
    };
}

export const UPDATE_PARTICIPANT_FORM = 'UPDATE_PARTICIPANT_FORM';
export function updateParticipantForm(key, value) {
    return {
        type: UPDATE_PARTICIPANT_FORM,
        key, value
    }
}

export const ADD_VALIDATION_ERROR = 'ADD_VALIDATION_ERROR';
export function addValidationError(key, value) {
    return {
        type: ADD_VALIDATION_ERROR,
        key, value
    }
}

export const REMOVE_VALIDATION_ERROR = 'REMOVE_VALIDATION_ERROR';
export function removeValidationError(key) {
    return {
        type: REMOVE_VALIDATION_ERROR,
        key
    }
}

export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
export function removeParticipant(id) {
    return {
        type: REMOVE_PARTICIPANT,
        id
    }
}

export const DECREASE_TICKETS_FOR_PARTICIPANT = 'DECREASE_TICKETS_FOR_PARTICIPANT';
export function decreaseTicketsForParticipant(id) {
    return {
        type: DECREASE_TICKETS_FOR_PARTICIPANT,
        id
    }
}