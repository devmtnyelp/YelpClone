SELECT *
FROM reviews, userinfo
WHERE reviews.restaurantid = ${restaurantId} AND userinfo.userid = reviews.userid
