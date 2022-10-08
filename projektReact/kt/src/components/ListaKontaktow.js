import React, { Component } from 'react';

class ListaKontaktow extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT")),
    }

  render(){

    return(
      <div>
        <table border="1">
            <tr>
                <td>Imię</td>
                <td>Nazwisko</td>
                <td>Telefon</td>
                <td>Email</td>
            </tr>

            {this.state.dane.map((value, index) =>
            
                <tr>
                    <td>{value.imie}</td>
                    <td>{value.nazwisko}</td>
                    <td>{value.telefon}</td>
                    <td>{value.email}</td>
                    <td>
                        <a href={`/usun/${index}`}>usun</a>
                    </td>
                    <td>
                        <a href={`/edytuj/${index}`}>edytuj</a>
                    </td>
                </tr>
                
            )}

        </table>
      </div>
    )

  }

}

export default ListaKontaktow;