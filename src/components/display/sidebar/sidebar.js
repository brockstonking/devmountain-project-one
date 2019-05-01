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
            didMount: false,
            edit: false,
            editInput: '',
            editId: null
        }

        this.favoriteClick = this.favoriteClick.bind( this )
        this.deleteClick = this.deleteClick.bind( this )
        this.editDisplay = this.editDisplay.bind( this )
        this.editQuestion = this.editQuestion.bind( this )
        this.handleChange = this.handleChange.bind( this )
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
        axios.delete(`http://localhost:8060/api/favorites?id=${id}`).then(results => {
            this.setState({
                favorites: results.data
            })
        })
    }

    editQuestion(id, input){  
        axios.put(`http://localhost:8060/api/favorites?id=${id}&question=${input}`).then(results => {
            this.setState({
                favorites: results.data,
                editDisplay: false
            })
        })
    }

    editDisplay(id){
        this.setState({
            editDisplay: true,
            editId: id
        })
    }

    handleChange(val) {
        this.setState({
            editInput: val
        })
    }

    render(){

        let favoriteList = this.state.favorites.map((e, i) => {
            return <Favorites key={ i } index={ i } question={ e.question } answer={ e.correct_answer } delete={ this.deleteClick } edit={ this.editDisplay }/>
        })

        let editBox = this.state.editDisplay ? <div> <input type="text" placeholder='Enter edit here' onChange={ (e) => { this.handleChange(e.target.value) } }/> <button onClick={ () => { this.editQuestion(this.state.editId, this.state.editInput) } }>Confirm</button></div>  : <div></div>
        
        return (
            <div className='sidebar'>
                <div className='container'> 
                    <div className='addButton' onClick={ this.favoriteClick }>
                        Add current question to Favorites
                    </div>
                    <div className='title'>
                        Favorites:
                    </div>
                    <div>
                        { editBox }
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