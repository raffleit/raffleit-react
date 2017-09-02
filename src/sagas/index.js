import { put, select, takeEvery } from 'redux-saga/effects'
import {DRAW_WINNER, addWinner} from '../actions/winnerActions';
import {decreaseTicketsForParticipant} from '../actions/participantsActions';
import guid from '../utils/guid';
import drawWinner from '../utils/drawWinner';

function* draw(action) {
    const state = yield select();
    const participants = state.participants;
    const winningParticipant = drawWinner(participants);
    if (winningParticipant) {
        const winner = {name: winningParticipant.name, id: guid()};
        yield put(addWinner(winner));
        yield put(decreaseTicketsForParticipant(winningParticipant.id));
    }
}

function* sagas() {
    yield takeEvery(DRAW_WINNER, draw);
}

export default sagas;