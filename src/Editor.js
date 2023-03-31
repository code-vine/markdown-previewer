import './Editor.css';
import Toolbar from './Toolbar'

function Editor(){
    return (
        <div className="editor-wrap">
            <Toolbar title="Editor" />
            <textarea id="editor" />
        </div>
    )
}

export default Editor;