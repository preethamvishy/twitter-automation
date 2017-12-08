var Twit = require('twit');

var T = new Twit({
  consumer_key: '...',
  consumer_secret: '...',
  access_token: '...',
  access_token_secret: '...',
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests. 
});

var stream = T.stream('user');
stream.on('follow', newFollower); // when someone follows

function newFollower(followerEvent) {
  console.log('Follower Event is running');
  var name = followerEvent.source.name,
    screenName = followerEvent.source.screen_name,
    id = followerEvent.source.id_str;
  console.log('@' + screenName + ' (' + name + ') has followed you.');
  sendDirectMessage(id, name, screenName)
  follow(screenName);
}

function sendDirectMessage(id, name, screenName) {
  T.post("direct_messages/new", {
    user_id: id,
    text: 'Hi ' + name + ', thanks for following me. :)'
  });
}
function follow(screenName) {
  T.post('friendships/create', {
    screen_name: screenName
  }, (err, data, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Followed @' + screenName + '.');
    }
  });
}