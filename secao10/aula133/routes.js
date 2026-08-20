import express from 'express';
const route = express.Router();
import { paginaInicial, trataPost } from './controllers/homeController.js'

route.get('/', paginaInicial);
route.post('/', trataPost)

export default route;
