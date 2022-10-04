console.log('My App');
const express = require('express');
const routerApi=require('./router')

const app = express();
const port = 3001;

app.use(express.json());

routerApi(app)

app.get('/', (req,res)=>{

  res.send("desde la principal")

}  )


app.listen(port, () => {
  console.log('mi port' + port);
});
