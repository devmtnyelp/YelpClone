const removeUser = (req, res) => {
  console.log("req.query:" + req.query)
  req.app
    .get('db')
    .deleteUser(req.query)
    .then(response => res.json(response))
    .catch(console.log);
};

module.exports = { removeUser };
