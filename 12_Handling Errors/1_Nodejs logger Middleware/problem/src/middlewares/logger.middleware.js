// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs'
// Write your code here
const fsPromise = fs.promises;

async function log(logData){
  try{
      logData = `\n${new Date().toString()} - ${logData}`;
      await fsPromise.appendFile('log.txt', logData);
  }catch(err){
      console.log(err);
  }
}

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  // if(!req.url.includes('login')){
    const logData = `\nreq URL:${req.url} - \nreq Body:${JSON.stringify(req.body)}`;
    await log(logData);
    // }
    next();
};
export default loggerMiddleware;
