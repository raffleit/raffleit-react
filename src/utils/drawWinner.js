function getWeighedList(participants) {
    const weighedList = [];
    for (let i = 0; i < participants.length; i++) {
        const participant = participants[i];
        for (let j = 0; j < participant.numberOfTickets; j++) {
            weighedList.push(participant);
        }
    }
    return weighedList;
}

function drawWinner(participants){
    const weighedList = getWeighedList(participants);
    const randomNum = Math.floor(Math.random() * weighedList.length);
    return weighedList[randomNum];
}

export default drawWinner;