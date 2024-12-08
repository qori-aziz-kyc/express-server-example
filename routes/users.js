var express = require('express');
var router = express.Router();
const users = require('../services/users');


/* GET users listing. */
router.get('/', async function(req, res, next)  {
  try {
    res.json(await users.getUsers(req.query.page));
  } catch (err) {
    console.error(`Error while getting all users `, err.message);
    next(err);
  }
});

/* GET one user listing. */
router.get('/:id', async function(req, res, next)  {
  try {
    res.json(await users.getOneUser(req.params.id));
  } catch (err) {
    console.error(`Error while getting user on id ${req.params.id}`, err.message);
    next(err);
  }
});

/* ADD one user . */
router.post('/', async function(req, res, next)  {
  try {
    await users.addUser(req.body.name, req.body.city, req.body.age);
    res.json({"message": "success"});
  } catch (err) {
    console.error(`Error while adding users`, err.message);
    next(err);
  }
});

module.exports = router;
