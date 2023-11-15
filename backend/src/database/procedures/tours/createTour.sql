-- USE XTours;



CREATE PROCEDURE AddTour
    @name VARCHAR(200),
    @description VARCHAR(300),
    @destination VARCHAR(250),
    @price INT,
    @type VARCHAR(200),
    @startDate VARCHAR(200),
    @endDate VARCHAR(100),
    @duration VARCHAR(100)
AS
BEGIN
    INSERT INTO Tours (name, description, destination, price, type, startDate, endDate, duration)
    VALUES (@name, @description, @destination, @price, @type, @startDate, @endDate, @duration);
END;
