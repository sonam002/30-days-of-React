30 days of react:

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

---

## 📅 Day 2

### ✅ What I Learned Today

1. **What JSX is**

   * JSX looks like HTML but is written inside JavaScript.
   * Browsers don’t understand JSX directly — it gets converted into normal JavaScript behind the scenes.
   * JSX makes writing UI easier and readable.

2. **How JSX actually works**

   * JSX is basically a function call that returns an object.
   * Example:

     ```jsx
     <h1>Hello</h1>
     ```

     becomes something like:

     ```js
     createElement("h1", {}, "Hello");
     ```

3. **Creating your own mini React (basic idea)**

   * React elements can be represented as simple JavaScript objects with:

     * `type` → the tag (like `"div"`)
     * `props` → attributes
     * `children` → text/other elements
   * Rendering means converting these objects into real DOM elements.

4. **Custom Render Function**

   * Learned how a very basic React-like `render()` function works:

     * Creates DOM element.
     * Sets attributes.
     * Inserts children.
     * Appends it to the root element.

5. **Why this is useful**

   * Helps understand how React works internally.
   * Makes JSX, components, and rendering easier to understand later.

---
