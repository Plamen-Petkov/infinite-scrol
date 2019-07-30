import React, {Component, Fragment } from "react";


class InfiniteScrol extends Component{
    
render(){
    return(
        <div className="people-list">
            <h1>people list</h1>
            {this.props.peoples.map(people =>(
                <Fragment key={people.id} >
                    <hr />
                    <div style={{ display: 'flex' }} onClick={()=>this.props.select(people.id)} >
                        <img
                            alt={people.username}
                            src={people.avatar}
                            style={{
                            borderRadius: '50%',
                            height: 72,
                            marginRight: 20,
                            width: 72,
                            }}
                        />
                        <div>
                            <h2 style={{ marginTop: 0 }}>
                            Name: {people.first_name}  
                            {people.last_name} 
                            </h2>
                            <p>Gender: {people.gender}</p>
                            <p>Email: {people.email}</p>
                        </div>
                    </div>
                </ Fragment>
            ))}
            <hr />
                {this.props.error &&
                <div style={{ color: '#900' }}>
                    {this.props.error}
                </div>
                }
                {this.props.isLoading &&
                <div>Loading...</div>
                }
                {!this.props.hasMore &&
                <div>You did it! You reached the end!</div>
                }
        </ div>
    )
}
}
export default InfiniteScrol