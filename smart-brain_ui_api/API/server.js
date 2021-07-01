// import express library

const express = require('express');

// to make the password more secure with bcrypt

const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

// knex is the app that we can use to connect our server and our database

const knex = require('knex')

// set the basic information of the database 
// including client, host, user, password and the name of database

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');



const db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
  });
// set a variable to import express library

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(`It's working`);
});

app.get('/test', (req,res) => {
    res.send('what is wrong?');
})

app.post('/signin', signin.handleSignin(db, bcrypt));

app.post('/register', register.handleRegister(db, bcrypt));

app.get('/profile/:id', profile.handleProfileGet(db));

app.put('/image', image.handleImage(db));

app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3001, () => {
    console.log(`app is running on post ${process.env.PORT}`);
});
