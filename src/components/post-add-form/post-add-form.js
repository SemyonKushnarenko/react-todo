import React, {Component} from 'react';

import './post-add-form.css';

class PostAddForm extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({
            text: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Type your aims here..."
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Add</button>
            </form>
        )
    }
}

export default PostAddForm;