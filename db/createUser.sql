INSERT INTO users (email, userid)
VALUES (${email}, ${userid});

INSERT INTO userinfo (userid, name, city, state, avatar)
VALUES (${userid}, ${name}, ${city}, ${state}, ${avatar})
RETURNING *;