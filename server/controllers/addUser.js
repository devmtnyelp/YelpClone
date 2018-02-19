const addUser = (req, res, next) => {
  req.app
    .get("db")
    .createUser(req.body)
    .then(data => res.json(data))
    .catch(console.log);
};

module.exports = { 
  addUser,
};
