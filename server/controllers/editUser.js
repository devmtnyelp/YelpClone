const editUser = (req, res) => {
  req.app
    .get('db')
    .editUser(req.body)
    .then(response => res.json(response))
    .catch(console.log);
};

module.exports = { editUser };
