SELECT *
FROM reviews, userinfo
WHERE reviews.restaurantId = ${restaurantId} AND userinfo.userid = reviews.userid