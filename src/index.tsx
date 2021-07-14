import React from 'react';
import ReactDOM from 'react-dom';

function Root( props : { title : string }  ){
    return <div>
        {props.title}
    </div>
}

ReactDOM.render(<Root title="Hello React on Typescirpt" />, document.getElementById('root'));