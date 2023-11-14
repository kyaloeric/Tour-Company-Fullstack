CREATE OR ALTER PROCEDURE registerUser(
    @userID VARCHAR(100),
    @fullName VARCHAR(200),
    @email VARCHAR(250),
    @password VARCHAR(100)
)
AS BEGIN
    INSERT INTO Users(userID,fullName,email,password)
     VALUES(@userID,@fullName,@email,@password)

END