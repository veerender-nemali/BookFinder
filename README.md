# 📚 Book Finder

## 🔹 Overview

Book Finder is a React-based web application that allows users to search for books using the **Open Library API**.  
The app displays book covers, titles, authors, and first publish years in a clean, responsive UI.

This project was built as part of a **UI Take-Home Challenge**.

---

## 🔹 Features

- 🔎 Search for books by title
- 📖 View book details such as cover, title, author(s), and publish year
- 📱 Responsive design for both desktop and mobile
- ⚡ Loading(Shimmer UI) and error handling for smooth user experience

---

## 🔹 Tech Stack

- **React** – UI framework
- **plain CSS** – Styling
- **Open Library API** – Data source
- **Deployed on**: CodeSandbox / Netlify

---

## 🔹 API Reference

Books are fetched from the Open Library Search API:

```bash
https://openlibrary.org/search.json?title={bookTitle}
https://openlibrary.org/search.json?q={query}
```

Covers are fetched using:

```bash
https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
```

## 🔹 Getting Started

1. Clone the repo

```bash
git clone https://github.com/yourusername/book-finder.git
cd book-finder
```

2. Install dependencies

```bash
npm install
```

3. Run locally

```bash
npm start
```

4. Build for production

```bash
npm run build
```

🔹 Deployment

The app is deployed here 👉 [Live Demo Link](https://your-vercel-or-codesandbox-link)
code is deployed here 👉 [Live Demo Link](https://your-vercel-or-codesandbox-link)

````markdown
## 🔹 Folder Structure

```plaintext
book-finder/
 ├── public/        # Static assets
 ├── src/
 │   ├── components/
 │   │   ├── SearchBar.jsx
 │   │   ├── ShimmerUI.jsx
 │   │   └── BookList.jsx
 │   ├── App.jsx
 │   ├── main.jsx
 ├── package.json
 └── README.md
```
````
