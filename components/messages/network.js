import { Router } from 'express';
import controller from '../messages/controller.js'
export const router = Router();


import response from '../../network/response.js';

router.get("/", (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch((e=> {
            response.error(req, res, 'Unexpected Error', 500, e)
        }))
});

router.post("/", (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=> {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "Información invalido", 400, "Usuario o mensaje no enviados")
        })
});