/**
 * @author EVAN
 * composant table  jeux videos
 */

import React from 'react';
import JeuxCategory from'./JeuxCategory';
import JeuRow from './JeuRow';

class JeuxTable extends React.Component {
    constructor(props) {
        super(props);
        console.log("jeux table les jeux : ", props.jeux);
    }
    render(){

        const filterText = this.props.filterText.toUpperCase();
        const inStockOnly = this.props.inStockOnly;
        let lastCategory;

        const rows = [];
        this.props.jeux.forEach(jeu => {
            if(jeu.name.toUpperCase().indexOf(filterText) === -1){
                return;
                // indefof(string) === -1 => cela veut dire que l'on a pas trouver de chaine de caractere correspondant
            }
            if (inStockOnly && !jeu.stocked){
                return;
                // on verifie les 2 instockonly = true et jeu.socked différent de false (prop par default)
            }
            if(jeu.category != lastCategory){
                rows.push(<JeuxCategory category={jeu.category}/>)
            }
            rows.push(<JeuRow key={jeu.name} jeu={jeu}/>)
            lastCategory = jeu.category
        });
        // rows.push(<JeuRow key="1"/>);
        // rows.push(<JeuRow key="2"/>);
        // si on a un tableau qui comprend des composants pas obliger d'utiliser .map

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <JeuxCategory category={this.props.jeux.category}/>
                    {rows}
                    {/* on appelle directements rows qui est un [] de composants et pas besoin de boucler avec .map */}

                </table>
            </div>
        )
    }


}


export default JeuxTable;