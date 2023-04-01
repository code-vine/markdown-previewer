import './Preview.css';
import Toolbar from './Toolbar';
import React from 'react';


class Preview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="preview-wrap" className='preview-wrap'>
                <Toolbar title="Preview" />
                <div id="preview">
                    
                </div>
            </div>
        )
    }
}

export default Preview;