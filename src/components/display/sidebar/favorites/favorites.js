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
            <div>
                <div>
                    
                </div>
                <div className='favoriteList'>
                    <div className='editDelete'>
                        <img onClick={ () => { this.props.edit(this.props.questionId) } } src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Compose-2-512.png" className='editButton' alt=""/>
                        <img onClick={ () => {this.props.delete(this.props.questionId)} } className='deleteButton' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivHiJB2Hond5R2oMSz0nUWVLgw-NjTv74Dad5zVdWgcq2rk6C" alt=""/> 
                    </div>                
                    <p>{ question }</p>
                    <p>{ answer }</p>
                </div>
            </div>
        )
    }
}

export default Favorites