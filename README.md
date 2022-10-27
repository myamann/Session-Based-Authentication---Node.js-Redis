# Simple Session Based Authentication Example

## Technologies

* Nodejs
* Expressjs
* Redis

## Setup
```
Steps to run this project:

1. Run `npm i` command and install all files
2. Download windows redis server and run (url) => `https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows`
3. Make your .env files and environments `process.env.COOKIE_NAME` and `process.env.SESSION_SECRET`
  
  Example .env file
  * SESSION_SECRET = 6bacc17e04487b095a3c8a3363f5cba02951f5caa0f4a45b9ebbdbd50ca534f82a82176b7e1a580c9a49028db49b876bc283bc0a04c09c5134cd22b502a9209a
  * COOKIE_NAME = sessid

5. Run `npm start` command
```
