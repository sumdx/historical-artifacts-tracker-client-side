# Historical Artifacts Tracker

**Purpose**: This is the client-side application for the Historical Artifacts Tracker project. It enables users to interact with the historical artifacts database, view details, like artifacts, and manage their data with real-time data fetching and updates.

**Live URL**: [Historical Artifacts Tracker Webite](https://aistorical-artifacts-tracker.web.app/)

## Installing the website

To set up the Luxe Studio Website locally, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/sumdx/historical-artifacts-tracker-client-side.git
cd fit4souls-client-side
```

### Install Dependencies:

```bash
npm install
```

### Start the Development Server:

```bash
npm run dev
```

### Open in Browser:

Navigate to:

```
http://localhost:5173
```

---

## Key Features

- **User Interface**: A responsive and interactive frontend for tracking historical artifacts.
- **Responsive Design**: The website is fully responsive, adapting to different screen sizes, from mobile phones to desktops.
- **Historical Artifact Database**: Users can view, like, and explore various artifacts listed in the database.
- **Firebase Authentication**: Secure user login and registration with Firebase.
- **Dynamic Routing**: React Router is used for seamless navigation across different pages.
- **Real-Time Artifact Interaction**: Users can interact with artifacts by liking them, viewing detailed descriptions, and checking images.
- **Helmet for Dynamic Title**: Dynamic page titles with React Helmet for better SEO management.
- **Carousel for Image Display**: Display historical artifacts in an interactive carousel.
- **TailwindCSS & DaisyUI**: Modern styling with utility-first CSS using TailwindCSS and UI components with DaisyUI.
  
## Frontend Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation and routing between pages.
- **React Helmet Async**: To manage dynamic document head and improve SEO.
- **Axios**: For HTTP requests to the backend API.
- **Firebase**: For user authentication.
- **TailwindCSS**: For utility-first CSS framework to build custom designs.
- **DaisyUI**: TailwindCSS component library for faster UI design.

## NPM Packages Used

- **axios**: Promise-based HTTP client for making requests to the backend API.
- **firebase**: To implement Firebase authentication and interact with Firebase services.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point for React DOM rendering.
- **react-helmet-async**: A library to manage the document head, useful for dynamic page titles and SEO.
- **react-icons**: Library to include popular icons in React components.
- **react-responsive-carousel**: A carousel component for displaying images interactively.
- **react-router-dom**: Declarative routing for React applications.
- **sweetalert2**: For better, customizable pop-up alerts.
- **tailwindcss**: A utility-first CSS framework for styling the application.
- **daisyui**: TailwindCSS component library to speed up UI development.

  
## Dependencies  
List the key dependencies used in the project:  
```json
"dependencies": {
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.4.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^6.28.1",
    "sweetalert2": "^11.15.3"
  },
  
