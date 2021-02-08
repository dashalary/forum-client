import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'

const LikeButton = (props) => {

    return (
        <div>
            <Button as='div' labelPosition='right' onClick={props.handleOnClick}>
            <Button color='red'>
                <Icon name='heart' />
                Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
                {props.post.likes}
            </Label>
            </Button>
        </div>
    )
}

export default LikeButton