const addUser = (req, res) => {
  console.log('req.bodyVVVVVVVVVVV')
  console.log(req.body)
  req.app
    .get('db')
    .createUser(req.body)
    .then(data => res.json(data))
    .catch(console.log);
};

module.exports = { addUser };
