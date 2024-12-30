# Metropolitan Museum Artwork App  

Welcome to the **Metropolitan Museum Artwork App**, a full-stack web application designed to enhance your experience with the Metropolitan Museum of Art's collection. The app offers secure user authentication, personalized favorites, and a responsive design for an immersive art journey.  

## Features  

### User Authentication  
- Secure registration and login.  
- Passwords are encrypted using JSON Web Tokens (JWT) for enhanced security.  

### Personalized Favorites and History  
- Save your favorite artworks for easy access.  
- Keep track of your browsing history.  

### Responsive Design  
- Fully responsive interface built with Next.js and Bootstrap for seamless usability across devices.  

### Dynamic Libraries  
- Utility functions for efficient user authentication and management of favorites/history.  

---

## Technologies Used  

### Frontend  
- **Next.js**: Framework for React with server-side rendering.  
- **Bootstrap**: CSS framework for responsive design.  
- **React-Bootstrap**: React components for Bootstrap styles.  
- **Jotai**: State management library for managing application state.  
- **SWR**: Data fetching library for caching and revalidation.  

### Backend  
- **Node.js** and **Express.js**: Backend server to handle API requests.  
- **MongoDB Atlas**: Cloud database for persisting user data.  
- **Passport.js**: Middleware for authentication using JWT.  

---

## Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Ashwin-BN/Metropolitan-Museum-of-Art.git  
   ```  

2. **Navigate to the project directory**:  
   ```bash  
   cd Metropolitan-Museum-of-Art  
   ```  

3. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

4. **Set up environment variables**:  
   - Create a `.env` file in the project root.  
   - Add the following variables:  
     ```env  
     NEXT_PUBLIC_API_URL="your-deployment-url/api/user"  
     ```  

5. **Start the server**:  
   ```bash  
   npm run dev  
   ```  

6. **Access the app locally**:  
   Visit [http://localhost:3000](http://localhost:3000).  

---

## Deployment  

The application is deployed on Vercel and can be accessed at: [Live Demo](your-live-demo-link).  

---

## Usage  

- **Search**: Enter keywords in the search bar to find related artworks.  
- **Browse**: Use navigation categories to explore various collections.  
- **Artwork Details**: Click on an artwork to view detailed information and images.  

---

## Contributing  

Contributions are welcome!  

1. **Fork the repository**.  
2. **Create a new branch**:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. **Commit your changes**:  
   ```bash  
   git commit -m "Add your message"  
   ```  
4. **Push to your branch**:  
   ```bash  
   git push origin feature-name  
   ```  
5. **Submit a pull request** for review.  

---

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  
