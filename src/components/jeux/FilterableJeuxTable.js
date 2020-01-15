/**
 * @author EVAN
 * composant filtre jeux videos
 */

import React from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';


class FilterableJeuxTable extends React.Component {
    constructor(props) {
        super(props);
        console.log("les jeux : ", props.jeux);
        this.state = {
            filterText:'',
            inStockOnly: false
        }
        this.handleFilterText = this.handleFilterText.bind(this);
    }

    handleFilterText(e){
        console.log("parent ", e)
        this.setState({filterText: e})
        // pas de e.target.value car la valeur est deja prise dans cette même fonction côté enfant (SearchCompo)
        // on change la valeur du state filter text par la valeur e soit la valeur que retourne la meme fonction du composant enfant
    }


    handleInStockChange = (e) => {
        console.log("parent ", e)
        this.setState({inStockOnly: e})
        // pas de e.target.value car la valeur est deja prise dans cette même fonction côté enfant (SearchCompo)
        // on change la valeur du state filter text par la valeur e soit la valeur que retourne la meme fonction du composant enfant

    }
    //  on a les meme fcontions que le composant enfant SearchCompo et on peut les utiliser en tant que props sur ce dernier ainsi que l'autre enfant JeuxTable

    render(){
        return(
            <div>
                Table de jeux filtrable 
                {/* on met les states du parent en props pour les enfants pour acceder aux données */}
                <SearchCompo
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleFilterText={this.handleFilterText}
                    handleInStockChange={this.handleInStockChange}/>
                <JeuxTable jeux={this.props.jeux}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleInStockChange={this.handleInStockChange}
                    handleFilterText={this.handleFilterText}/>
            </div>
        )
    }


}


export default FilterableJeuxTable;