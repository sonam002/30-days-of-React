## 📅 Day 6 — Background Changer Project


1. **Project Overview**

   * Built a simple **Background Color Changer** using React.
   * Clicking a button changes the background color of the screen.

2. **Using `useState`**

   * Used `useState` to store the current background color.

   ```jsx
   const [color, setColor] = useState("white");
   ```

   * Updating state triggers a **re-render** of the component.

3. **Dynamic Styling in React**

   * Applied background color dynamically using **inline styles**.

   ```jsx
   <div style={{ backgroundColor: color }}>
   ```

   * Styles in React accept a **JavaScript object**.

4. **Event Handling**

   * Used `onClick` to handle button click events.
   * Button clicks update the background color using state.

5. **Using Buttons to Update State**

   ```jsx
   <button onClick={() => setColor("red")}>Red</button>
   <button onClick={() => setColor("blue")}>Blue</button>
   ```

   * Each button sets a different color.

6. **Component Re-rendering**

   * Calling `setColor`:

     * Updates state
     * Re-renders the component
     * Updates UI automatically

---

## 🔘 Why we pass a callback function to `onClick`

* React expects a **function reference**, not a function call.
* If we write `onClick={setColor("red")}`, the function executes **immediately during render**.
* To run code **only when the user clicks**, we pass a **callback function**.

### ❌ Wrong way

```jsx
<button onClick={setColor("red")}>Red</button>
```

* Runs instantly
* No user interaction control

### ✅ Correct way

```jsx
<button onClick={() => setColor("red")}>Red</button>
```

* Runs **only on click**
* React decides *when* to execute

### 🧠 Simple Explanation

* Callback functions give control to React about **when** to run the code.
* Prevents unwanted execution during rendering.

---

### 🧠 One-Line Revision

**Day 6 taught me how to build a background color changer using `useState`, dynamic styles, and why callbacks are needed in `onClick`.**
