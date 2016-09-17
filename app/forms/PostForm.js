import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import TextInputGroup from '../elements/TextInputGroup';
import TextAreaGroup from '../elements/TextAreaGroup';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.post.title || '',
            content: props.post.content || ''
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
                    label="Content"
                    value={this.state.content}
                    onChange={(e) => this.setState({content: e.target.value})} />
                <button className="ui primary button" onClick={this.handleSubmit.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}

PostForm.defaultProps = {
    post: {}
};

PostForm.propTypes = {
    post: PropTypes.object,
    handleSubmit: PropTypes.func
};

export default PostForm;
