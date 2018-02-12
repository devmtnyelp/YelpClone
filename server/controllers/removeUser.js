const removeUser = (req, res) => {
  req.app
    .get('db')
    .deleteUser(req.params)
    .then(response => res.json(response))
    .catch(console.log);
};

module.exports = { removeUser };
