import './Editor.css';
import Toolbar from './Toolbar'
import React from 'react';


class Editor extends React.Component{
    constructor(props){
        super(props);
    }
    enlarger(e){
        e.preventDefault();
        let preview = document.getElementById("preview-wrap");
        let editorEnlarger = document.getElementById("editorEnlarger");
        let editor = document.getElementById("editor");

        if(preview.style.display === "none"){
            preview.style.display = "initial";
            editor.style.height = "initial";
            editorEnlarger.className = "bi bi-arrows-fullscreen";
        }
        else{
            preview.style.display = "none";
            editor.style.height = "90vh";
            editorEnlarger.className = "bi bi-arrows-angle-contract";

        }
    }
    

    render(){
        return (
            <div id="editor-wrap" className="editor-wrap">
                <Toolbar title="Editor" Enlarge={this.enlarger} enlargerId="editorEnlarger"/>
                <textarea onChange={this.props.onChange} id="editor"></textarea>
            </div>
        )
    }
}

export default Editor;