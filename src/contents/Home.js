import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
//  import profilepic from '../img/me.JPG';

export class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                {/* <img src={profilepic} className="profilepic"/> */}
                <ReactTypingEffect className="typingeffect" text={['I am Shaik Mohamamd Sharuk Ali','I am a web developer']} speed={100} eraseDelay={700}/>
                <Social/>
            </div>
        )
    }
}

export default Home
