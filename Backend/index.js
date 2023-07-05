const express = require('express');
const connectDB = require('./connectdb.js');
const app = express()
const port = 5000
connectDB()
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/new',require('./Routes/UserRoutes.js'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
