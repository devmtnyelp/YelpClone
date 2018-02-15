INSERT INTO users (email, userid)
VALUES (${email}, ${userid})
RETURNING *;