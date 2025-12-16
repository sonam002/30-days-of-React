
---

## 📅 Day 5 — Tailwind CSS & Props

### ✅ What I Learned Today

### 1. **What is Tailwind CSS**

* Tailwind CSS is a **utility-first CSS framework**.
* Instead of writing CSS files, we use **utility classes directly in JSX**.
* Example:

  ```jsx
  <h1 className="text-2xl font-bold text-blue-500">
    Hello Tailwind
  </h1>
  ```

---

### 2. **Why Tailwind CSS**

* No need to write separate CSS files.
* Faster UI development.
* No class name conflicts.
* Easy to maintain and customize.

---

### 3. **Installing & Using Tailwind**

* Tailwind is installed using npm.
* Configuration files are created:

  * `tailwind.config.js`
  * `postcss.config.js`
* Tailwind classes are used via `className` in React (not `class`).

---

### 4. **Props in React**

* **Props** are used to pass data from **parent component to child component**.
* Props make components **reusable and dynamic**.

Example:

```jsx
function Card(props) {
  return <h1>{props.title}</h1>;
}
```

Usage:

```jsx
<Card title="React Props" />
```

---

### 5. **Destructuring Props**

* Instead of using `props.title`, we can destructure.
* Makes code cleaner.

Example:

```jsx
function Card({ title }) {
  return <h1>{title}</h1>;
}
```

---

### 6. **Props + Tailwind Together**

* Props can be used to change content or styling dynamically.

Example:

```jsx
function Button({ text }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {text}
    </button>
  );
}
```

---

### 🧠 Key Takeaways

* Tailwind helps style React apps quickly using utility classes.
* Props allow passing data into components.
* Components become reusable when combined with props.
* `className` is used instead of `class` in React.

---

### 📝 One-Line Summary

**Day 5 taught me how to style React components using Tailwind CSS and make components reusable using props.**

---
