
import store from '../messages/store.js';

function addMessage(user, message) {
    return new Promise((resolve, reject) => {        
        if(!user || !message) {
            reject('Los datos son incorrectos');
            console.log('[mensaggeController] No hay usuario o mensaje');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            // date: new Date
        }
        store.add(fullMessage);
        resolve(fullMessage);
    })
    
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

export default {
    addMessage,
    getMessages
}