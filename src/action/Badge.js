import React from 'react';

function Badge (props) {
    const {goalData, complete, onClick} = props;
    if (goalData.badge) {
      const badge = `badges/${complete ? goalData.badge_complete : goalData.badge}`
      return <img src={badge} alt={"badge"} onClick={onClick} />
    }
    return null;
}

export default Badge;
