-- USE XTours;

CREATE OR ALTER PROCEDURE getAllBookings
AS 
BEGIN
    SELECT * FROM Bookings where isDeleted = 0
END