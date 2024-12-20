# Metropolitian Museum Artwork App

Welcome to the **Metropolitan Museum Artwork App**, a full-stack web application designed to enhance your experience with the Metropolitan Museum of Art's collection. With features such as user authentication, personalized favorites, and browsing history, this app ensures your journey through art is both immersive and personalized.

---

## Features

### User Authentication
- Register and log in securely.
- Passwords are encrypted for enhanced security using JSON Web Tokens (JWT).

### Personalized Favorites and History
- Save your favorite artworks.
- Keep track of your browsing history.

### Responsive Design
- Fully responsive interface built with Next.js and Bootstrap.

### Dynamic Libraries
- Utility functions for user authentication and managing favorites/history.

---

## Technologies Used

### Frontend
- **Next.js**: Framework for React with server-side rendering.
- **Bootstrap**: CSS framework for responsive design.

### Backend
- **Node.js** and **Express**: Backend server to handle API requests.
- **MongoDB Atlas**: Cloud database for persisting user data.
- **Passport.js**: Middleware for authentication using JWT.

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Ashwin-BN/Metropolitan-Museum-of-Art.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd Metropolitan-Museum-of-Art  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  
4. Set up environment variables:  
   - Create a `.env` file in the project root.  
   - Add the following variables:  
     ```plaintext
     NEXT_PUBLIC_API_URL="your-deployment-url/api/user"  
     ```  
5. Start the server:  
   ```bash  
   npm run dev
   ```  
6. Access the app locally at `http://localhost:3000`.  

## Deployment  

The application is deployed on **Vercel** and can be accessed at: [Live Demo](https://metropolitan-museum-of-art.vercel.app/)  

## Usage  

1. **Search**: Enter keywords in the search bar to find related artworks.  
2. **Browse**: Use navigation categories to explore various collections.  
3. **Artwork Details**: Click on an artwork to view its detailed information and image.  

## Contributions  

Contributions are welcome! To contribute:  
1. Fork the repository.  
2. Create a new branch for your feature:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add your message"  
   ```  
4. Push to your branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Submit a pull request for review.  

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

🌟 **Discover. Learn. Explore.**  
Let the art inspire you!
