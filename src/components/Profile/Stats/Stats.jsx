import css from '../Profile.module.css';
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
export default Stats;
