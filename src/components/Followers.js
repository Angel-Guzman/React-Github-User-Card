import React from 'react';

function Followers(props) {
    console.log(props.followers)
    return (
        <>
        {props.followers.map(follower => (
            <div className='card' key={follower.id}>
                <img src={follower.avatar_url} alt='follower user profile' />
                <div className='card-info'>
                   <h3>{follower.login}</h3>
                    <p><a href='{follower.html_url}'>{follower.html_url}</a></p> 
                </div>
            </div>))}
        </>
    )
}

export default Followers;