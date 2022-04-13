const config = require('./json/config.json');
const { exec } = require("child_process");

exec(`curl -X GET -H "Authorization: Bearer <${config.bearrer}>" "https://api.twitter.com/2/tweets/20"`, (stdout,stderr) => 
{
    try
    {
        if (stderr) 
        {
            console.log(`stderr: ${stderr}`);
            return;
        }
        else
        {
            console.log(`stdout: ${stdout}`);
            return;
        }
    }
    catch (ex)
    {
        console.log(ex);
        return;
    }
});