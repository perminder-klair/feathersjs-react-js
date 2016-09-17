import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class UserItem extends Component {
    render() {
        let { user } = this.props;

        return (
            <div className="item">
                <div className="content">
                    <Link to={`/profile/${user._id}`}>
                        {user.email}
                    </Link>
                </div>
            </div>
        )
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
