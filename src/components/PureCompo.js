/**
 * @author EVAN
 * Premier composant pure react
 */

import React from 'react';
import './PureCompo.css';

export function PureCompo(){
    return(
        <div>
            <h6 className="pure-h6">PureCompo</h6>
        </div>
    )
}

export function PureCompoProps(props){
    return(
        <div>
            <h6 className="pureprops-h6">PureCompoProps {props.label}</h6>
        </div>
    )
}
// interdit de faire 2 export default !!!

