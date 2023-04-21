import express from "express";
import { router } from "../components/messages/network.js";


export const routes = function (server) {
    server.use('/message', router);
}