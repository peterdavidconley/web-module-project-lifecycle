import React from 'react';

class App extends React.Component {
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
      <h4>User Component Goes Here</h4>
      <br/>
      <h2>FOLLOWERS:</h2>
      <br/>
      <h4>Followers List Component Goes Here</h4>
    </div>);
  }
}

export default App;
