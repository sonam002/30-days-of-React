## 📅 Day 3

### ✅ What I Learned Today

1. **What are Hooks**

   * Hooks are special functions provided by React.
   * Hooks let us **use state and other React features inside functional components**.
   * Hooks always start with the word `use` (example: `useState`).

2. **useState Hook**

   * `useState` is used to **store and update data** inside a component.
   * Syntax:

     ```js
     const [counter, setCounter] = useState(15);
     ```
   * `counter` → current value
   * `setCounter` → function to update the value
   * `15` → initial value

3. **Why normal variables don’t work**

   * Updating a normal variable:

     ```js
     counter = counter + 1;
     ```

     does NOT update the UI.
   * React does not track normal variables.
   * That’s why UI does not re-render.

4. **Why state works**

   * When we use:

     ```js
     setCounter(counter + 1);
     ```
   * React knows the state has changed.
   * React re-renders the component.
   * UI updates automatically.

5. **Re-rendering concept**

   * React components are functions.
   * When state changes, the whole component function runs again.
   * Hooks help React **remember values between re-renders**.

6. **Counter Example**

   * Button click increases the counter.
   * Console may show updated value even with normal variables,
     but **UI updates only with state**.
   * This proves why hooks are needed.

---