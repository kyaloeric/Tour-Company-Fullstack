
-- USE XTours;

-- SELECT * from Bookings

CREATE OR ALTER PROCEDURE updateBookingDetails
(
    @tourID VARCHAR(255),
    @userID VARCHAR(255),
    @totalprice INT,
    @totalBookCount INT,
    @bookID VARCHAR(255)
)
AS
BEGIN
    UPDATE Bookings
    SET tourID = @tourID, userID = @userID, totalprice = @totalprice, totalBookCount = @totalBookCount
    WHERE bookID = @bookID
END