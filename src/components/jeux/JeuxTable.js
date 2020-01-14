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

        const rows = [];
        this.props.jeux.forEach(jeu => {
            rows.push(<JeuRow key={jeu.name} jeu={jeu}/>)
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