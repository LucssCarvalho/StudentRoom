import React from 'react';


class Clock extends React.Component {
    constructor (props) {
        super();

        this.state = {
            number: 15,
        };
    }

    componentDidMount () {
        let newNumber = this.state.number
        const myInterval = setInterval(() => {
            newNumber--
            this.setState({number: newNumber})
            if (newNumber == 3){
                document.body.style.backgroundColor = "#f7da00";
            }
            else if (newNumber == 2){
                document.body.style.backgroundColor = "#f75f00";
            }
            else if (newNumber == 1){
                document.body.style.backgroundColor = "#b80000";
            }
            else if (newNumber == 0) {
                this.props.testeFuncao()
                clearInterval(myInterval)
            }
            
        }, 1000)
    }

render(){
    return(
        <div class="label_clock">
        <h2>{this.state.number}</h2> 
        </div>
         );
     }
}

export default Clock;