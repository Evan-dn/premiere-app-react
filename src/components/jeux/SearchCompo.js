/**
 * @author EVAN
 * composant search jeux videos
 */

import React from 'react';

class SearchCompo extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterText = this.handleFilterText.bind(this);

    }

    handleFilterText(e){
        console.log(e.target.value);
    }


    handleInStockChange = (e) => {
        console.log(e.target.checked);
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="search" onChange={this.handleFilterText}></input>
                <input type="checkbox" onChange={this.handleInStockChange}></input> {' '} Produit en stock seulement
            </div>
        )
    }


}


export default SearchCompo;