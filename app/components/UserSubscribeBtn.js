import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import alertify from 'alertify.js';

class UserSubscribeBtn extends Component {
    subscribe() {
        alertify.success("Subscribed successfully!");
    }

    unSubscribe() {
        alertify.success("Un-subscribed successfully!");
    }

    render() {
        let currentUser = {};//todo
        let { user } = this.props;
        let subscribersCount = !_.isUndefined(user.subscribersCount) ? user.subscribersCount : 0;

        if (!_.isNull(currentUser) && !_.isUndefined(currentUser.subscribedTo) && _.indexOf(currentUser.subscribedTo, user._id) !== -1) {
            //is in array
            return (
                <button className="ui secondary button" onClick={this.unSubscribe.bind(this)}>subscribed ({subscribersCount})</button>
            )
        } else {
            //is not in array
            return (
                <button className="ui primary button" onClick={this.subscribe.bind(this)}>subscribe ({subscribersCount})</button>
            )
        }
    }
}

UserSubscribeBtn.defaultProps = {
    user: {}
};

UserSubscribeBtn.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserSubscribeBtn;
