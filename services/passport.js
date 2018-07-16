const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        //URL that the user is redirected to upon granting permission for authentication
        callbackURL: '/auth/google/callback'
    },(accessToken, refreshToken, profile, done) => {
        //information about the user to be added to the database
    console.log("access token", accessToken);
    console.log("refresh token ", refreshToken);
    console.log("profile:", profile);
    }
    )
);