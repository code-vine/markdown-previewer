import './App.css';
import Editor from './Editor'
import Preview from './Preview';

class App extends ReactComponent {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Editor className="Editor" />
        <Preview />
      </div>
    );
  }
}

export default App;
