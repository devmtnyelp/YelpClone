const editUser = (req, res) => {
  console.log("req.body", req.body);
  req.app
    .get("db")
    .saveUserInfo(req.body)
    .then(response => res.json(response))
    .catch(console.log);
};

module.exports = { editUser };
