import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './sidebar/sidebar'
import Header from './header bar/header'
import './display.css'

class Display extends Component {
    constructor(props){
        super(props);

        this.state = {
            question: 'Accessing trivia questions...',
            answer: '',
            userResponse: '',
            data: null,
            display: null,
            didMount: false,
            editId: null,
            editDisplay: false,
            difficulty: '', 
            easy: false,
            medium: false,
            hard: false,
            random: true
        }

        this.trueClick = this.trueClick.bind( this )
        this.falseClick = this.falseClick.bind( this )
        this.nextClick = this.nextClick.bind( this )
        this.componentDidMount = this.componentDidMount.bind( this )
        this.editClick = this.editClick.bind( this )
        this.hideAnswer = this.hideAnswer.bind( this )
        this.easy = this.easy.bind( this )
        this.medium = this.medium.bind( this )
        this.hard = this.hard.bind( this )
        this.random = this.random.bind( this )

    }
    
    componentDidMount(){
        axios.get(`http://localhost:8060/api/question/?difficulty=${ this.state.difficulty }`).then(response => {
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
        axios.get(`http://localhost:8060/api/question/?previousQuestion=${ this.state.question }&answer=${ this.state.answer }&difficulty=${ this.state.difficulty }`).then(response => {
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

    easy(){
        this.setState({
            difficulty: 'easy',
            easy: true,
            medium: false,
            hard: false,
            random: false
        })
    }

    medium(){
        this.setState({
            difficulty: 'medium',
            easy: false,
            medium: true,
            hard: false,
            random: false
        })
    }

    hard(){
        this.setState({
            difficulty: 'hard',
            easy: false,
            medium: false,
            hard: true,
            random: false
        })        
    }

    random(){
        this.setState({
            difficulty: '',
            easy: false,
            medium: false,
            hard: false,
            random: true
        })
    }

    render(){
        
        let message = this.state.display === true && this.state.userResponse === this.state.answer ? <div ><img className='responseImage' src="http://elegantgowns.net/wp-content/uploads/anselmus-green-checkmark-and-red-minus-17-clipart-check-mark.png" alt="Correct"/></div> : this.state.display === true && this.state.userResponse !== this.state.answer && this.state.userResponse !== '' ? <div><img className='responseImage' src="http://www.newdesignfile.com/postpic/2013/10/red-xmark-icon_293198.jpeg" alt="Wrong"/></div> : <div></div>
        let easy = this.state.easy ? { boxShadow: '0px 0px 20px orange' } : null

        let medium = this.state.medium ? { boxShadow: '0px 0px 20px orange' } : null

        let hard = this.state.hard ? { boxShadow: '0px 0px 20px orange' } : null

        let random = this.state.random ? { boxShadow: '0px 0px 20px orange' } : null
        return(
            <div>
            <div>
                <Header />
            </div>
            <div className='page'>
                
                    <div className='sidebarDiv'>
                        <Sidebar questionData={ this.state.data } which='sidebar' editDisplay={ this.state.editDisplay } editClick={ this.editClick }/>
                    </div>
                
                <div className='questionSide'>
                    <div>
                    <div className='diffContainer'>
                <div>Difficulty:</div>
                <div className='diffButtons'>
                    <div style={ easy } onClick={ this.easy } className='dB easyB'>Easy</div>
                    <div style={ medium } onClick={ this.medium } className='dB mediumB'>Medium</div>
                    <div style={ hard } onClick={ this.hard } className='dB hardB'>Hard</div>
                    <div style={ random } onClick={ this.random } className='dB randomB'>Random</div>
                </div> 
                </div>
                    </div>
                    
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
                    <div>
                        <img className='questionMarks' src="http://www.hssc.us/wp-content/uploads/2017/06/Trivia.png" alt=""/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Display

