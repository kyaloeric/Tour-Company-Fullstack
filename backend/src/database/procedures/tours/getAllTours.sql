-- USE XTours;

CREATE OR ALTER PROCEDURE fetchAllTours
AS
BEGIN
    SELECT *
    FROM Tours
    WHERE isDeleted = 0;
END;
