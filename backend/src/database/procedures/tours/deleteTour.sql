-- USE XTours;


-- CREATE PROCEDURE deleteTour
--     @tourID VARCHAR(100)
-- AS
-- BEGIN
--     DELETE FROM Tours WHERE tourID = @tourID;
-- END;


-- ALTER TABLE Tours
-- ADD isDeleted BIT NOT NULL DEFAULT 0;


-- CREATE OR ALTER PROCEDURE softDeleteTour
--     @tourID VARCHAR(100)
-- AS
-- BEGIN
--     UPDATE Tours
--     SET isDeleted = 1
--     WHERE tourID = @tourID;
-- END;
