import React, { Component } from 'react'
import axios from 'axios'
import './sidebar.css'
import Favorites from './favorites/favorites'

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: []
        }

        this.favoriteClick = this.favoriteClick.bind( this )
    }

    favoriteClick(){
        axios.put('http://localhost:8060/api/favorite', this.state.data).then(results => {
            this.setState({
                favorites: [...this.state.favorites, results.data]
            })
        }
        )
    }

    render(){
        const favoriteList = this.state.favorites.map((e, i) => {
                return <Favorites key={i} index={i} favorite={e.results[0].question} put={this.favoriteClick} />
        })
        return (
            <div className='sidebar'>
                <div className='title'>
                    Favorites:
                </div>
                <div>
                    { favoriteList }
                </div>
            </div>
        )
    }
}

export default Sidebar