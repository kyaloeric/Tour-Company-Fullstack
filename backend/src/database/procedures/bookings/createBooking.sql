-- USE XTours;

CREATE OR ALTER PROCEDURE createNewBooking
    (@bookID VARCHAR (255),
    @userID VARCHAR (255),
    @tourID VARCHAR (255),
    @totalprice INT,
    @totalBookCount INT)
AS
BEGIN
    INSERT INTO Bookings
    (bookID, userID, tourID, totalprice, totalBookCount)
    VALUES
    (@bookID, @userID,@tourID, @totalprice,@totalBookCount)
END