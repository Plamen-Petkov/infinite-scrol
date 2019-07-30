import React, { Component} from 'react'

class peopleInfo extends Component{
    

    render() {
        
        //const name = Object.values(this.props.location)
        console.log(this.props)
        //console.log(name)
        return(            
            <div className="people-info">
              <h1>User info</h1>
              <div>
                  <img src={this.props.photo} alt='alt text img' />
              </div>
              <div className="people-props" >
              <p>Name: {this.props.name} </p>
              <p>Gender: {this.props.gender} </p>   
              <p>email: {this.props.email} </p>   
              <p>Mobile: {this.props.cell} </p> 
              </div>
              
                <div className="people-address">
                    <h4>Address</h4>
                    <p>Street: {this.props.street} </p>  
                    <p>City: {this.props.city} </p>
                    <p>State: {this.props.province} </p>
                </div>       
            </div>           
        )
    }
}
export default peopleInfo