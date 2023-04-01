import './Preview.css';
import Toolbar from './Toolbar';


function Preview(props){
    return (
        <div className='preview-wrap'>
            <Toolbar title="Preview" />
            <div id="preview">
                
            </div>
        </div>
    )
}

export default Preview;