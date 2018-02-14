module.exports = {
  storeUserInfoInHeroku: (req, res) => {
    const db = req.app.get('db');
    const { email, userid } = req.body;

    db.createUser([email, userid])
      .then(result => res.json(result))
      .catch(console.log);
  },
};

// req.app
// .get('db')
// .saveUser(req.body)
// .then(result => res.json(result));
// },

// sendInfoToDonationsDatabase: (req, res, next) => {
//     const dbInstance = req.app.get( 'db' );
//     const { amount,
//             iud,
//             campaign_id,
//             date } = req.body;

//     dbInstance.donations([ amount, iud, campaign_id, date ])
//         .then(result => {
//             return res.json(result)
//         })
//         .catch(console.log);
// };
