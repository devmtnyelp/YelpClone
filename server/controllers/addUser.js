const addUser = (req, res, next) => {
  console.log(req)
  req.app
    .get("db")
    .createUser(req.body)
    .then(data => res.json(data))
    .catch(console.log);
};

module.exports = { 
  addUser 
};
