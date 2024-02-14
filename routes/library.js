const express=require('express')
const LibraryController=require('../controllers/library.js');

const routes=express.Router();

routes.get('/getbooks',LibraryController.getbooks);
routes.get('/returnbook/:bookid',LibraryController.returnbook);
routes.post('/returnbooks',LibraryController.postreturnbooks);
routes.get('/returnbooks',LibraryController.getreturnbooks);
routes.post('/postbook',LibraryController.postbook);
module.exports=routes
