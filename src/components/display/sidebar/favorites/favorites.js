import React, { Component } from 'react'
import './favorites.css'

class Favorites extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let question = this.props.question;
        let answer = this.props.answer;
        return(
            <div className='favoriteList'>
                <div className='editDelete'>
                    <img onClick={ () => { this.props.edit(this.props.index) } } src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Compose-2-512.png" className='editButton' alt=""/>
                    <img onClick={ () => {this.props.delete(this.props.index)} } className='deleteButton' src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/010_x-512.png" alt=""/> 
                </div>                
                <p>{ question }</p>
                <p>{ answer }</p>
            </div>
        )
    }
}

export default Favorites