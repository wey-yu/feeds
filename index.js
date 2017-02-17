// feeds
// Add twitter stream API

const express = require("express");
const bodyParser = require("body-parser");

const Twitter = require('twitter');
const fetch = require('node-fetch');
const extractor = require('unfluff');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

class HttpException extends Error {
  constructor(response) {
    super("HttpException");
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }
}

let informations = (event) => {

  console.log("🐼", event.user.screen_name)

  console.log(
    event.id,
    event.lang,
    event.text,
    event.source
  );

  event.entities.urls.forEach(url => {
    console.log("🌍", url.expanded_url)

    fetch(url.expanded_url, {
      method: "GET",
      headers: {
        "Content-Type": "text/html"
      }
    }).then(response => {
      if (response.ok) {
        return response.text()
      } else {
        throw new HttpException(response);
      }
    }).then(html => {
      //console.log("🤖", html)
      let data = extractor.lazy(html, "en");
      console.log("🤖", data.title());
      console.log("🤖", data.softTitle());
      console.log(data.date());
      console.log(data.copyright());
      console.log(data.author());
      console.log(data.publisher());
      console.log(data.text());
      console.log(data.image());
      console.log(data.tags());
      console.log(data.videos());
      console.log(data.canonicalLink());
      console.log(data.lang());
      console.log(data.description());
      console.log(data.favicon());


    }).catch(err => {
      //TODO
    })


  })

  event.entities.hashtags.forEach(hashtag => {
    console.log("🍄", hashtag.text)
  })
  event.entities.user_mentions.forEach(user => {
    console.log("🐹", user.screen_name)
  })
}

/*
let stream_javascript = client.stream('statuses/filter', {track: 'javascript'});
stream_javascript.on('data', event => informations(event));

stream_javascript.on('error', (error) => {
  throw error;
});

let stream_iot = client.stream('statuses/filter', {track: 'iot'});
stream_iot.on('data', event => informations(event));

stream_iot.on('error', (error) => {
  throw error;
});
*/


let port = process.env.PORT || 8080;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send({message:"I ❤️ 🐼 and 🤖", remark:"hello 🌍"});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)
