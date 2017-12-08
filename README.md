# twitter-automation
A NodeJS project to automate your twitter account to perform tasks like expressing gratitude to a new follower via direct message/@reply or following back new followers. 

This project uses the twit Twitter API client by ttezel - https://github.com/ttezel/twit

# Pre-requisites
This project requires Twitter API keys and tokens. Get your credentials - https://apps.twitter.com/.

# Usage

Add your keys and tokens: 
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
})

npm install
node automator.js
