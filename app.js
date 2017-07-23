const SpotifyWebHelper = require('spotify-web-helper');
const helper = SpotifyWebHelper();

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));

app.get('/', function(req, res){
  //res.send('Welcome!');
  res.sendFile('index.html');
});

app.get('/read_user', function(req, res){
  console.log('test');
  playMusic();
});

app.get('/pause', function(req, res){
  console.log('test');
  pause();
});

function pause(){
  helper.player.on('error', err => {
        if (error.message.match(/No user logged in/)) {
          // also fires when Spotify client quits
          console.log(error.message);
        } else {
          // other errors: /Cannot start Spotify/ and /Spotify is not installed/
          console.log(error.message);
        }
      });

  helper.player.on('ready', () => {

    // Playback events
    helper.player.on('play', () => {});
    /*helper.player.on('pause', () => { });
    helper.player.on('seek', newPosition => {});
    helper.player.on('end', () => { });
    helper.player.on('track-will-change', track => {});
    helper.player.on('status-will-change', status => {});*/

    // Playback control. These methods return promises
    //helper.player.play('spotify:album:1xn54DMo2qIqBuMqHtUsFd');
    helper.player.pause();
    //helper.player.seekTo(60); // 60 seconds*/

    // Get current playback status, including up to date playing position
    console.log(helper.status);
    // 'status': {
    //    'track': ...,
    //    'shuffle': ...,
    //    'playing_position': ...
    //  }

  });
}

function playMusic(){
  helper.player.on('error', err => {
      if (error.message.match(/No user logged in/)) {
        // also fires when Spotify client quits
        console.log(error.message);
      } else {
        // other errors: /Cannot start Spotify/ and /Spotify is not installed/
        console.log(error.message);
      }
    });

  helper.player.on('ready', () => {

    // Playback events
    helper.player.on('play', () => {});
    /*helper.player.on('pause', () => { });
    helper.player.on('seek', newPosition => {});
    helper.player.on('end', () => { });
    helper.player.on('track-will-change', track => {});
    helper.player.on('status-will-change', status => {});*/

    // Playback control. These methods return promises
    helper.player.play('spotify:track:5CtI0qwDJkDQGwXD1H1cLb');
    /*helper.player.pause();
    helper.player.seekTo(60); // 60 seconds*/

    // Get current playback status, including up to date playing position
    console.log(helper.status);
    // 'status': {
    //    'track': ...,
    //    'shuffle': ...,
    //    'playing_position': ...
    //  }

  });
}

playMusic();

console.log('Listening on 8888');
app.listen(8888);