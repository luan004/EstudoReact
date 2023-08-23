import '../css/Pieces.css';

export default function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Essa é uma página de login
        </p>
        <Button />
      </header>
    </div>
  );
}

function Button() {
    function handleClick() {
        
    }
    return (
        <button
        onClick={handleClick}
            className="Button"
        >
        Mudar de tela
        </button>
    );
}