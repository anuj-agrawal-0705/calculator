import React, { Component } from 'react'

class ScienceMode extends Component {
    state={
        isMode:false,
        
    }

    modeList = ['^','s','sqrt']

    _scientificMode(btnVal){
        this.setState({isMode:true})
        var value = this.props.changeValue
        if(btnVal === '^'){
        this.props.changeMode(value*value)
        }
        else if(btnVal=== 'sign'){
            this.props.changeMode(value*-1)
        }

        
            
    
    }

    render() {

        return (
            <div>
               <button onClick={(btn)=> this._scientificMode(btn)}>Scientif Mode</button> 
               {this.state.isMode ? <div>{this.modeList.map((v,i)=>{
                   return(
                       <span key={i}>
                           <button onClick={()=>this._scientificMode(v)}>{v}</button> 
                       </span>
                   )

               })}
                   
                   {/* <button onClick={(btnVal)=>this._scientificMode(btnVal)}>sign</button>
                   <button onClick={(btnVal)=>this._scientificMode(btnVal)}>^</button>
                   <button onClick={(btnVal)=>this._scientificMode(btnVal)}>sqrt</button> */}
               </div>
               :null}
            </div>
        )
    }
}

export default ScienceMode
