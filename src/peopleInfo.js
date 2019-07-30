import React, { Component} from 'react'

class peopleInfo extends Component{
    

    render() {
        
        
        return(            
            <div className="people-info">
              <h1>User info</h1>
              <div>
                  <img src={this.props.avatar} alt='alt text img' />
              </div>
              <div className="people-props" >
              <p>First Name: {this.props.first_name} </p>
              <p>Last Name: {this.props.last_name} </p>
              <p>Gender: {this.props.gender} </p>   
              <p>email: {this.props.email} </p>   
              
              </div>
              
                <div className="people-address">
                    <h4>Other Info</h4>
                    <p>Bio: {this.props.bio} </p>  
                    <p>IP Address: {this.props.ip_address} </p>
                    <p>ID: {this.props.id} </p>
                </div>       
            </div>           
        )
    }
}
export default peopleInfo