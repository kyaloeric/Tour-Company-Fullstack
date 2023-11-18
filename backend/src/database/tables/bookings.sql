-- USE XTours;


CREATE TABLE Bookings(
    bookID VARCHAR(300) NOT NULL PRIMARY KEY,
    totalBookCount INT NOT NULL,
    totalprice INT NOT NULL,
    tourID VARCHAR(100) NOT NULL,
    userID VARCHAR(100) NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (tourID) REFERENCES tours(tourID),
    
)

ALTER TABLE bookings
ADD isDeleted BIT DEFAULT 0

-- UPDATE reviews SET isDeleted = 0 

