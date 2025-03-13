# ✅ Task Manager App  

A simple **Task Manager** built with **React (Frontend)** and **Node.js/Express (Backend)**. This app allows users to **add, delete, and mark tasks as completed**.

---

## 🌟 Features
- 📝 **Add Tasks**  
- ✅ **Mark Tasks as Complete** (Strike-through effect)  
- 🛡️ **Delete Tasks**  
- 📱 **REST API Integration**  
- 🌙 **Dark Mode Support**  

---

## 🖥️ Tech Stack
### **Frontend:**
- ⚡ React.js  
- 🎨 Tailwind CSS  
- 🔗 Axios (for API calls)  

### **Backend:**
- 🔵 Node.js  
- 🚀 Express.js  
- 📄 MongoDB (via Mongoose)  

---

## 🚀 Live Demo  
[🔗 View Deployment](https://your-vercel-app.vercel.app) 

---

## 💂️ Installation & Setup  
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/72897/task-manager.git
cd task-manager
```

### **2️⃣ Install Dependencies**
#### **For Frontend:**
```sh
cd client
npm install
```

#### **For Backend:**
```sh
cd server
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the `server` directory and add:
```
PORT=5000
MONGO_URI="mongodb+srv://kunal2674:Kunal1234@cluster0.lsrfc.mongodb.net/task-manager"
```

### **4️⃣ Start the App**
#### **Run Backend**
```sh
cd server
npm start
```
#### **Run Frontend**
```sh
cd client
npm start
```

---

## 🌐 API Endpoints  
| Method | Endpoint       | Description               |
|--------|--------------|---------------------------|
| GET    | `/api/tasks` | Fetch all tasks           |
| POST   | `/api/tasks` | Create a new task         |
| PUT    | `/api/tasks/:id` | Toggle task completion |
| DELETE | `/api/tasks/:id` | Delete a task           |

---

## 🚀 Deployment  
### **Frontend → Vercel**
1. Push frontend code to GitHub.
2. Connect GitHub to Vercel.
3. Deploy with default settings.

### **Backend → Render/Railway**
1. Push backend code to GitHub.
2. Deploy on **Render** or **Railway.app**.
3. Use MongoDB Atlas for database.

---



## 🏰 Future Improvements
- 🏛️ Add **Task Categories**
- 🗓️ Add **Due Dates**
- 📊 Task **Analytics Dashboard**

---

## 👨‍💻 Author
**Kunal Singh**  
🚀 [LinkedIn](https://www.linkedin.com/in/kunal-singh-454368289/) | 💻 [GitHub](https://github.com/72897)  

---

## 🐝 License  
This project is licensed under the **MIT License**.

---

### 🌟 If you like this project, please ⭐ it on GitHub!  

