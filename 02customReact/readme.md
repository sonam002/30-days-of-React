
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
