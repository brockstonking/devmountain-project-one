import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar/sidebar'
import './display.css'

class Display extends Component {
    constructor(props){
        super(props);

        this.state = {
            question: '',
            answer: '',
            userResponse: '',
            displayTrue: null,
            displayFalse: null,
            data: null
        }

        this.trueClick = this.trueClick.bind( this )
        this.falseClick = this.falseClick.bind( this )
        this.nextClick = this.nextClick.bind( this )
        
    }
    
    componentDidMount(){
        axios.get('http://localhost:8060/api/question').then(response => {
            this.setState({
                question: decodeURIComponent(response.data.results[0].question),
                answer: response.data.results[0].correct_answer,
                userResponse: '',
                data: response.data
            })
        })
    }

    trueClick(){
        this.setState({
            userResponse: 'true',
            displayTrue: true,
            displayFalse: null
        })
    }

    falseClick(){
        this.setState({
            userResponse: 'false',
            displayFalse: true,
            displayTrue: null
        })
    }

    nextClick(){
        axios.get('http://localhost:8060/api/question').then(response => {
            this.setState({
                question: decodeURIComponent(response.data.results[0].question),
                answer: response.data.results[0].correct_answer,
                userResponse: '',
                data: response.data,
                displayFalse: null,
                displayTrue: null
            })
        })
    }

    

    render(){
        let trueMessage = this.state.displayTrue === true ? <div ><img className='responseImage' src="http://elegantgowns.net/wp-content/uploads/anselmus-green-checkmark-and-red-minus-17-clipart-check-mark.png" alt="Correct"/></div> : <div></div>
        let falseMessage = this.state.displayFalse === true ? <div ><img className='responseImage' src="http://www.newdesignfile.com/postpic/2013/10/red-xmark-icon_293198.jpeg" alt="Wrong"/></div> : <div></div>
        return(
            <div className='page'>
                <div>
                    <Sidebar />
                </div>
                <div>
                <div className='question'>
                    { decodeURIComponent(this.state.question) }
                </div>
            <div className='buttons'>
                <div onClick={this.trueClick} className='true-button bothButtons'>
                    True
                </div>
                <div onClick={this.falseClick} className='false-button bothButtons'>
                    False
                </div>
            </div>
            <div onClick={this.falseClick} className='resultMessage'>
                { trueMessage } 
                { falseMessage }
            </div>
            <div className='nextButton' onClick={ this.nextClick }>
                Try another question
            </div>
            
                </div>
            </div>
            
            
        );
    }


}

// working with sidebar and favorites. Trying to use a put request to add the current question, which is stored in state as data, into the favorites bar on the side. 

export default Display