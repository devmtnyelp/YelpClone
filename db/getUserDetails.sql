SELECT *
FROM users, userinfo
WHERE users.userid = ${userId} AND userinfo.userid = users.userid
