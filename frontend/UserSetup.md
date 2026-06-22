# Project Setup Guide

Follow the steps below to set up the project correctly.

---

## Prerequisites

Make sure you have the following version installed:

* **Node.js**: `v24.17.0` or above

Verify your version:

```bash
node -v
```

---

## Create the Vite Project

Run the following command:

```bash
npm create vite@latest .
```

> **Important:** Include the `.` at the end if you want to create the project in the current folder and prevent Vite from creating a new nested folder.

Follow the prompts:

* Framework: **React**
* Variant: **JavaScript** (or your preferred variant)

Install dependencies:

```bash
npm install
```

---

## Install React Router

```bash
npm i react-router
```

---

## Install React Hot Toast

```bash
npm i react-hot-toast
```

---

## Clean Up Default Files

### Delete

```text
src/App.css
```

### Clear the Contents Of

```text
src/index.css
src/App.jsx
```

---

## Update App.jsx

Open:

```text
src/App.jsx
```

Generate a React functional component using:

```text
rafce
```

Example:

```jsx
const App = () => {
  return <div>App</div>;
};

export default App;
```

---

## Install Tailwind CSS

Follow the official Tailwind CSS Vite installation guide:

https://v3.tailwindcss.com/docs/guides/vite

Make sure Tailwind is working before proceeding.

---

## Install daisyUI

Follow the official daisyUI installation guide:

https://v4.daisyui.com/docs/install/

Make sure daisyUI is configured correctly in your Tailwind setup.

---

## Verify Installation

Start the development server:

```bash
npm run dev
```

Confirm the following:

* [ ] Vite starts successfully
* [ ] React application loads correctly
* [ ] React Router installs without errors
* [ ] React Hot Toast installs without errors
* [ ] Tailwind CSS styles are working
* [ ] daisyUI components render correctly
* [ ] No console errors are present

---

## Final Checklist

* [ ] Node.js version is `v24.17.0` or above
* [ ] Vite project created successfully
* [ ] Dependencies installed
* [ ] React Router installed
* [ ] React Hot Toast installed
* [ ] Default files cleaned up
* [ ] `App.jsx` updated
* [ ] Tailwind CSS installed and working
* [ ] daisyUI installed and working
* [ ] Project tested successfully

✅ Do not exit this guide until all checklist items are completed.