/**
 * @author EVAN
 * composant search jeux videos
 */

import React from 'react';

class SearchCompo extends React.Component {
    constructor(props) {
        super(props);
        console.log("filterText : ", this.props.filterText)
        console.log("inStockOnly : ", this.props.inStockOnly)
        // on log les props qui sont les states du parent(FilterableJeuxTable) qu'on a passée en props dans le composant enfant(SearchCompo)
        // pour voir que tout est bien cablé

        this.handleFilterText = this.handleFilterText.bind(this);
        // pas besoin de faire la même chose sur handleInStockChange car fonction flêchée

    }

    handleFilterText(e){
        console.log(e.target.value);
        this.props.handleFilterText(e.target.value); 
        // pour remonter la valeur au parent on utilise donc la fontion du parent qui est un props de l'enfant (cf FilterableJeuxTable) 
    }


    handleInStockChange = (e) => {
        console.log(e.target.checked);
        this.props.handleInStockChange(e.target.checked); 
        // pour remonter la valeur au parent on utilise donc la fontion du parent qui est un props de l'enfant (cf FilterableJeuxTable) 

    }

    // on transfère les deux fonctions au composant parent(FilterableJeuxTable)

    render(){
        return(
            <div>
                <input type="text" placeholder="search" text={this.props.filterText} onChange={this.handleFilterText}></input>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange}></input> {' '} Produit en stock seulement
            </div>
            // on applique dans le render les props au différents éléments input => text={this.props.filterText} / checked={this.props.inStockOnly}
        )
    }


}


export default SearchCompo;