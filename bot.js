const twit = require('./twit.js');

const figlet = require('figlet');

console.clear();
figlet('Rambling Biden bot', function(err, data) 
{
  if (err) 
  {
      console.dir(err);
      return;
  }
  console.log(data)
});



tweet("The question is whether or not we should be in a position where you uh um uh are why can't the the the experts say we know that this virus is in fact uh um uhh is it it it's going to be uh");

function tweet(text)
{
    try
    {
        twit.T.post('statuses/update', { status: text }, function(data, response) 
        {
            Tdata = data;
            Tresponse = response;

            console.log(`zzzz... Oh wait, I sent a tweet out!: ${text}`);
        })
    }
    catch (ex)
    {
        console.log(`An error occured. Here is the data: \n Response:${Tresponse} \n Data:${Tdata} \n Error:${ex}`);
    }
}
