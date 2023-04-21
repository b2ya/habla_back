import Message from '../../db/model.js';

const list = [];

async function addMenssage(message) {
    const myMessage = new Message({
        user: message.user,
        message: message.message,
        // date: new Date
    });
    // console.log(myMessage);
    await myMessage.save();
}

function getMenssages() {
    return list;
}

export default {
    add: addMenssage,
    list: getMenssages

}