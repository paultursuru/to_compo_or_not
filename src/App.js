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
      borderRadius: '20px',
      width: '60vh',
    }
    const elementStyle ={
      backgroundColor: 'transparent',
      margin: '9vh',
      width: '400px',
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
      fontSize: '60px'
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
            <h1 className="oui">Oui !</h1>
            {/*<span >La {el.label.toLowerCase()} est de saison</span>*/}
            <span style={emojiStyle}>{el.emoji}</span>
          </li>
        </ul>
      </div>
      )
    }
    else  {
      return(
      <div >
        <ul>
          <li style={styleInfo}>
            <h1 className="non">Non !</h1>
            <p className="paragraphe">Essaye plutôt en {months[el.season[0]].toLowerCase()}</p>
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
      <input type="text" placeholder="Entrer un fruit ou un légume" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
        {items[0]}
      </div>
    )
  }
}

export default App;
