## 📅 Day 1

### ✅ What I Learned Today

1. **Creating a React App**

   * Learned two ways to start a React project:

     * Using **create-react-app**
     * Using **Vite** (faster and modern)
   * Both generate the basic folder structure for a React project.

2. **Understanding Components**

   * Components are **custom elements** we create in React.
   * Component names **must start with a Capital letter**.
   * Components help break UI into small, reusable pieces.

3. **Import & Export**

   * To use a component in another file, we use:

     ```js
     export default ComponentName;
     ```
   * And import it using:

     ```js
     import ComponentName from "./ComponentName";
     ```

4. **Fragments**

   * React does not allow returning **multiple elements** without wrapping.
   * To wrap elements, we use:

     * A `<div>...</div>`
       **or**
     * A React Fragment:

       ```jsx
       <>
         ...
       </>
       ```
   * Fragments help group UI elements **without adding extra HTML**.

---

