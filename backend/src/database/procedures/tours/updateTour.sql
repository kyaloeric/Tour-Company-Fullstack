-- USE XTours;


CREATE OR ALTER PROCEDURE editTour
    @tourID VARCHAR(200),
    @name VARCHAR(255),
    @description VARCHAR(255),
    @destination VARCHAR(255),
    @startDate DATE,
    @endDate DATE,
    @price DECIMAL(10, 2),
    @duration VARCHAR(50),
    @type VARCHAR(50)
AS
BEGIN
    UPDATE Tours
    SET
        Name = @name,
        Description = @description,
        Destination = @destination,
        StartDate = @startDate,
        EndDate = @endDate,
        Price = @price,
        Duration = @duration,
        Type = @type
    WHERE
        TourID = @tourID;


    SELECT 'Tour updated successfully' AS Message;
END;
