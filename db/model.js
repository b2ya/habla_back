import {Schema, model} from "mongoose";

const messageSchema = new Schema({
    user: String,
    message: {
        type: String,
        require: true,
    },
    // date: Date,
});

// messageSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id
//         delete returnedObject._id
//         delete returnedObject.__v
//         delete returnedObject.passwordHash
//     }
// })

const Message = model('Message', messageSchema)

export default { Message };

