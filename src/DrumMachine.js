import React, { Component } from 'react';

class DrumMachine extends Component{
    constructor(props){
        super(props);
        this.state={
            power: false,
            banks: {
                //TO DO: Add new banks
                first: [
                    {
                        id: "chord-1",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
                        key: "Q",
                        about: "Chord 1"
                    },
                    {
                        id: "chord-2",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
                        key: "W",
                        about: "Chord 2"
                    },
                    {
                        id: "chord-3",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
                        key: "E",
                        about: "Chord 3"
                    },
                    {
                        id: "gul",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
                        key: "A",
                        about: "Give us a light"
                    },
                    {
                        id: "do",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
                        key: "S",
                        about: "Open Hi Hat"
                    },
                    {
                        id: "bld",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
                        key: "D",
                        about: "Closed Hi Hat"
                    },
                    {
                        id: "kick",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
                        key: "Z",
                        about: "Punchy Kick"
                    },
                    {
                        id: "side-stick",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
                        key: "X",
                        about: "Side Stick"
                    },
                    {
                        id: "snare",
                        src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
                        key: "C",
                        about: "Snare"
                    }
                ]
            },
            display: "Sample:"
        }
        this.playSample = this.playSample.bind(this);
        this.keyDownHandle = this.keyDownHandle.bind(this);
        this.handlePower = this.handlePower.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyDownHandle);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyDownHandle);
    }

    handlePower(){
        this.setState({power: !this.state.power})
        if(!this.state.power){
            this.setState({ display: "Sample:"})
        } 
    }

    playSample(key){
        if(this.state.power){
            document.getElementById(key).currentTime = 0;
            document.getElementById(key).play();
            this.state.banks.first.map(x => key === x.key ? this.setState({display: `Sample: ${x.about}`}) : 1)
        }
   }

    keyDownHandle(e){
        const x = e.keyCode;
        const id = e.key.toUpperCase();
        if(x === 81){
            this.playSample(id);
        }
        if(x === 87){
            this.playSample(id);
        }
        if(x === 69){
            this.playSample(id);
        }
        if(x === 65){
            this.playSample(id);
        }
        if(x === 83){
            this.playSample(id);
        }
        if(x === 68){
            this.playSample(id);
        }
        if(x === 90){
            this.playSample(id);
        }
        if(x === 88){
            this.playSample(id);
        }
        if(x === 67){
            this.playSample(id);
        }
    }
    //TODO: Volume bar, switch banks
    render(){
        const { first } = this.state.banks;
        let i = 0;
        return(
            <div id="drum-machine" onKeyDown={this.keyDownHandle}>
                <div className="column">
                    <div id="display" style={{backgroundColor: this.state.power ? "beige" : "cadetblue"}}>
                        <p>{this.state.power &&  this.state.display}</p>
                    </div>
                    <div id="drum-pads">  
                        {first.map(x => 
                            <div className="drum-pad" key={`drum-pad-${i}`} onClick={this.playSample.bind(this, x.key)} id={x.id}>
                                <span>{x.key}</span>
                            <audio key={`audio-${i++}`} className="clip" id={x.key} src={x.src}></audio>
                        </div>
                        )}                
                    </div>
                </div>
                <div className="column">
                    <input type="checkbox" name="" onClick={this.handlePower}></input>
                </div>
            </div>
        )
    }
}

export default DrumMachine;