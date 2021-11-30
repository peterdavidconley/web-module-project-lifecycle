import React from 'react'
import '../App.css'

class User extends React.Component{

    render() {

        return(
        <div>
          <section className='user'>
            <div>
              <img height='200px' width='200px' src={this.props.profile.avatar_url}/>
            </div>
            <div>
              <h3>Name: {this.props.profile.name}</h3>
              <h3>Username: {this.props.profile.login}</h3>
              <h4>TOTAL REPOS: {this.props.profile.public_repos}</h4>
              <h4>TOTAL FOLLOWERS: {this.props.profile.followers}</h4>
            </div>
          </section>
          
        </div>);
      }

}

export default User