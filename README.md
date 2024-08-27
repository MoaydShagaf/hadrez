# هدرز (Hadrez) - Libyan Chat App

![Hadrez Logo](./hadrez.jpg)

Hadrez is a real-time chat application built specifically for the Libyan community. Developed using **React Native** for Android, **Express.js** for the backend, and **MongoDB** for the database, Hadrez allows users to communicate in a seamless and efficient manner. This application supports features like user authentication, real-time messaging, and contact management.

## Features
- **User Authentication:** Sign-up, login, and manage user sessions securely.
- **Real-time Messaging:** Chat with friends and family in real-time using WebSocket technology (Socket.io).
- **Contact Management:** View and manage your chat contacts.
- **Message History:** Access past conversations.
- **Profile Settings:** Customize your user profile and settings.
- **Libyan Cultural Touch:** The app is designed specifically for the Libyan dialect and user experience.

## Tech Stack

### Frontend (Mobile)
- **React Native:** Build the cross-platform Android application.
- **React Navigation:** Manage navigation and app structure.
- **AsyncStorage:** Handle local storage for user sessions.
- **Axios:** API client for communicating with the backend.

### Backend (Server)
- **Node.js & Express.js:** Serve as the backend API.
- **Socket.io:** Enable real-time communication.
- **JWT (JSON Web Token):** Secure authentication for user sessions.
- **MongoDB & Mongoose:** NoSQL database to store user, chat room, and message data.

### Database
- **MongoDB Atlas:** Cloud-hosted MongoDB solution for database management.
- **Mongoose:** MongoDB ORM for managing schemas and models.

## Installation

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (or MongoDB Atlas for cloud deployment)
- **React Native CLI**

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hadrez.git
   cd hadrez
