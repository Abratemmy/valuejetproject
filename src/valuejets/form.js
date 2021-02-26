import React, { Component } from 'react';


export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            airport: [],
            name:"roundtrip"
        };
        
    this.onChangeValue= this.onChangeValue.bind(this);
    }

    onChangeValue(event){
        console.log(event.target.value);
    }
    componentDidMount(){
        fetch('http://31.120.107.221/v1/api/flight/all-airports')
        .then(response => response.json())
        .then(data => {
            this.setState({
                airport: data
            });
        })
    }

    handleSelection(event){
        event.preventDefault();
        fetch('http://31.120.107.221/v1/api/flight/all-airports',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                aiportId: null, 
                airportName: "muritala muhammed"
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log('success')
        })
    }
    render() {
        return (
            <div className="">
                <form>
                    <div onChange={this.onChangeValue} className="radio-btn">
                        <span className="radio-span"><input type="radio" value="roundtrip" name="1" checked/>Roundtrip</span>
                        <span className="radio-span"><input type="radio" value="one-way" name="1"/>One-Way</span>
                        <span className="radio-span"> <input type="radio" value="multicity" name="1"/>Multicity</span>
                    </div>


                    <div className="row airport">
                        <div className="col-6">
                            
                         <div className="form-group" as="select">
                            <label>From</label>
                            {/* <input type="text" placeholder="ABJ, Nnadi Azikwe airport" as="select"/> */}
                            <div >
                                {this.state.airport.map(airport =>
                                    <option key={airport.airportID}>
                                        {airport.airportName}
                                    </option>)}
                            </div>
                        </div>
                        </div> 
                        <div className="col-6">
                        <div className="">
                            <label>To</label>
                            <input type="text" placeholder="ABJ, Nnadi Azikwe airport" />
                        </div></div>
                    </div> 
                    
                                       
                </form>
            </div>
        )
    }
}

export default Form
