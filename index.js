const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// application/x-www-form-urlencoded 분석
app.use(bodyParser.urlencoded({ extended : true }));

// application/json 분석
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// path가 /register에 post 요청이 왔을 경우
app.post("/register", (req, res) => {
  console.log(req.body);
  // 우선은 무조건 success, 그리고 id값 반환
  return res.json({success : true, id : req.body.id});
})
