# Faux-mato: A Mock Food Ordering App

## 🚨 Disclaimer
The project uses **live Swiggy APIs**, which are **protected by CORS** and can only be accessed **from localhost or the Swiggy website**. As a result, this project **cannot be hosted**. Additionally, Swiggy APIs are subject to changes over time, so parts or the entirety of the project might **stop functioning** in the future.

---

## 📌 Introduction
Faux-mato is a **mock food ordering application** that mirrors the **Swiggy** website UI while utilizing live Swiggy APIs to fetch real-time restaurant and menu data. It is built using **React.js**, **Redux Toolkit**, **React Router v7**, **Tailwind CSS**, and **custom hooks**.

This project serves as an **educational and experimental** platform for practicing frontend development, API integration, state management, and routing in React applications.

---

## 🛠️ Features
- **Live Restaurant Data**: Fetches real-time restaurant data from Swiggy APIs.
- **Menu Display**: Displays restaurant menus dynamically.
- **Higher Order Components**: Utilizes HOCs to transform components into more informative ones.
- **Cart Management**: Uses Redux Toolkit for adding/removing items from the cart.
- **Local data caching**: Implements session storage to persist homepage data to prevent from unnecessary data fetching.
- **React Router v7**: Implements dynamic routing for restaurant details and search.
- **Search Functionality**: Allows users to search for restaurants by name or dish.
- **Tailwind CSS for UI Styling**: A fully responsive UI resembling Swiggy’s website.
- **Custom Hooks**: Implements reusable hooks for API fetching and online status checks.

---

## 📂 Folder Structure
```
Faux-mato/
│── public/
│── src/
│   ├── components/          # UI Components
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── CartItemCard.js
│   │   ├── DishWiseRestaurants.js
│   │   ├── ErrorPage.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── ItemCard.js
│   │   ├── Layout.js
│   │   ├── Page Components (Top, Mid, Bottom)
│   │   ├── Restaurant Components (Details, Accordian, Card)
│   │   ├── Search Components (Search, Suggestion)
│   │   ├── ShimmerResCard.js # Shimmer loading effect
│   ├── utils/
│   │   ├── appStore.js        # Redux store
│   │   ├── cartSlice.js       # Redux cart slice
│   │   ├── constants.js       # API URLs & other constants
│   │   ├── firebase.js        # Firebase setup (if applicable)
│   │   ├── functions.js       # Utility functions
│   │   ├── useOnlineStatus.js # Custom hook for checking online status
│   │   ├── useRestaurantMenu.js # Custom hook for fetching restaurant data
│   ├── App.js                 # Main application component
│   ├── index.js               # Entry point
│── .env                        # Environment variables
│── .gitignore                   
│── package.json                # Dependencies and scripts
│── README.md                   # Project documentation
```

---

## 🔗 API Endpoints
The project makes use of **Swiggy's APIs** (proxied via `thingproxy.freeboard.io`):

| Feature | API URL |
|---------|---------|
| Home Page Restaurants | `HOME_PAGE_SWIGGY_API` |
| Restaurant Menu | `SWIGGY_RESTAURANT_MENU_API` |
| Search Suggestions | `SWIGGY_SEARCH_SUGGESTIONS` |
| Dish-Wise Restaurant List | `RES_BY_DISH_API` |

APIs are stored in `constants.js` to ensure maintainability and easy updates.

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/i-am-rut/faux-mato.git
cd faux-mato
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```
The app will now be running on `http://localhost:1234/` (or another available port).

---

## 🎛️ State Management (Redux Toolkit)
The application uses **Redux Toolkit** to manage the cart state.

### **Cart Slice (cartSlice.js)**
- `addItem(item)`: Adds an item to the cart. If the item exists, increments its quantity.
- `removeItem(item)`: Removes an item or decreases its quantity.
- `clearCart()`: Empties the cart.

---

## 📸 Screenshots
https://drive.google.com/drive/folders/1FseDU4fmR4bcsI1AIujqCbYLt9jQ1Aj2?usp=sharing

---

## 🛑 Limitations
1. **CORS Restrictions**: APIs can only be accessed from `localhost`.
2. **API Instability**: Since Swiggy’s APIs are not public, they might change anytime.
3. **No Authentication**: The project does not support user authentication.

---

## 🏗️ Future Enhancements
- Implement **backend proxy** to handle CORS issues.
- Add **Firebase Authentication** for user sign-in/sign-up.
- Improve **error handling and API response management**.

---

## 📜 License
This project is for **educational purposes only**. No commercial use is allowed.

---

## 🤝 Contributing
Feel free to **fork** the repo and submit pull requests for improvements!

---

## 👨‍💻 Author
- **Amrut Patil**  
- GitHub: https://www.github.com/i-am-rut  
- LinkedIn: https://www.linkedin.com/in/i-am-rutpatil  

Happy Coding! 🚀

