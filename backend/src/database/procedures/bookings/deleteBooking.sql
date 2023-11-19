-- USE XTours;



CREATE OR ALTER PROCEDURE deleteBooking
(@bookID VARCHAR(200))
AS
BEGIN
    UPDATE Bookings
    SET isDeleted = 1
    WHERE bookID = @bookID
END 

SELECT * FROM Bookings