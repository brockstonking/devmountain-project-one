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
                <img onClick={ () => {this.props.delete(this.props.index)} } className='deleteButton' src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/010_x-512.png" alt=""/>
                <p>{ question }</p>
                <p>{ answer }</p>
            </div>
        )
    }
}

export default Favorites