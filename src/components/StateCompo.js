/**
 * @author EVAN
 * Premier composant state react
 */
import React from 'react';
import './StateCompo.css'

class StateCompo extends React.Component{
    constructor(props){
        super(props);
        console.log("label" + props.label)
        this.state = {nom : ''};
        this.handleChange = this.handleChange.bind(this); 
        //  pour acceder au this
    }

    handleChange(e){
        console.log( "value de l'input dans le composant : " + e.target.value);
        this.setState({nom : e.target.value});
        this.props.onInputChange(e.target.value);

        // on passe en props qui est une fonction onInputChange dans App.js la valeur de l'input (e.target.value)
        // on retourne donc dans App.js
    }


    // autre manière de faire : 
    //
    // handleChange(e) => {
    //     this.setState({nom : "le nouveau nom"});
    // }

    // avec la fonction flechée pas besoin de bind dans le constructor !!! 



    render(){
        return(

            <div>
                <h6 className="state-h6">Compo state {this.props.label}</h6>
                <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
                {/* à commme valeur de base "" soit this.state.nom et prend au changement this.handleChange soit this.setState({nom : e.target.value})*/}
            </div>
        )
    }
}

export default StateCompo;