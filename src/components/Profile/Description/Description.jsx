import css from '../Profile.module.css';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
export default Description;
