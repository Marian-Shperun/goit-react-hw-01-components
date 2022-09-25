import { FriendListEl } from './Friends.styled';
import { FriendItem } from './FriendItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListEl className="friend-list">
      <FriendItem friends={friends} />
    </FriendListEl>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
