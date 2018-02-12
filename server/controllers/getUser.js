const getUser = (req, res) => {
  req.app
    .get('db')
    .getUser(req.body)
    .then(response => res.json(response))
    .catch(console.log);
};

module.exports = { getUser };
