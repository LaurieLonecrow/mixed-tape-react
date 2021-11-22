# MIXED TAPE


The app pulls data from Spotify and shows a user's playlists, allowing customizations such as adding descriptions and saving the playlists in order to share them with other users.

## Installation

- This app can be forked and run locally by implementing the .env.example file as the root .env file, with the correct port numbers for your client and server ports. 
- You will need to set up a Spotify Developer account so that you can create your own Spotify Client Id and Secret, and don't forget to set your Spotify redirect url in the Spotify App settings to match your url/callback. 
- You will need to implement a MongoDB connection.

## How it works

This app is built using React with Styled Components, and served in Express/Node.js with a database on MongoDB Atlas controlled with Mongoose.  
