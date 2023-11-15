-- USE XTours;

CREATE PROCEDURE getTourDetails
    @tourID VARCHAR(100)
AS
BEGIN
    SELECT tourID, name, description, destination, price
    FROM Tours
    WHERE tourID = @tourID;
END;
