'use strict'

const querystring = require('query-string');
const axios = require('axios');

const client_id = 'ac468ec84f8d4070843bb0ce3cfd5c95';
//process.env.SPOTIFY_CLIENT_ID; // client id
const client_secret = 'e35c37b3eb0f4fbfb45f71456255a6e7';
// process.env.SPOTIFY_CLIENT_SECRET; // secret
const redirect_uri = 'http://localhost:3001/callback';
// process.env.REDIRECT_URI; // redirect uri
const frontend_uri = 'http://localhost:3000';
// process.env.FRONTEND_URI;

const generateRandomString = function(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
  return text;
};
const stateKey = 'spotify_auth_state';

const login = (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

      const scope = [
     "playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-read-playback-state user-modify-playback-state app-remote-control streaming user-read-email user-read-private user-top-read"
   ]
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        redirect_uri: redirect_uri,
        scope: scope,
        state: state
      }));
  };


  const getToken = (req, res) => {
    const code = req.query.code || null;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      },
    })
    .then(response => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in} = response.data;
        const params = querystring.stringify({
          access_token, refresh_token, expires_in
        });
        res.redirect(`${frontend_uri}/?${params}`);
      } else {
        res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
      }
    })
    .catch(error => {
      res.send(error);
    });
  }
  
    


  module.exports = { login, getToken};
