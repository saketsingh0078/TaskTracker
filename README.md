# CreworkAssignment 
LiveLink : https://crework-assignment-mu.vercel.app/

This project includes a task management system with authentication features. Users can sign in and sign up, and manage their tasks using a dashboard with a sidebar and columns.

## Features
- **Sign In / Sign Up:** 
  - Sign in with email and password.
  - ![Screenshot 2024-07-29 235404](https://github.com/user-attachments/assets/c42d2fdc-95d4-4d7f-9ccd-33d558719f4c)
  - Sign up with full name, email, and password (passwords are encrypted before storing).
  - ![Screenshot 2024-07-29 235340](https://github.com/user-attachments/assets/20c1d94e-d0f8-4ef7-8cb6-b80dcece9639)

- **Dashboard:**
  - Sidebar displaying user name and logout button.
  - Main area with four columns: To Do, In Progress, Under Review, and Finished.
  - Each column has a button to add new tasks.
  - Add tasks with title, description, status, priority, and deadline.
  - Move tasks between columns.
  - ![Screenshot 2024-07-29 235946](https://github.com/user-attachments/assets/3e9a4f12-b0f8-4fc5-98e2-9df58d74c97f)
    
- **Authentication:** 
  - Uses NextAuth for secure authentication and access control.

## Installation

Follow these steps to set up the project locally:

1. Clone the Project:
   git clone https://github.com/saketsingh0078/creworkAssignment/

2. Create Environment Variables:
Create a .env file in the root directory.
 MONGODB_URI=<your-mongodb-uri>
 NEXTAUTH_SECRET=<your-nextauth-secret>
 NEXTAUTH_URL=<your-nextauth-url>

3. Install Dependencies:
   npm install

4. Run the Project:
   npm run dev

Usage
- Sign In / Sign Up: Use the provided forms to sign in or create a new account.
- Dashboard: After logging in, you'll see the dashboard with four columns:
- To Do: Add new tasks, view, and move them.
- In Progress: Add new tasks, view, and move them.
- Under Review: Add new tasks, view, and move them.
- Finished: Add new tasks, view, and move them.
- Adding Tasks: Click the add button in any column to create a new task. Enter the title, description, status, priority, and deadline.
