const express=require("express")
const productsRouter=require('./product.router');
const userRouter=require('./user.router');
const categoryRouter=require('./category.router');

function routerApi(app) {

  const router=express.Router();
  app.use('/api/v1',router);
  app.use('/products', productsRouter);
  app.use('/user', userRouter);
  app.use('/categories', categoryRouter);
}

module.exports=routerApi;
