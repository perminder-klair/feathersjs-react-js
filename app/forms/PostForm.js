import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import TextInputGroup from '../elements/TextInputGroup';
import TextAreaGroup from '../elements/TextAreaGroup';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.post.title || '',
            description: props.post.description || ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <form className="ui form">
                <TextInputGroup
                    label="Title"
                    value={this.state.title}
                    onChange={(e) => this.setState({title: e.target.value})} />
                <TextAreaGroup
                    label="Description"
                    value={this.state.description}
                    onChange={(e) => this.setState({description: e.target.value})} />
                <button className="ui primary button" onClick={this.handleSubmit.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}

PostForm.propTypes = {
    post: PropTypes.object,
    handleSubmit: PropTypes.func
};

export default PostForm;
