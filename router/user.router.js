const express= require("express");

const faker= require("faker")

const routerUser= express.Router();


routerUser.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no hay parametros');
  }
});


routerUser.get('/user/:userId/pay/product/productId', (req, res) => {
  const { userId, productId } = req.params;
  res.json({
    userId,
    productId,
    name: 'arberja',
    price: 2000,
  });
});

module.exports =routerUser;
