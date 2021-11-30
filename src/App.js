import React, { useEffect } from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList'
import axios from 'axios'
import './App.css'

class App extends React.Component {

  state = {
    currentuser: '',
    followers: [],
    profile: [],
  }

  componentDidMount(){

    // Axios call for profile

    axios.get(`https://api.github.com/users/peterdavidconley`)
    .then(resp => {
      this.setState({
        ...this.state,
        profile: resp.data,
      })
    })
    .catch(err => {
      console.error(err)
    })

    // Axios call for followers list

    axios.get('https://api.github.com/users/peterdavidconley/followers')
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data,
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
        currentuser: e.target.value
    });
  }

  handleSubmit = (e) => {

    e.preventDefault();

    // Current user profile Axios call

    axios.get(`https://api.github.com/users/${this.state.currentuser}`)
    .then(resp => {
        this.setState({
          ...this.state,
          profile: resp.data,
        })
    })
    .catch(err => {
      console.log(err)
    })

    // Current user followers Axios Call

    axios.get(`https://api.github.com/users/${this.state.currentuser}/followers`)
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  render() {
    return(
    <div>
      <section className='top'>
        <h1>GITHUB INFO</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
          placeholder='Search Username'
          type='text'
          onChange={this.handleChange}
          value={this.state.currentuser}
          />
          <button>Search</button>
        </form>
      </section>
      <br/>
      <User profile={this.state.profile}/>
      <br/>
      <h2>FOLLOWERS:</h2>
      <br/>
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
