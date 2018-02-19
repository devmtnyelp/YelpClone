SELECT *
FROM reviews, userinfo
<<<<<<< Updated upstream
WHERE reviews.restaurantid = ${restaurantId} AND userinfo.userid = reviews.userid
=======
WHERE reviews.restaurantId = ${restaurantId} AND userinfo.userid = reviews.userid
>>>>>>> Stashed changes
