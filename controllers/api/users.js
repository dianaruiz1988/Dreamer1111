// the controllers handle the DATA from the models before it gets rendered to the Front End


const User = require('../../models/user');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

//the controllers take in the data from the models and checks it
//get credentials from front end
//we are going to receive email and password from req.body
//then use that email in.req.body to look up user with that email address
//if user is null- not able to find user then throw error

//he is creating functions basically that will be invoked inside the routes folder /api
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    //wait until user is created so i can do createJWT(user)line 46
    //will not jump and run or invoke line 44 until we get the data from the database. line 42 is telling it to wait for the data
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}


/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

//dont put anything in expiration if you don't want it