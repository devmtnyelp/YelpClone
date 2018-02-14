INSERT INTO reviews
    (userid, restaurantid, reviewtitle, reviewbody, rating, time)
VALUES
    ($
{userId}, ${restaurantId}, ${reviewTitle}, ${reviewBody}, ${rating}, ${time});