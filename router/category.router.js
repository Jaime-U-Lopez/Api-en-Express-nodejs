const express= require("express");
const faker =require("faker");

const router=express.Router();



router.get('/', (req, res) => {
  const { id1, id2 } = req.params;

  res.json({
    id1,
    id2,
    name: 'arberja',
    price: 2000,
  });
});




router.get('/cate/:id1/product/:id2', (req, res) => {
  const { id1, id2 } = req.params;

  res.json({
    id1,
    id2,
    name: 'arberja',
    price: 2000,
  });
});


module.exports =router;
