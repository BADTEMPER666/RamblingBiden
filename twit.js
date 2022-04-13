const config = require('./json/config.json');

const twit = require("twit");

const T = new twit
({
    consumer_key: `${config.apikey}`,
    consumer_secret: `${config.apiSecret}`,
    access_token: `${config.access}`,
    access_token_secret: `${config.accessSecret}`,
});

module.exports =
{
    T,
}