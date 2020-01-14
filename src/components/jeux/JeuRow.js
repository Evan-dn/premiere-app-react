/**
 * @author EVAN
 * composant filtre jeux videos
 */

import React from 'react';

class JeuxRow extends React.Component {
    constructor(props) {
        super(props);
        console.log("le jeu : ", props.jeu);
    }
    render(){        

        let name ;
        if(this.props.jeu.stocked){
            name = this.props.jeu.name;
        } else {
            name = <span style={{color: 'red'}}>{this.props.jeu.name}</span>
        }


        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.jeu.price}</td>
            </tr>
        )
    }


}


export default JeuxRow;