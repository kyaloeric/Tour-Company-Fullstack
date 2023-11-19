-- USE XTours;

-- CREATE OR ALTER PROCEDURE deleteReview
-- (@reviewID VARCHAR(100))
-- AS
-- BEGIN
--     UPDATE reviews
--     SET isDeleted = 1
--     WHERE reviewID = @reviewID
-- END 

SELECT * FROM Reviews 


-- ALTER TABLE Reviews
-- ADD isDeleted BIT NOT NULL DEFAULT 0;
