import React from 'react';
import ReactDOM from 'react-dom';
import AddParticipantForm from './AddParticipantForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddParticipantForm form={{}}
                                        addParticipant={()=>{}}
                                        updateParticipantForm={()=>{}} />, div);
});