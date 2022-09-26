import { Item, Status } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, isOnline, name }) => {
  return (
    <Item className="item">
      <Status className="status" status={isOnline} />
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
