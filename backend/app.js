const express = require("express");
const Twitter = require("twit");
const app = express();
var cors = require("cors");

app.use(cors());

const client = new Twitter({
  consumer_key: "CONSUMER_KEY",
  consumer_secret: "CONSUMER_SECRET",
  access_token: "ACCESS_TOKEN",
  access_token_secret: "ACCESS_TOKEN_SECRET",
});

app.get("/home_timeline", (req, res) => {
  const params = {
    tweet_mode: "extended",
    count: 20,
  };
  console.log("get TimeLine");

  client
    .get(`statuses/home_timeline`, params)
    .then((timeline) => {
      console.log(timeline);

      res.send(timeline);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.get("/lists/statuses", (req, res) => {
  const params = {
    tweet_mode: "extended",
    count: 20,
    list_id: "1238584955560697861",
  };
  console.log("get COVID-19 tweets");

  client
    .get(`lists/statuses`, params)
    .then((lists) => {
      console.log(lists);

      res.send(lists);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(4201, () => console.log("Server running"));
