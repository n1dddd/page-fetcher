const request = require('request'); //npm request module, uses net and http
const fs = require('fs'); //require file system

const args = process.argv.slice(2); //take node two command line arguments
const url = args[0]; //Initialize variable url to command line argument
const filePath = args[1]; //Initialize variable filePath to command line argument

request(url, (error,response,body) => { //request for command line argument url
  if (error) {
    console.log(error);
  }
  console.log(response); //logs the server response
  fs.writeFile(filePath, body, err => { //write the file to the described file path
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`); //log to the user how many bytes of information was received and downloaded
  });
});