import React, { Component } from 'react';
import './App.css';
import Information from './infro-json';



class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      fontSize: 'large',
      padding: '10px 18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'white',
      boxShadow: '0 0 8px rgba(0,0,0,0.2)',
      borderRadius: '20px',
      width: '350px',
    }
    const elementStyle ={
      backgroundColor: 'white',
      margin: '9vh',
      width: '400px',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '0px',
      fontFamily: 'sans-serif',
      fontSize: '24px',
      lineHeight: '40px',
      letterSpacing: '1px',
    }
    const emojiStyle = {
      fontSize: '60px'
    }

    const items = Information.filter((data)=>{
      if(this.state.search == null){
          return
        }
      else if(data.label.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(el=>{
      if(el.compo.includes(1)) {
        return(
          <div>
          {console.log("ok")}
            <ul>
              <li style={styleInfo}>
                <h1 class="oui">Oui !</h1>
                <p>{el.label}</p>
                <span style={emojiStyle}>{el.emoji}</span>
              </li>
            </ul>
          </div>
        )
      }
      else {
        return(
          <div>
          {console.log("not ok")}
            <ul>
              <li style={styleInfo}>
                <h1 class="non">Non !</h1>
                <p>{el.label}</p>
                <div style={emojiStyle}>{el.emoji}</div>
              </li>
            </ul>
          </div>
        )
      }
    })

    return (
      <div className="container">
        <h1 className="titre"> Est-ce que je peux composter ça ? </h1>
        <select type="text" className="custom-select" style={elementStyle} onChange={(e)=>this.searchSpace(e)}>
          <option value="0">Choisis ton déchet...</option>
          <option value="Epluchures">Epluchures</option>
          <option value="Marc de Café">Marc de Café</option>
          <option value="Filtre en papier">Filtre en papier</option>
          <option value="Laitages">Laitages</option>
          <option value="Croutes de fromage">Croutes de fromage</option>
          <option value="Fanes de légumes">Fanes de légumes</option>
          <option value="Fruits abimés">Fruits abimés</option>
          <option value="Légumes abimés">Légumes abimés</option>
          <option value="Coquilles d'oeuf">Coquilles d'oeuf</option>
          <option value="Fleurs fanées">Fleurs fanées</option>
          <option value="Plantes d'intérieur">Plantes d'intérieur</option>
          <option value="Protections hygieniques">Protections hygieniques</option>
          <option value="Agrumes">Agrumes</option>
          <option value="Papier">Papier</option>
          <option value="Carton">Carton</option>
          <option value="Viande">Viande</option>
          <option value="Poisson">Poisson</option>
          <option value="Ail">Ail</option>
          <option value="Oignon">Oignon</option>
          <option value="Déjections d'animaux domestiques">Déjections d'animaux domestiques</option>
          <option value="Sacs de supermarché avec la mention 'compostable'">Sacs de supermarché avec la mention 'compostable'</option>
          <option value="Mauvaises herbes">Mauvaises herbes</option>
          <option value="Plantes malades">Plantes malades</option>
          <option value="Verre">Verre</option>
          <option value="Métal">Métal</option>
          <option value="Plastique">Plastique</option>
          <option value="Contenu des sacs d'aspirateurs">Contenu des sacs d'aspirateurs</option>
          <option value="Mégots">Mégots</option>
          <option value="Couches-culottes">Couches-culottes</option>
        </select>
      </div>
    )
  }
}


export default App;

