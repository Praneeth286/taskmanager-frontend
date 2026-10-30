# Task Manager Frontend

The React client for the [Task Manager API](https://github.com/Praneeth286/taskmanager). Users register, log in, and manage their own task list.

**Stack:** React 19 · Vite · React Router 7 · Axios · Vitest + React Testing Library · ESLint

## Features

- **Login and registration** against the Spring Boot API's JWT auth
- **Protected routes**: the task page redirects to `/login` when you're not signed in
- **Automatic auth handling**: an Axios interceptor attaches the JWT to every request and sends you back to login on a `401`/`403`
- **Task list**: view, add and delete your tasks
- **Light/dark theme** toggle, shared through React context

## Getting started

You'll need Node.js and the backend running (see the [taskmanager README](https://github.com/Praneeth286/taskmanager#running-locally)).

```bash
npm install
```

Create a `.env` file in the project root pointing at the API:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

Then start the dev server:

```bash
npm run dev
```

The app runs on `http://localhost:5173`, which the backend already allows for CORS.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest test suite |
| `npm run lint` | Run ESLint |

## Pages

| Route | Page | Auth required |
|---|---|---|
| `/` | Your task list | Yes |
| `/login` | Log in | No |
| `/register` | Create an account | No |
| `/about` | About the app | No |

## Project layout

```
src/
├── api.js              # Axios calls + JWT / 401 interceptors
├── AuthContext.jsx     # login state, token storage, logout
├── ThemeContext.jsx    # light/dark theme
├── ProtectedRoute.jsx  # redirects to /login when signed out
├── useTasks.js         # loads tasks, add/delete with local state updates
├── App.jsx             # routes and navigation
├── pages/              # TasksPage, LoginPage, RegisterPage, AboutPage
├── TaskList.jsx / TaskItem.jsx / AddTaskForm.jsx
└── AddTaskForm.test.jsx
```
