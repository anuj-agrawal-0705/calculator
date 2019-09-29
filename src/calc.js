import React, { Component } from 'react'
import ScienceMode from './ScienceMode'

class Calculator extends Component {
    state = {
        result:'',
        value:'',
        opr:''
        }
    
    btnList=[7,8,9,'/',4,5,6,'*',1,2,3,'+','clr',0,'=','-']

    _handleClick(btnVal){
        var result = this.state.result;
        var value = this.state.value
        if(! ['+','-','/','*','.','='].includes(btnVal)){
            
           this.setState({value:btnVal}) 
           this.setState({result:result+btnVal})
        }

        else if(btnVal === '='){
            this.setState({opr:btnVal})
            this.setState({value:eval(result).toString()})
            this.setState({result:''})
        }

        else if( ['+','-','/','*','.'].includes(btnVal)){
        
            this.setState({opr:btnVal})
            this.setState({value:eval(result).toString()})
            this.setState({result:eval(result)+btnVal})
        }

        
        
            

    }

    _onScienceMode(value){
        this.setState({value:value})
        this.setState({result:this.state.result+value})
    }


    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                {this.btnList.map((v,i)=>{
                    return(
                        <span key={i}>
                            <button onClick={()=>this._handleClick(v)}>{v}</button>
                            {(i+1) %4 ===0 ? <br /> : null}
                        </span>
                    )
                })}
                <ScienceMode
                changeValue = {this.state.value}
                changeMode = {(btnVal)=> this._onScienceMode(btnVal)} />
            </div>
        )
    }
}

export default Calculator
