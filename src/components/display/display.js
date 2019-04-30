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
            data: null,
            display: null,
            didMount: false
        }

        this.trueClick = this.trueClick.bind( this )
        this.falseClick = this.falseClick.bind( this )
        this.nextClick = this.nextClick.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
        
    }
    
    componentDidMount(){
        axios.get('http://localhost:8060/api/question').then(response => {
            this.setState({
                question: decodeURIComponent(response.data.results[0].question),
                answer: response.data.results[0].correct_answer,
                userResponse: '',
                data: {
                    category: response.data.results[0].category,
                    type: response.data.results[0].type,
                    difficulty: response.data.results[0].difficulty,
                    question: decodeURIComponent(response.data.results[0].question),
                    correct_answer: response.data.results[0].correct_answer,
                    incorrect_answers: response.data.results[0].incorrect_answers
                },
                // create an object that contains each portion of the response, set to the correct response value. 
                display: true,
                didMount: true
            })
        })
        
    }

    trueClick(){
        this.setState({
            userResponse: 'True',
            
        })
         
    }

    falseClick(){
        this.setState({
            userResponse: 'False',
            
        })
        
    }

    nextClick(){
        axios.get('http://localhost:8060/api/question').then(response => {
            this.setState({
                question: decodeURIComponent(response.data.results[0].question),
                answer: response.data.results[0].correct_answer,
                userResponse: '',
                data: {
                    category: response.data.results[0].category,
                    type: response.data.results[0].type,
                    difficulty: response.data.results[0].difficulty,
                    question: decodeURIComponent(response.data.results[0].question),
                    correct_answer: response.data.results[0].correct_answer,
                    incorrect_answers: response.data.results[0].incorrect_answers
                },
                displayFalse: null,
                displayTrue: null
            })
        })
        console.log(this.state.answer)
    }

    

    render(){
        let message = this.state.display === true && this.state.userResponse === this.state.answer ? <div ><img className='responseImage' src="http://elegantgowns.net/wp-content/uploads/anselmus-green-checkmark-and-red-minus-17-clipart-check-mark.png" alt="Correct"/></div> : this.state.display === true && this.state.userResponse !== this.state.answer && this.state.userResponse !== '' ? <div><img className='responseImage' src="http://www.newdesignfile.com/postpic/2013/10/red-xmark-icon_293198.jpeg" alt="Wrong"/></div> : <div></div>
        
        

       

        
        return(
            <div className='page'>
                <div>
                    <div>
                        <Sidebar questionData={ this.state.data } which='sidebar'/>
                    </div>
                </div>
                <div>
                <div className='question'>
                    { this.state.question }
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
                { message } 
                
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