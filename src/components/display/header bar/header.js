import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            colorOdds: 'black',
            colorEvens: 'black'
        }

        this.evenColorChanger = this.evenColorChanger.bind( this )
        this.oddColorChanger = this.oddColorChanger.bind( this )
        
    }
    

    componentDidMount (){
        this.oddColorChanger();

        setTimeout( () => {
            this.evenColorChanger();
        }, 750)
        
    }

    evenColorChanger(){
        if (this.state.colorEvens === 'black') {
            this.setState({
                colorEvens: 'yellow'
            })
        } else if (this.state.colorEvens === 'yellow') {
            this.setState({
                colorEvens: 'black'
            })
        }

        setTimeout( () => {
            this.evenColorChanger()
        }, 750)
    }

    oddColorChanger(){
        if (this.state.colorOdds === 'black') {
            this.setState({
                colorOdds: 'yellow'
            })
        } else if (this.state.colorOdds === 'yellow') {
            this.setState({
                colorOdds: 'black'
            })
        }

        setTimeout( () => {
            this.oddColorChanger()
        }, 750)
    }
    
    

    render () {
        const oddLights = {
            backgroundColor: `${ this.state.colorOdds }`,
        }
        const evenLights = {
            backgroundColor: `${ this.state.colorEvens }`
        }
        return (
            <div className='headerBar'>
                <div className='top'>
                    <div style={ oddLights } className='light one'></div>
                    <div style={ evenLights } className='light two'></div>
                    <div style={ oddLights } className='light three'></div>
                    <div style={ evenLights } className='light four'></div>
                    <div style={ oddLights } className='light five'></div>
                    <div style={ evenLights } className='light six'></div>
                    <div style={ oddLights } className='light seven'></div>
                    <div style={ evenLights } className='light eight'></div>
                    <div style={ oddLights } className='light nine'></div>
                    <div style={ evenLights } className='light ten'></div>
                </div>
                <div className='middle'>
                    <div>
                        <div style={ evenLights } className='light tFour middleTop'></div>
                        <div style={ oddLights } className='light tThree middleBottom'></div>
                    </div>
                    <div className='titleContainer'>
                        <div className='pageTitle'>
                            <div className='t'>
                                T
                            </div>
                            <div className='r'>
                                R    
                            </div>
                            <div className='i'>
                                I    
                            </div>
                            <div className='v'>
                                V    
                            </div>
                            <div className='i'>
                                I    
                            </div>
                            <div className='a'>
                                A    
                            </div>
                            <div className='exP'>
                                !    
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={ oddLights } className='light eleven middleTop'></div>
                        <div style={ evenLights } className='light twelve middleBottom'></div>
                    </div>
                </div>
                <div className='bottom'>
                    <div style={ evenLights } className='light twentyTwo'></div>
                    <div style={ oddLights } className='light twentyOne'></div>
                    <div style={ evenLights } className='light twenty'></div>
                    <div style={ oddLights } className='light nineteen'></div>
                    <div style={ evenLights } className='light eighteen'></div>
                    <div style={ oddLights } className='light seventeen'></div>
                    <div style={ evenLights } className='light sixteen'></div>
                    <div style={ oddLights } className='light fifteen'></div>
                    <div style={ evenLights } className='light fourteen'></div>
                    <div style={ oddLights } className='light thirteen'></div>   
                </div>
            </div>
        )
    }
}

export default Header