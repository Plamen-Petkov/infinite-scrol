import React, { Component } from 'react';

import './App.css';
import InfiniteScrol from './infinitescrol'
import PeopleInfo from './peopleInfo'
import request from 'superagent';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        error: false,
        hasMore: true,
        isLoading: false,
        peoples: [],
        details: {
                  avatar: '',
                  bio: '',
                  email: '',
                  first_name: '',
                  gender: '',
                  id: '',
                  ip_address: '',
                  last_name: ''
                  }
    }
window.onscroll = () => {
    let docHeight = window.innerHeight
    let scrol = document.documentElement.scrollTop
    let offset = document.documentElement.offsetHeight
    
    if(this.state.error || this.state.isLoading  || !this.state.hasMore){
        return
    }
    if(docHeight+scrol===offset){
        this.loadpeoples()
    }

}
}
loadpeoples = ()=>{
  fetch('http://localhost:9999/mockdata/?results=10').then(req => req.json()).then(data => {
    console.log(data)
    this.setState({
      hasMore:this.state.peoples.length<1000,
      isLoading:false,
      peoples: [...this.state.peoples, ...data]
    })
  }).catch(err => { console.log(err)
    this.setState({
      error: err.mesage,
      isLoading:false
    })
  })
 
  // request.get('http://localhost:9999/mockdata/?results=10')
  // .then(result => {
      
  //     const nextpeoples = result.body.map(people =>({          
  //       avatar: people.avatar,
  //       bio: people.bio,
  //       email: people.email,
  //       first_name: people.first_name,
  //       gender: people.gender,
  //       id: people.id,
  //       ip_address: people.ip_address,
  //       last_name: people.last_name
  //     }))
  //     this.setState({
  //         hasMore: this.state.peoples.length < 1000,
  //         isLoading: false,
  //         peoples: [...this.state.peoples, ...nextpeoples]
  //     })
    
  // })
  // .catch(err => {
  //     this.setState({
  //         error: err.mesage,
  //         isLoading: false
  //     })
  // })
}
loadpeoplesByUuid = id => {
  request.get(`http://localhost:9999/mockdataid/${id}`).then(result =>{
    const people = result.body
    
    const selectedpeople = {
            avatar: people.avatar,
            bio: people.bio,
            email: people.email,
            first_name: people.first_name,
            gender: people.gender,
            id: people.id,
            ip_address: people.ip_address,
            last_name: people.last_name
    }
      
    this.setState({details: selectedpeople})
    
  })
}
selectUser = id => this.loadpeoplesByUuid(id)

componentDidMount = () => this.loadpeoples();
  render() {
    return (
      <div className="App">
        <InfiniteScrol peoples={this.state.peoples} select={this.selectUser}/>
        <PeopleInfo {...this.state.details} />
      </div>
    );
  }
}

export default App;
