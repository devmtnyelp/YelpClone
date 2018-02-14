const getUser = (req, res) => {
  req.app
    .get('db')
    .getUser(req.params)
    .then(response => {
      return res.json(response);
    })
    .catch(console.log);
};

module.exports = { getUser };
