-- USE XTours;


CREATE PROCEDURE deleteTour
    @tourID VARCHAR(100)
AS
BEGIN
    DELETE FROM Tours WHERE tourID = @tourID;
END;
