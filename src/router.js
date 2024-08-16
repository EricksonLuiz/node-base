const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController')
const router = Router();

// router.get(
//   '/contacts',
//   //Middleware
//   (request, response) => {
//     request.appId = 'MeuAppId';
//     response.send('teste')
//     next(); // Pula para o próximo Middlewares
//   },
//   //Rota
//   ContactController.index
// )
router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contacts', ContactController.store)


module.exports = router;
