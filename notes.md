# 📝 Project Notes - Book Finder

## 🔹 Project Goal

The goal of this project is to build a **Book Finder application** where users can search for books by title using the **Open Library API**.  
This was done as part of the **UI Take-Home Challenge** to demonstrate skills in:

- Understanding user requirements
- Designing a simple and effective solution
- Implementing functionality with React
- Writing clean, readable code
- Delivering a user friendly interface

---

## 🔹 User Persona

**Name:** Alex  
**Occupation:** College Student  
**Need:** Alex wants to quickly search and browse books by title. He may also want to see details such as author, cover, and first publish year.

---

## 🔹 Features Implemented

1. **Search Functionality**

   - Search for books by title.
   - Fetch data from Open Library API:  
     `https://openlibrary.org/search.json?q={bookTitle}`

2. **Display Results**

   - Show results as a list of book cards.
   - Each card displays:
     - Book cover (or placeholder if not available).
     - Title.
     - Author(s).
     - First publish year.

3. **Responsive UI**

   - Layout adapts for both desktop and mobile screens.

4. **Loading State (Shimmer UI)**

   - When results are being fetched, a shimmer UI (`ShimmerUI.jsx`) is shown.

5. **Error Handling**
   - If no books are found, displays a friendly “Please enter a valid Book name” message.
   - If the API fails, shows an error message.

---

## 🔹 Folder Structure

```plaintext
book-finder/
 ├── public/        # Static assets
 ├── src/
 │   ├── components/
 │   │   ├── SearchBar.jsx    # Search bar component
 │   │   ├── ShimmerUI.jsx    # Shimmer loading UI
 │   │   └── BookList.jsx     # Displays list of book cards
 │   ├── utils/
 │   │   └── fetch.js         # Utility function for API calls
 │   ├── App.jsx              # Main app logic
 │   ├── main.jsx             # Entry point
 ├── package.json
 └── README.md
```

---

## 🔹 Key Components

### 1. `SearchBar.jsx`

- Renders an input and button.
- Updates state in `App.jsx` when user searches.

### 2. `ShimmerUI.jsx`

- Renders placeholder skeletons while API is loading.
- Improves user experience by showing a loading animation.

### 3. `BookList.jsx`

- Accepts a list of books as props.
- Maps over results and renders book cards.

### 4. `App.jsx`

- Holds main state (`libraryData`, `errorMessage`, `status`,`userInput`,`inputData`,`initialMessage` ).
- Fetches data from Open Library API.
- Passes results to `BookList` for rendering.

---

## 🔹 API Integration

- Search endpoint:
  ```bash
  https://openlibrary.org/search.json?q={bookTitle}
  ```
- Covers are fetched from:
  ```bash
  https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
  ```
- If no cover is available, fallback to a placeholder image:
  ```
  <div className="img-card">image not available</div>
  ```

---

## 🔹 Styling

- Plain CSS is used.

---

## 🔹 Deployment

- The app is deployed using:
  - **Netlify**. (live project)
  - **CodeSandbox / StackBlitz** (for quick sharing - code).

---

## 🔹 Notes for Reviewers

- The project demonstrates:
  - **React fundamentals** (components, props, state).
  - **API integration** (fetch, async/await).
  - **Error handling** (no results, API failures).
  - **UI/UX** (responsive design, loading states).
- Focus was kept on **core functionality first** and additional enhancements can be added iteratively.

---
