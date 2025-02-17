

---

# 🚀 **ASTRONEXUS** 🌌

## **About the Project** 📖

**ASTRONEXUS** is a web application designed to provide users with the latest information and news about space exploration, astronomical events, and planetary discoveries. The project aims to present a clean, user-friendly interface that fetches real-time data from various space agencies, primarily NASA, making it an ideal platform for space enthusiasts and researchers to stay updated.

### **Objective:** 🎯
The main goal behind creating **ASTRONEXUS** was to bring together the best of space data into one platform, offering:
- 🌠 Real-time space news, including images and updates from space agencies.
- 🛸 Personalized user experience with saved articles and preferences.
- 🌗 Dark and light theme toggles for improved user experience.
- 📱 Accessible space services like space weather, planetary insights, and more.

## **Why I Built This Project** 💡

As a space enthusiast and someone passionate about web development, I wanted to create a platform that bridges the gap between space exploration data and the general public. While browsing space-related news and data, I noticed a lack of consolidated platforms that offer easy access to updates from multiple agencies. **ASTRONEXUS** solves this problem by:
1. 🚀 Integrating **NASA API** to provide accurate and timely information.
2. 💾 Creating a space for users to save their favorite articles for later reading.
3. 🌑 Allowing users to personalize the interface with a dark/light theme toggle.
4. 🌍 Offering a responsive design for accessibility on both desktop and mobile devices.

This project not only satisfied my curiosity about space but also allowed me to experiment with various technologies like **MERN stack (MongoDB, Express.js, React, Node.js)** and **API integration**, making it a valuable learning experience.

## **How I Built the Project** 🔧

The development of **ASTRONEXUS** was carried out in phases, focusing on user-centric design and smooth functionality. Below is an overview of the steps involved in building this application:

### 1. **Frontend (React)** 💻
   - **React.js** was used to build the frontend for its component-based architecture and efficient rendering.
   - The design is minimalist with a **black and white theme** for a space-inspired look, with the ability to toggle between dark and light modes.
   - **React Router** was used for navigation between pages (Home, Saved Articles, Settings, etc.).
   - Integrated **CSS** for styling and **Tailwind CSS** for responsive design.
   
### 2. **Backend (Node.js & Express)** 🌐
   - **Node.js** and **Express.js** were used to create the backend to handle user authentication, saving articles, and fetching data from APIs.
   - **JWT Authentication** was implemented to secure user login sessions.
   - The backend connects to a **MongoDB** database for storing user data, saved articles, and preferences.

### 3. **APIs Integrated** 🌍
   - Integrated the **NASA API** for real-time data:
     - **NASA API** for "Photo of the Day", space news, and events.
   - This API provides dynamic and up-to-date content for the platform, ensuring accurate information is available to users.

### 4. **Authentication & User Management** 🔐
   - Users can register, log in, and save articles to their profile using JWT-based authentication.
   - Implemented **password hashing** using **bcrypt.js** for security.

### 5. **Theme Toggle** 🌙🌞
   - Implemented a **dark/light theme toggle** using **localStorage** to persist the user's theme preference across sessions.
   - The dark theme offers a space-like ambiance, while the light theme ensures readability in well-lit environments.

## **Technologies Used** ⚙️

- **Frontend:**
  - **React.js**: A JavaScript library for building user interfaces.
  - **React Router**: For navigation and routing.
  - **Tailwind CSS**: A utility-first CSS framework to create custom designs.
  - **Axios**: For handling API requests.
  - **JWT (JSON Web Token)**: For secure authentication.

- **Backend:**
  - **Node.js**: A runtime environment for executing JavaScript server-side.
  - **Express.js**: A web framework for building RESTful APIs.
  - **MongoDB**: A NoSQL database to store user data and saved articles.
  - **JWT**: For secure login/authentication.
  - **bcrypt.js**: For hashing passwords and securing authentication.

- **API:**
  - **NASA API**: Provides access to images, space news, and events.

- **Version Control:**
  - **Git**: For version control.
  - **GitHub**: To host the code repository.

## **Project Features** 🔑

- **User Registration and Login**: Secure authentication using JWT.
- **Saved Articles**: Users can save their favorite articles for later reading.
- **Dark/Light Mode Toggle**: Provides an option to switch between dark and light themes.
- **Real-Time Space Data**: Fetches up-to-date space-related information from NASA.
- **Responsive Design**: Fully responsive for a smooth user experience across devices.

## **How to Run the Project Locally** 🔧

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/astronexus.git
   cd astronexus
   ```

2. Install dependencies for both client and server:

   For the **client**:
   ```bash
   cd client
   npm install
   ```

   For the **server**:
   ```bash
   cd server
   npm install
   ```

3. Start the server:
   ```bash
   npm run start
   ```

4. Start the client:
   ```bash
   cd client
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the app.

## **IMAGES OF MY WEBSITE** ##
 ![Screenshot 2025-02-17 170005](https://github.com/user-attachments/assets/bd47ab85-0207-416e-93b6-380c30807351)

 ![Screenshot 2025-02-17 170145](https://github.com/user-attachments/assets/e2bfdf67-b05e-4a1b-9df4-c7935e9f50fe)
 
![Screenshot 2025-02-17 170158](https://github.com/user-attachments/assets/18c02f18-ede0-4a8c-8aa2-d9f77abcc931)

![Screenshot 2025-02-17 170206](https://github.com/user-attachments/assets/087a6e6f-8422-46fc-8d18-cd7d0bff8aff)

![Screenshot 2025-02-17 170214](https://github.com/user-attachments/assets/8c0ed1ee-49af-40bb-b452-2d7d4f692b00)

![Screenshot 2025-02-17 170223](https://github.com/user-attachments/assets/acc35d24-d0bc-475b-838a-15f636c85d66)

![Screenshot 2025-02-17 170257](https://github.com/user-attachments/assets/b9efae09-bea9-4fe2-b399-6992a326d2b6)



## **Conclusion** 🏁

**ASTRONEXUS** is a dynamic and feature-rich web application that showcases the latest space exploration data from NASA. It provides a personalized experience with user authentication, saved articles, and the ability to toggle between light and dark themes. By integrating APIs and implementing a clean user interface, this project stands as a testament to my web development skills and my passion for space exploration.

Feel free to explore, give feedback, or contribute! 🌟

---
