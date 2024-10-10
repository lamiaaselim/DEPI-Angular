export interface USERModel {
  id?: string;       // Optional ID (if using Firebase auto-generated IDs)
  email: string;     // User's email
  password: string;  // User's password
  name?: string;     // Optional: User's name
  role?: string;     // Optional: User's role, such as 'admin' or 'user'
}
