import React from 'react';
import ReactDOM from 'react-dom';
let app = document.getElementById('page');

const Parent = React.createClass({
  getInitialState() {
    return {
      name: "JACKIE JACKSON",
    }
  },
  changeCard(newName) {
    this.setState({
      name: `${newName} JACKSON`,
      img: `${newName}.jpg`
    })
  },
  render: function() {
    return (
      <div className="card">
        <Display name={this.state.name} />
        <Control onChange={this.changeCard} />
      </div>
    );
  }
});

const Display = React.createClass({
  render(){
    let name = this.props.name;
    let img = "./assets/images/jackie.jpg";
    return (  
      <div className="display" >
        <h1> {name.toUpperCase} </h1>
        <img src={img}/> 
      </div>
    )
  }
})

const Control = React.createClass({
  handleChange(e){
    let name = e.target.value;
    this.props.onChange(name);
    console.log( name )
  },
  render(){
    return (
        <select
          id="names" 
          onChange={this.handleChange} >
          <option value="jackie"> Jackie </option>
          <option value="marlon"> Marlon </option>
          <option value="tito"> Tito </option>
          <option value="jermaine"> Jermaine </option>
          <option value="michael"> Michael </option>
        </select>
    )
  }
});

ReactDOM.render(  
  <Parent/>, 
  app
);

