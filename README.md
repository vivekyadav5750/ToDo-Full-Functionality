# ToDo

ToDo is a dynamic and user-friendly task management application designed to help you manage your daily tasks efficiently. Built with React and powered by Vite, it offers a seamless experience with real-time updates and a beautiful UI, thanks to Tailwind CSS. Firebase integration ensures secure authentication and real-time database updates, making task management hassle-free and accessible from anywhere.

## Key Features

- **User Authentication**: Secure login and registration system.
- **Google Authentication**: Quick sign-in using Google accounts.
- **Real-time Database**: Tasks are updated in real-time for all devices.
- **Task Management**: Add, toggle, sort, edit, and delete tasks with ease.

## Technologies Used

- **React/Vite**: For a fast, modern web development experience.
- **Firebase**: Provides a real-time database and secure authentication.
- **Tailwind CSS**: For styling and responsive design.

## Project Setup

Follow these steps to set up and run the project locally.

### Prerequisites

- Ensure you have Node.js and npm installed on your system.

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/vivekyadav5750/ToDo-Full-Functionality.git
   cd ToDo
2. **Install dependencies**
   ```sh
   npm install
3. **Set up Firebase**
     Create a Firebase project in the Firebase console.
Enable Authentication and Realtime Database.
Add your Firebase project's configuration to a .env file at the root of your project
   ```sh
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_APP_ID=your_app_id
4. **Run the project**
   ```sh
   npm run dev
This will start the development server. Open http://localhost:3000 to view the application in your browser.

## Live Demo
Experience ToDo live at https://to-do-full-functionality.vercel.app/.

Enjoy managing your tasks with ToDo! ```
   
