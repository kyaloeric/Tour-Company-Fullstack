export interface User {
    userID:string,
    fullName:string,
    email:string,
    password:string,
    role:string
}


export interface LoginResponse {
    // userID(userID: any): unknown;
    token: string;
    userID:string
    // Add other properties if needed
  }

  export interface userLogin {
    email: string,
    password : string
}
