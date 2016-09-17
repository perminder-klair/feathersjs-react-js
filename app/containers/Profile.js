import React, { PropTypes } from 'react';
import AltContainer from 'alt-container';
import _ from 'underscore';

import ProfilePage from '../pages/Profile';
import UsersStore from '../stores/UsersStore';
import AppStore from '../stores/AppStore';
import UsersActions from '../actions/UsersActions';

const Profile = ({ params: { id } }) => {
    //console.log('id', id);
    //console.log('app', AppStore.getState());
    if (_.isUndefined(id)) {
        let { currentUser } = AppStore.getState();
        id = currentUser._id;
    }

    return (
        <AltContainer
            stores={
                {
                    user: function () {
                        return {
                          store: UsersStore,
                          value: UsersStore.getUserFor(id)
                        };
                     }
                }
            }
            actions={ { UsersActions } }
        >
            <ProfilePage />
        </AltContainer>
    )
};

Profile.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string
    })
};

export default Profile;
