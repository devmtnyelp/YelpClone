const storeUserInfoInHeroku = (req, res) => {
  console.log("authCTRL", req.body);
  req.app
    .get("db")
    .createUser(req.body)
    .then(result => res.json(result))
    .catch(console.log);
};
module.exports = { storeUserInfoInHeroku };

// PLEASE DONT CHANGE THIS CODE. OTHER CONFLICTING FILES CONNECTED TO THIS
// COMPONENT WILL BE DELETED LATER
