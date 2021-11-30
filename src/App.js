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

  render() {
    return(
    <div>
      <section className='top'>
        <h1>GITHUB INFO</h1>
        <form>
          <input 
          placeholder='Search Username'
          type='text'
          />
          <button>Search</button>
        </form>
      </section>
      <br/>
      <User/>
      <br/>
      <h2>FOLLOWERS:</h2>
      <br/>
      <h4>Followers List Component Goes Here</h4>
    </div>);
  }
}

export default App;
