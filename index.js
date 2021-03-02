const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { Router } = require('express');

// html 사용할 경우
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// application/x-www-form-urlencoded 분석
app.use(bodyParser.urlencoded({ extended : true }));

// application/json 분석
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log("call /")
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

app.get("/firebase-test", (req, res) => {
  res.render("firebase.ejs")
})

  // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBwbgbYMHQ3AQjYfLYgMiAHYhTVuNGsT6c",
  authDomain: "mybulletinboardsystem.firebaseapp.com",
  databaseURL: "https://mybulletinboardsystem-default-rtdb.firebaseio.com",
  projectId: "mybulletinboardsystem",
  storageBucket: "mybulletinboardsystem.appspot.com",
  messagingSenderId: "537073061673",
  appId: "1:537073061673:web:17ce0e40925fa5dd163138"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var test = {
  name: "이준석",
  email: "junsugi@velog",
}

var database = firebase.database();