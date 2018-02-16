const storeUserInfoInHeroku = (req, res) => {
  req.app
    .get('db')
    .authUser(req.body)
    .then(result => res.json(result))
    .catch(console.log);
};
module.exports = { storeUserInfoInHeroku };
