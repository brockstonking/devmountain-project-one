import React, { Component } from 'react'
import './favorites.css'

class Favorites extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='favoriteList'>
                <h1>this.props.favorite</h1>
                <button onClick={() => { this.props.put }}>Add</button>
            </div>
        )
    }
}

export default Favorites