import './Editor.css';
import Toolbar from './Toolbar'
import React from 'react';

class Editor extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="editor-wrap">
                <Toolbar title="Editor" />
                <textarea id="editor" />
            </div>
        )
    }
}

export default Editor;