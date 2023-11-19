-- USE XTours;
-- CREATE TABLE Reviews(
--     reviewID VARCHAR(100) PRIMARY KEY,
--     userID VARCHAR(100) FOREIGN KEY REFERENCES Users(userID),
--     tourID VARCHAR(100) FOREIGN KEY REFERENCES Tours(tourID),
--     reviewComment VARCHAR(400) NOT NULL
-- )

SELECT * from Reviews;

-- DROP TABLE Reviews;

 ALTER TABLE Reviews
 ADD isDeleted BIT NOT NULL DEFAULT 0;
