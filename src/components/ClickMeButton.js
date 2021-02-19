import React, {Component} from 'react';

class ClickMeButton extends Component {

    state = {
        likes: 0
    }

    handleOnClick = (e) => {
        // this.setState({
        //     ...this.state,
        //     likes: this.state.likes + 1
        // })

        console.log('a');

        fetch ('/postsjkfjdlsfjds')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp)
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e')

        // a, e, b, d
    }

    render () {
        return (
            <div>
                <button onClick={(e) => this.handleOnClick(e)}>Click Me</button>
                <div>
                    {this.state.likes}
                </div>
            </div>
        )
    }



}

export default ClickMeButton