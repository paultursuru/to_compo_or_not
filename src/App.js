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
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'white',
      boxShadow: '0 0 8px rgba(0,0,0,0.2)',
      borderRadius: '4px',
      width: '60vh',
    }
    const elementStyle ={
      margin: '9vh',
      width: '80vh',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '0px',
      fontFamily: 'sans-serif',
      fontSize: '40px',
      lineHeight: '21px',
      letterSpacing: '1px',
    }
    const emojiStyle = {
    }

    let today = new Date();

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];



    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return
      else if(data.label.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }

    }).map(el=>{
    if(el.season.includes(today.getMonth())) {
      return(
      <div>
        <ul>
          <li style={styleInfo}>
            <h1>Oui !</h1>
            {/*<span >La {el.label.toLowerCase()} est de saison</span>*/}
            <span >{el.emoji}</span>
          </li>
        </ul>
      </div>
      )
    }
    else  {
      return(
      <div>
        <ul>
          <li style={styleInfo}>
            <h1>Non !</h1>
            <p>Essaye plutôt en {months[el.season].toLowerCase()}</p>
            {/* <span >{el.label.toLowerCase()}</span>*/}
            <div style={emojiStyle}>{el.emoji}</div>
          </li>
        </ul>
      </div>
      )
    }
  })

    return (
      <div className="container">
      <h1 className="titre"> Est-ce que c'est la saison ? </h1>
        <input type="text" placeholder="Entrez un fruit" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
        {items[0]}
      </div>
    )
  }
}

export default App;
