import './Preview.css';
import Toolbar from './Toolbar';


class Preview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='preview-wrap'>
                <Toolbar title="Preview" />
                <div id="preview">
                    
                </div>
            </div>
        )
    }
}

export default Preview;