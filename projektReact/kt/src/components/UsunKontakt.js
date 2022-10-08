import React, { Component } from 'react';

class UsunKontakt extends Component{

    state = {
        id : this.props.match.params.id,
        dane : JSON.parse(localStorage.getItem("KT")),
        redirect : false
    }

    usunKontakt = () => {

        this.state.dane.splice(this.state.id, 1);
        localStorage.setItem("KT", JSON.stringify(this.state.dane));

        this.setState({redirect : true});
    }

    anuluj = () => {
        this.setState({redirect : true});

    }


  render(){

    if(this.state.redirect === true){
        window.location.href = "/";
    }

    return(
      <div>
        <p>czy na pewno chce usunąc kontakt</p>
        <button onClick={this.usunKontakt}>TAK</button>
        <button onClick={this.anuluj}>NIE</button>
      </div>
    )

  }

}

export default UsunKontakt;