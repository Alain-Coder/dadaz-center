# DADAZ Center - Next.js Website

A modern, dynamic website for DADAZ Center built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## Features

- 🎨 Modern, responsive design
- 📝 Dynamic blog with Firebase integration
- 👤 User authentication
- ❤️ Like and comment system
- 🔍 Search and filter functionality
- 📱 Mobile-first responsive design
- ⚡ Optimized performance with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- Firebase project

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Enable Authentication (Email/Password)
   - Copy your Firebase config

4. Configure environment variables:
   - Copy `.env.local` and add your Firebase configuration
   - Update the values with your actual Firebase project details

5. Run the development server:
   ```bash
   npm run dev
   ```

### Firebase Setup

1. **Firestore Database:**
   - Create collections: `blogPosts`, `comments`, `likes`
   - Set up security rules for read/write access

2. **Authentication:**
   - Enable Email/Password authentication
   - Configure authorized domains

3. **Sample Data:**
   - The app includes sample blog data that can be initialized
   - Use the `initializeBlogData` utility to populate your database

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (Firebase config)
├── types/              # TypeScript type definitions
├── data/               # Sample data
└── utils/              # Utility functions
```

## Key Components

- **BlogCard**: Displays blog post previews with like/comment counts
- **CommentSection**: Real-time comments with Firebase integration
- **AuthModal**: User authentication modal
- **Header/Footer**: Navigation and site information

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase**: Backend services (Firestore, Authentication)
- **Lucide React**: Modern icon library

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

3. Configure environment variables in your deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.