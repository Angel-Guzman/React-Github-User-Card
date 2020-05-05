import React from 'react';
import Card from './Card';
import Followers from './Followers';

function CardList(props) {
    // console.log('CardList rendering')
    return (
        <div className="card-list">
            <h2>Me</h2>
            <Card me={props.me} />
            <h2>My Followers</h2>
            <Followers followers={props.followers} />
        </div>
    )
}

export default CardList;