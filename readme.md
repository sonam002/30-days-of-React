30 days of react:

## 📅 Day 4

---

1. **Virtual DOM**

   * Virtual DOM is a **JavaScript object (tree structure)** stored in memory.
   * It represents how the UI should look.

2. **State / Props Change**

   * When state or props change, React creates a **new Virtual DOM**.
   * The previous Virtual DOM is kept for comparison.

3. **Reconciliation**

   * Reconciliation is the **process** React uses to compare:

     * Old Virtual DOM
     * New Virtual DOM
   * It figures out **what exactly changed**.

4. **DOM Updates**

   * React updates **only the changed parts** of the real browser DOM.
   * The browser **does NOT recreate the entire DOM** unless the page is reloaded.

5. **React Fiber**

   * React Fiber is the **current internal algorithm and data structure** used by React.
   * It is the engine that **performs reconciliation**.
   * Fiber breaks work into small units so React can:

     * Pause work
     * Resume later
     * Prioritize important updates

6. **Relation: Reconciliation vs React Fiber**

   * **Reconciliation** = *WHAT* needs to be updated (comparison process).
   * **React Fiber** = *HOW and WHEN* updates are performed (implementation).
   * In short: **Fiber is the reconciliation algorithm used by React**.

7. **Network Calls**

   * Network requests are **not part of Virtual DOM or Fiber**.
   * They are handled using **state management** (`useState`, `useEffect`, caching).

8. **UI Update Priority**

   * Not every UI update must happen immediately.
   * React can **batch or delay low-priority updates** for better performance.

---

### 🧠 One-Line Revision

**React uses Virtual DOM, compares it using Reconciliation, and executes updates efficiently using the React Fiber algorithm.**
