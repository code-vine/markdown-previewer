import './Preview.css';
import Toolbar from './Toolbar';
import React from 'react';


class Preview extends React.Component{
    constructor(props){
        super(props);
    }
    enlarger(e){
        e.preventDefault();
        let preview = document.getElementById("preview");
        let editor = document.getElementById("editor-wrap");
        let previewEnlarger = document.getElementById("previewEnlarger");

        if(editor.style.display === "none"){
            editor.style.display = "initial";
            preview.style.height = "initial";
            previewEnlarger.className = "bi bi-arrows-fullscreen";
        }
        else{
            editor.style.display = "none";
            preview.style.height = "90vh";
            previewEnlarger.className = "bi bi-arrows-angle-contract";

        }
    }

    render(){
        return (
            <div id="preview-wrap" className='preview-wrap'>
                <Toolbar title="Preview" Enlarge={this.enlarger} enlargerId="previewEnlarger"/>
                <div id="preview">
                    
                </div>
            </div>
        )
    }
}

export default Preview;