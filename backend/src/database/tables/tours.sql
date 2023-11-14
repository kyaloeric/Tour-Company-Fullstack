CREATE TABLE Tours(
    tourID VARCHAR(100) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(300) NOT NULL,
    destination VARCHAR (250) NOT NULL,
    price INT NOT NULL,
    type VARCHAR(200) NOT NULL,
    startDate VARCHAR(200) NOT NULL,
    endDate VARCHAR(100),
    duration VARCHAR (100)
);

SELECT * FROM Tours;