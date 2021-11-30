import React from 'react'
import '../App.css'

class User extends React.Component{

    render() {

        return(
        <div>
          <section className='user'>
            <div>
              <img height='200px' width='200px' src='https://via.placeholder.com/450'/>
            </div>
            <div>
              <h3>Name:</h3>
              <h3>Username: </h3>
              <h4>TOTAL REPOS: </h4>
              <h4>TOTAL FOLLOWERS: </h4>
            </div>
          </section>
          
        </div>);
      }

}

export default User