CREATE OR ALTER PROCEDURE GetUserDetails(
    @userID VARCHAR(100)
)
AS
BEGIN
    SELECT
        userID,
        fullName,
        email,
        role
    FROM
        Users
    WHERE
        userID = @userID;
END;