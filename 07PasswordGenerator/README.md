
---

## 📅 Day 7 – Password Generator Project (Hooks Deep Dive)

### ✅ What I built today

* A **Password Generator** using React.
* User can:

  * Control password **length**
  * Allow **numbers**
  * Allow **special characters**
  * **Copy** password to clipboard

---

## 🧠 Hooks Used & Why

### 1️⃣ `useState`

Used to store and update UI-related data.

* `length` → password length
* `numberAllowed` → include numbers or not
* `charAllowed` → include special characters or not
* `password` → final generated password

👉 When state changes, **React re-renders UI automatically**.

---

### 2️⃣ `useCallback`

Used to **memoize functions** so they are not recreated on every render.

#### 🔹 `passwordGenerator`

* Generates password based on:

  * length
  * numbers allowed
  * characters allowed
* Wrapped in `useCallback` to:

  * Avoid unnecessary recreation
  * Work safely with `useEffect`

```js
useCallback(() => { ... }, [length, numberAllowed, charAllowed])
```

📌 `setPassword` is included in dependency array **for readability**, not performance.

---

### 3️⃣ `useEffect`

Used to **automatically regenerate password** when dependencies change.

```js
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed])
```

👉 Whenever user:

* changes length
* toggles numbers
* toggles characters

Password updates **without clicking any button**.

---

### 4️⃣ `useRef`

Used to access the **DOM element directly** (without re-render).

```js
const passwordRef = useRef(null)
```

Used for:

* Selecting password text
* Copying password to clipboard

Refs **do not cause re-render**, unlike state.

---

## 🔐 Password Generation Logic

1. Start with alphabets:

```js
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
```

2. Add options conditionally:

* Numbers → `"0123456789"`
* Special characters → `"!@#$%^&*-_+=[]{}~`"`

3. Loop till `length` and pick random characters:

```js
pass += str.charAt(randomIndex)
```

4. Store final password using `setPassword`.

---

## 📋 Copy to Clipboard Logic

```js
passwordRef.current.select();
navigator.clipboard.writeText(password)
```

👉 Why `useCallback` here?

* Function depends only on `password`
* Prevents unnecessary recreation

---

## 🎛️ UI Controls Explained

### 🔹 Range Input (Length)

* Updates `length` state
* Triggers `useEffect`
* Password regenerates automatically

### 🔹 Checkboxes

* Toggle boolean states using previous value

```js
setNumberAllowed(prev => !prev)
```

👉 Correct way to update state based on previous value.

---

## 🔘 Why callback function in `onClick`

```jsx
<button onClick={copyPasswordToClipboard}>copy</button>
```

* React expects a **function reference**
* Function runs **only on click**
* Prevents immediate execution during render

---

## 🧠 One-Line Revision (Very Important)

**Day 7 taught me how React hooks (`useState`, `useEffect`, `useCallback`, `useRef`) work together in a real project to manage state, side effects, optimized functions, and direct DOM access.**

---
