import {participants} from './participants';
import {decreaseTicketsForParticipant, addParticipant} from '../actions/participantsActions';

it('adds a participant after the others', () => {
    const newState = participants([participant('1', 1000)], addParticipant({name: "Yo", numberOfTickets: 100}));
    expect(newState.length).toEqual(2);
    expect(newState[0].id).toEqual('1');
    expect(newState[1].name).toEqual('Yo');
});

it('decreases the number of tickets', () => {
    const newState = participants([participant('1', 1000), participant('2', 1000)], decreaseTicketsForParticipant("1"));
    expect(newState).toEqual([participant('1', 999), participant('2', 1000)]);
});

it('decreases the number of tickets the other way', () => {
    const newState = participants([participant('1', 1000), participant('2', 1000)], decreaseTicketsForParticipant("2"));
    expect(newState).toEqual([participant('1', 1000), participant('2', 999)]);
});

function participant(id, numberOfTickets) {
    return {name: 'dummyName', numberOfTickets, id};
}