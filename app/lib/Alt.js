import Alt from 'alt';
import lockr from 'lockr';
import _ from 'underscore';

import Constants from '../lib/Constants';

var alt = new Alt();

//restore snap shot using alt bootstrap
let snapshot = lockr.get(Constants.SNAP_SHOT_KEY);
if (!_.isUndefined(snapshot)) {
    //console.log('restore snapshot', snapshot);
    alt.bootstrap(JSON.stringify(snapshot));
}

//take snap shot every 1 minute of app
setInterval(() => {
    var snapshot = alt.takeSnapshot();
    console.log('taking app snapshot');
    lockr.set(Constants.SNAP_SHOT_KEY, snapshot)
}, 60000);//60000

module.exports = alt;
