import React from 'react'

class Follower extends React.Component {
    render(){
        return(
            <div className='follower'>
                <img height='150px' width='150px' src={this.props.follower.avatar_url}/>
                <h5>{this.props.follower.login}</h5>
            </div>
        )
    }
}

export default Follower