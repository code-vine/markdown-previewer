import './App.css';
import Editor from './Editor'
import Preview from './Preview';
import React from 'react';

class App extends React.Component {
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
