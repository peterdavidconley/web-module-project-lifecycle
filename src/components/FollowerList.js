import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component{

    render(){
        return(
            <div className='followers'>
                <h3>Follower's List Component (hard coded). Need to map over followers array and return a Follower component for every one.</h3>
            </div>
        )
    }
}

export default FollowerList