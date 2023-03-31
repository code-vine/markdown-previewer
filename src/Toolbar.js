import './Toolbar.css'

function Toolbar(props){
    return (
        <div className='toolBar'>
            <div className='toolBar-title'>
                <i className="bi bi-emoji-smile"></i>
                <p>{props.title}</p>
            </div>
            <div id='toolbar-expander'>
                <button className='enlarger'><i className="bi bi-arrows-fullscreen"></i></button>
            </div>
        </div>
    );
}

export default Toolbar;