-- USE XTours

-- -- SELECT * from Tours

CREATE OR ALTER PROCEDURE getAllReviews
AS 
BEGIN
    SELECT * FROM reviews where isDeleted = 0
END