UPDATE reviews
SET reviewtitle = ${reviewTitle}, reviewbody = ${reviewBody}, rating = ${rating}
WHERE id = ${reviewId}