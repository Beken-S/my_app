import './App.css';
import {Message} from './components';

function App() {
  const messageText = 'Hello, world!';
  return (
    <div className="App">
      <header className="App-header">
        <Message text={messageText} />
      </header>
    </div>
  );
}

export default App;
