-- USE XTours;


CREATE OR ALTER PROCEDURE getUserByEmail(
    @email VARCHAR(250)
)
AS
BEGIN
    SELECT  userID,
            fullName,
            email,
            password,
            role
    FROM Users WHERE email=@email;
END



UPDATE Users
SET role = 'admin'
WHERE email = 'erickyalo19@gmail.com';
