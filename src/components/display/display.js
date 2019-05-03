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
            didMount: false,
            editId: null,
            editDisplay: false
        }

        this.trueClick = this.trueClick.bind( this )
        this.falseClick = this.falseClick.bind( this )
        this.nextClick = this.nextClick.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
        this.editClick = this.editClick.bind( this )
        this.hideAnswer = this.hideAnswer.bind( this )

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
                display: true,
                didMount: true
            })
        })
        .catch(() => {
            console.log('Sorry, we encountered a problem. Please try another question!')
        })
    }

    trueClick(){
        this.setState({
            userResponse: 'True',
            display: true
        })   
    }

    falseClick(){
        this.setState({
            userResponse: 'False',
            display: true
        })  
    }

    hideAnswer(){
        this.setState({
            display: false
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
                editDisplay: false
            })
        })
        .catch(() => {
            console.log('Sorry, we encountered a problem. Please try another question!')
        })
    }

    editClick(){
        if (this.state.editDisplay === true) {
            this.setState({
                editDisplay: false
            })
        } else if (this.state.editDisplay === false) {
            this.setState({
                editDisplay: true
            })
        }
    }

    render(){
        let message = this.state.display === true && this.state.userResponse === this.state.answer ? <div ><img className='responseImage' src="http://elegantgowns.net/wp-content/uploads/anselmus-green-checkmark-and-red-minus-17-clipart-check-mark.png" alt="Correct"/></div> : this.state.display === true && this.state.userResponse !== this.state.answer && this.state.userResponse !== '' ? <div><img className='responseImage' src="http://www.newdesignfile.com/postpic/2013/10/red-xmark-icon_293198.jpeg" alt="Wrong"/></div> : <div></div>
        return(
            <div className='page'>
                <div>
                    <div>
                        <Sidebar questionData={ this.state.data } which='sidebar' editDisplay={ this.state.editDisplay } editClick={ this.editClick }/>
                    </div>
                </div>
                <div>
                    { this.display }
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
                    <div className='resultMessage'>
                        { message } 
                    </div>
                    <div className='nextButton' onClick={ this.nextClick }>
                        Try another question
                    </div>
                    <div onClick={ this.hideAnswer } className='hideButton'>
                        Hide answer
                    </div>
                </div>
            </div>
        );
    }
}

export default Display