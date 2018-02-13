const addUser = (req, res) => {
  const db = req.app.get('db');
  db
    .getUser(req.body)
    .then((response) => {
      if (!response.length) {
        db.createUser(req.body).then(data => res.json(data));
      }
    })
    .catch(console.log);
};

module.exports = { addUser };
