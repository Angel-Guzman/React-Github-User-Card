import React from 'react';

function Card(props) {
    // console.log(props.me)
    return (
        <div className='card'>
            <img src={props.me.avatar_url} alt='user profile' />
            <div className='card-info'>
                <h3>{props.me.name}</h3>
                <p>{props.me.login}</p>
                <p>{props.me.location}</p>
                <p><a href={props.me.html_url} rel='noopener noreferrer' target='_blank'>{props.me.html_url}</a></p>
                <p>{props.me.followers}</p>
                <p>{props.me.following}</p>
                <p>{props.me.bio}</p>
            </div>
        </div>
    )
}

export default Card;