DELETE FROM reviews WHERE id = ${reviewId} RETURNING *;
