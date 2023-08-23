import './App.css';
import Login from './components/login.js';
import Home from './components/home.js';

export default function App() {
  let content;

  // check url
  if (window.location.pathname === "/login") {
    content = <Login />;
  } else {
    content = <Home />;
  }

  return (
    <div>
      {content}
    </div>
  );
}