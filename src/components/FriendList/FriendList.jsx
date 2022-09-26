import { FriendListEl } from './Friends.styled';
import { FriendItem } from './FriendItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListEl className="friend-list">
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendItem avatar={avatar} isOnline={isOnline} name={name} key={id} />
      ))}
    </FriendListEl>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
