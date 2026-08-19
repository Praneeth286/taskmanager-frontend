import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import { ThemeProvider, useTheme } from './ThemeContext';
import useTasks from './useTasks';
import{useCallback} from 'react';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { tasks, isLoading, error, addTask, deleteTask } = useTasks();
  const handleAddTask = useCallback((title) => {
      addTask(title);
      }, [addTask]);

  return (
    <div className={`app-container ${theme}`}>
      <nav>
        <Link to="/">Tasks ({tasks.length})</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>

      <ThemeToggleButton />

      <Routes>
        <Route
          path="/"
          element={
            <TasksPage
              tasks={tasks}
              isLoading={isLoading}
              error={error}
              addTask={addTask}
              deleteTask={deleteTask}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
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