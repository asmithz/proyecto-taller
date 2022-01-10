const express= require('express');
const router = express.Router();

const { ingresarChat } = require('../controladores/chat')
const { eliminarChat } = require('../controladores/chat')
const { agregarChat } = require('../controladores/chat')
const { obtenerChat } = require('../controladores/chat')
const { verificarChat } = require('../controladores/chat')

router.post('/agregarChat/:id', agregarChat);
router.get('/obtenerChat/:id', obtenerChat);
router.get('/verificarChat/:id', verificarChat);
router.delete('/eliminarChat/:id', eliminarChat)

module.exports = router;