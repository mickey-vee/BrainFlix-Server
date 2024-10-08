# BrainFlix Backend (Server-Side)

This repository contains the **server-side** implementation of the BrainFlix full-stack video viewing application. The backend is built using **Node.js** and **Express.js**, with **MySQL** as the database for managing video data, comments, and uploads. It provides API endpoints for the front-end React application to interact with.

## Features

- **API Endpoints**: Provides RESTful routes for CRUD operations on videos and comments.
- **Video Data**: Handles video metadata and supports video uploads (represented by images in this project).
- **Comments**: Manages comments for each video, including adding, retrieving, and deleting comments.
- **Database Integration**: Uses **MySQL** and **Knex.js** for data persistence and query building.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building RESTful APIs.
- **MySQL**: Relational database for storing video and comment data.
- **Knex.js**: SQL query builder for connecting Node.js to MySQL.

## API Endpoints

### Videos

- **GET /videos**: Fetches all videos.
- **GET /videos/:id**: Fetches a single video by its ID.
- **POST /videos**: Uploads a new video (image).
- **DELETE /videos/:id**: Deletes a video by its ID.

### Comments

- **GET /videos/:id/comments**: Fetches all comments for a specific video.
- **POST /videos/:id/comments**: Adds a new comment to a specific video.
- **DELETE /videos/:videoId/comments/:commentId**: Deletes a specific comment from a video.
