import React, {Component} from 'react';
import confetti from '../confetti.gif'

class Motivation extends Component{

    render(){
        return(
        <div className="Motto">
            <img src={confetti} alt="Confetti Image" />
             <h6>Now Serving Motivation:</h6>       
            <h1>You Can Code Girl!</h1>
            <h2>Keep Going!</h2>
            <h3>When You Need Motivation</h3>
            <h4>Just Know "You Got This!"</h4>
            
        </div>
        )
    }
}



export default Motivation;











