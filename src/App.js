import './App.css';
import Login from './components/login.js';
import Panel from './components/panel.js';

export default function App() {
  let content;
  if (true) {
    content = <Login />;
  } else {
    content = <Panel />;
  }
  return (
    <div>
      {content}
    </div>
  );
}