import PropTypes from 'prop-types';

import css from './Profile.module.css';

export const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <Description description={user} />
      <Stats stats={user.stats} />
    </div>
  );
};

const Description = ({ description }) => {
  const { username, tag, location, avatar } = description;
  return (
    <div className="description">
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

const Stats = ({ stats }) => {
  const arrayStats = Object.entries(stats);
  return (
    <ul className={css.stats}>
      {arrayStats.map((stat, i) => {
        return (
          <li key={i + 1}>
            <span className={css.label}>{stat[0]}</span>
            <span className={css.quantity}>{stat[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

Description.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};
