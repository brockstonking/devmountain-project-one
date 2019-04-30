import React, { Component } from 'react'
import axios from 'axios'
import './sidebar.css'
import Favorites from './favorites/favorites'

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: [],
            whichOne: this.props.which, 
            test: null,
            didMount: false
        }

        this.favoriteClick = this.favoriteClick.bind( this )
    }

    componentDidMount(){
        axios.get('http://localhost:8060/api/favorites/').then(results => {
            this.setState({
                favorites: results.data
            })
        })
    }
    favoriteClick(){
        axios.post('http://localhost:8060/api/favorites/', this.props.questionData).then(results => {
            this.setState({
                favorites: results.data,
                didMount: true
            })
        }
        )
    }

    deleteClick(id){
        debugger
        axios.delete(`http://localhost:8060/api/favorites/:id=${id}`, { data: id }).then(results => {
            debugger
            this.setState({
                favorites: results.data
            })
        })
    }

    render(){

        let favoriteList = this.state.favorites.map((e, i) => {
            
            return <Favorites key={ i } index={ i } question={ e.question } answer={ e.correct_answer } delete={ this.deleteClick }/>
        })
        
        return (
            <div>
                <div className='sidebar'> 
                    <div className='addButton' onClick={ this.favoriteClick }>
                        Add current question to Favorites
                    </div>
                    <div className='title'>
                        Favorites:
                    </div>
                    <div>
                        { favoriteList }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar