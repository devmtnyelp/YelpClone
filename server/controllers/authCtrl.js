// module.exports = {
//   storeUserInfoInHeroku: (req, res) => {
//     console.log('database: ');
//     const db = req.app.get('db');
//     const { email, userid } = req.body;

//     db.createUser([email, userid])
//       .then(result => res.json(result))
//       .catch(console.log);
//   },
// };

const storeUserInfoInHeroku = (req, res) => {
  req.app
    .get('db')
    .authUser(req.body)
    .then(result => res.json(result))
    .catch(console.log);
};
module.exports = { storeUserInfoInHeroku };