-- USE XTours;


CREATE PROCEDURE getTourByID
    @tourID VARCHAR(100)
AS
BEGIN
    SELECT * FROM Tours WHERE tourID = @tourID;
END;
