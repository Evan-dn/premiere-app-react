/**
 * @author EVAN
 * composant et son cycle de vie
 */

import React from 'react';

class CompoCycleDeVie extends React.Component {
    constructor(props) {
        super(props);
        console.log("je passes dans le constructor");
    }

    componentWillMount(){
        console.log("je passe dans le componentWillMount");
    }

    render(){
        console.log("je passe dans le render");
        return(
            <div>

            </div>
        )
    }

    componentDidMount(){
        console.log("je passe dans le componentDidMount")
    }

    componentWillReceiveProps(){
        console.log("je passes ici uniquement si il ya de nouveaux props ou une maj")
    }

    shouldComponentUpdate(){
        console.log("pour des questions de perf je mets un booleen si je veux ou pas update");
    }

    componentWillUpdate(){
        console.log("le composant se mettra à jour");
    }

    componentDidUpdate(){
        console.log("je passe ici le component a été update")
    }


}


export default CompoCycleDeVie;