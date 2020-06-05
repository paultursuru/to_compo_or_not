import React, { Component } from 'react';
import informations from './info.json';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      selectOptions: [],
      selectedValue: null
    };
  }
  componentWillMount = function(){
      this.setState({
        selectOptions : informations.map(item => item.label),
        selectedValue : informations.map(item => item.label)[0]
      });
  }
  handleSelect=(e)=>{
    this.setState({
      selectedValue : e.target.value
    })
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
    const items = informations.filter((data)=>{
      if(data.label.toLowerCase().includes(this.state.selectedValue.toLowerCase())){
          return data
      }
    }).map(el=>{
      if(el.compo.includes(1)) {
        return(
          <div key={el.label}>
            <ul>
              <li style={styleInfo}>
                <h1 className="oui">Oui !</h1>
                <p>{el.label}</p>
                <span style={emojiStyle}>{el.emoji}</span>
              </li>
            </ul>
          </div>
        )
      }
      else {
        return(
          <div key={el.label}>
            <ul>
              <li style={styleInfo}>
                <h1 className="non">Non !</h1>
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
        <nav>
          <h1 className="titre"> Est-ce que je peux composter ça ? </h1>
          <form>
            <select value={this.state.selectedValue} onChange={this.handleSelect} type="text" className="custom-select">
              {
                this.state.selectOptions.map(function(item){
                  return(
                    <option value={item} key={item}>{item}</option>
                  )
                })
              }
            </select>
          </form>
        </nav>
        <main>
          {items}
        </main>
      </div>
    )
  }
}
export default App;
