# MERN CRUD Operation

A full-stack web application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)** that demonstrates Create, Read, Update, and Delete (CRUD) operations.

## 🚀 Features

- **Create:** Add new records.
- **Read:** Fetch and display records from the database.
- **Update:** Edit existing records.
- **Delete:** Remove records.
- RESTful API integration between frontend and backend.
- MongoDB database integration.
- Responsive user interface.

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML5 and CSS3

**Backend**
- Node.js
- Express.js
- REST APIs

**Database**
- MongoDB
- Mongoose

**Tools**
- Git and GitHub
- VS Code
- Postman

## 📁 Project Structure

```text
MERN_CRUD_Operation/
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── index.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

*Note: Adjust the folder structure to match your actual project.*

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd MERN_CRUD_Operation
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

Start the backend server:

```bash
npm start
```

If your project uses Nodemon, you can run:

```bash
npm start
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd client
npm install
npm start
```

Open the local URL displayed in your terminal, commonly `http://localhost:5173` for Vite projects.

## 🔗 API Endpoints

Example CRUD endpoints (adjust to match your backend routes):

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Fetch all records |
| GET | `/api/items/:id` | Fetch a record by ID |
| POST | `/api/items` | Create a record |
| PUT | `/api/items/:id` | Update a record |
| DELETE | `/api/items/:id` | Delete a record |

## 🧪 Testing

You can test the backend APIs using **Postman**.

1. Start the backend server.
2. Send GET, POST, PUT, and DELETE requests to the appropriate endpoints.
3. Verify that records are correctly stored and updated in MongoDB.
4. Check that the frontend displays the updated data.

## 🔐 Environment Variables

Keep sensitive information in your `.env` file.

- Never upload database credentials or API secrets to GitHub.
- Add `.env` to your `.gitignore` file.
- Provide an `.env.example` file with placeholder values if needed.

## 📌 Future Improvements

- User authentication and authorization.
- Form validation and improved error handling.
- Search, filtering, and pagination.
- Deployment of the frontend and backend.

## 👨‍💻 Author

**Kundan Kumar**

B.Tech – Computer Science and Engineering (AI & ML)

## 📄 License

This project is available for educational and learning purposes. Add an appropriate open-source license if you intend to distribute it.
