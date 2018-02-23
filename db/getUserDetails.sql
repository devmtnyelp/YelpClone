SELECT *
FROM users, userinfo
WHERE users.userid = ${userid} AND userinfo.userid = users.userid
