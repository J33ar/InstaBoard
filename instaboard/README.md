# InstaBoard

A React application that displays a list of user profile cards fetched from an external API (**randomuser.me**).  
Users can like profiles and toggle email visibility.  
Built with **React**, **Axios**, and styled with custom CSS.

---

## 🚀 Features

- Function-based reusable components (`UserCard`, `UserList`).
- Props to pass data between components.
- Stateful logic using **useState** and **useEffect**.
- Dynamic list rendering with `.map()`.
- Fetching users from [Random User API](https://randomuser.me/).
- **Load More** button to fetch and append more users.
- **Dark Mode toggle** to switch between light and dark themes.

---

## 📂 Project Structure

instaboard/
src/
components/
UserCard/
UserCard.js
UserCard.css
UserList/
UserList.js
UserList.css
App.js
App.css
index.js
package.json
README.md


---


## 🛠️ Setup Instructions

1. Clone the repository:
git clone <your-repo-link>
cd instaboard
2. Install dependencies:
3. Start the development server:
4. Open in your browser:  
[http://localhost:3000](http://localhost:3000)

---

## 🌐 API Used

- [Random User API](https://randomuser.me/api/?results=12)

---

## ✅ Submission Questions

- **How many hours did it take you to complete this assignment?**  
Answer: 5 hours

- **Were there any parts of the lab you found challenging?**  
Answer: Making the dark mode toggle affect all components consistently.


---

## 🔥 Bonus Features Implemented

- ✅ Dark Mode toggle (0.5 mark)  
- ❌ Search functionality (not implemented)

---