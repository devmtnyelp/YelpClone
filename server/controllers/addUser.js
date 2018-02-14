const addUser = (req, res) => {
  req.app
    .get('db')
    .createUser(req.body)
    .then(data => res.json(data))
    .catch(console.log);
};

module.exports = { addUser };
