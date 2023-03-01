import { Item, Status } from './Friends.styled';
// import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
  return friends.map(friend => {
    const { avatar, id, isOnline, name } = friend;
    return (
      <Item className="item" key={id}>
        <Status className="status" status={isOnline}></Status>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </Item>
    );
  });
};

