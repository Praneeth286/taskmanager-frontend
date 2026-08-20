import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import { ThemeProvider, useTheme } from './ThemeContext';
import useTasks from './useTasks';
import{useCallback} from 'react';
import { AuthProvider } from './AuthContext';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import {useAuth} from './AuthContext';

function App() {
  return (
    <ThemeProvider>
        <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { tasks, isLoading, error, addTask, deleteTask } = useTasks();
  const { isAuthenticated, logout} = useAuth();
  const handleAddTask = useCallback((title) => {
      addTask(title);
      }, [addTask]);

  return (
    <div className={`app-container ${theme}`}>
      <nav>
        <Link to="/">Tasks ({tasks.length})</Link>
        {' | '}
        <Link to="/about">About</Link>
        {isAuthenticated && (
                  <>
                    {' | '}
                    <button onClick={logout}>Log Out</button>
                  </>
                )}
      </nav>

      <ThemeToggleButton />

      <Routes>
        <Route
          path="/"
          element={
              <ProtectedRoute>
            <TasksPage
              tasks={tasks}
              isLoading={isLoading}
              error={error}
              addTask={addTask}
              deleteTask={deleteTask}
            />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme} (click to toggle)
    </button>
  );
}

export default App;