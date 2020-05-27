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

    // let today = new Date();

    // const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return
      else if(data.label.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }

    }).map(el=>{
    if(el.compo.includes(1)) {
      return(
      <div>
        <ul>
          <li style={styleInfo}>
            <h1 class="oui">Oui !</h1>
            <p>{el.label}</p>
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
            <h1 class="non">Non !</h1>
            <p>{el.label}</p>
            <div style={emojiStyle}>{el.emoji}</div>
          </li>
        </ul>
      </div>
      )
    }
  })

  const option_tags = Information.map((el)=>{
    return (
      <option value={el.label}>{el.label}</option>
    )
  })



    return (
      <div class="container">
        <h1 class="titre"> Est-ce que je peux composter ça ? </h1>
        <select id="selective" type="text" class="custom-select" placeholder="Entrer un aliment" style={elementStyle} onChange={(e)=>this.searchSpace(e)}>
          <option id="option0" value="0">Choisis ton déchet...</option>
            {
              option_tags.forEach(tag => {
                  let option = document.createElement("option");
                  let content = document.createTextNode(tag.props.value);
                  option.appendChild(content);
                  const parent = document.getElementById("selective");
                  console.log(option);
                }
              )
            }
        </select>
      </div>
    )
  }
}

export default App;
