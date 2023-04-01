import './App.css';
import Editor from './Editor'
import Preview from './Preview';

function App() {
  return (
    <div className="App">
      <Editor className="Editor" />
      <Preview />
    </div>
  );
}

export default App;
