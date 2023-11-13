import React from 'react';

function FollowButton() {
    const [following, setFollowing] = React.useState(false);
  
    const toggleFollow = () => {
      setFollowing(!following);
    };
  
    return (
      <div>
        <button className='cursor-pointer text-purple-900 font-bold' onClick={toggleFollow}>{following ? 'Following' : '+ Follow'}</button>
        {/* {following && <span>You are now following</span>} */}
      </div>
    );
  }
  
  export default FollowButton;
  