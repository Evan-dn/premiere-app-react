import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';
import CompoCycleDeVie from './components/CompoCycleDeVie'

// import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {stateApp : ""}
    // on creée un stateApp, bien penser a mettree le constructor sinon setState pas reconnu comme une fonction
  }


  /*onInputChange(val) {
    console.log("val  dans l'app:" + val)
    this.setState({stateApp : val})
    // on change la valeur stateApp avec la valeur de val
  }*/

  onInputChange = (val) => {
    console.log("val  dans l'app:" + val)
    this.setState({stateApp : val})
    // on change la valeur stateApp avec la valeur de val
    // fonction fléché pour ne pas binder (.bind) dans le constructor
  }
  





  render() {
    let mesLabels = [];
    mesLabels.push("evan")
    mesLabels.push("jean")
    mesLabels.push("juju")
    mesLabels.push("toto")



    return (
      <div className="App">
        <header className="App-header">

        <CompoCycleDeVie/>



          <StateCompo label="Evan" onInputChange = {this.onInputChange}></StateCompo>
          <PureCompo></PureCompo>
          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp}></PureCompoProps> : <div></div>}
          {/* on met dans label la valeur de this.state.stateApp on passe donc une valeur d'un compoState à un compopure 
              même si les props sont bien fixe (ne peuvent changer) mais vu que le parent est mis à jour les props de l'enfant se mettent à jour !!!!
              on met une ternaire pour savoir si le stateApp est définit
          */}


          {mesLabels.map((libelle) => 
            <StateCompo key={libelle} label={libelle} onInputChange = {this.onInputChange}></StateCompo>
            
          )}
          {/* 
            pour boucler et rendre l'implémentation des labels dynamique en fonction du nombre
            on utilise le .map en fonction flechée
            quand on boucle sur des composants react il faut mettre une key qui doit être unique pour chaque composant 
          */}






          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
