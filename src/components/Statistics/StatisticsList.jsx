import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => {
        const { id, label, percentage } = stat;
        return (
          <li className={css.item} style={getRandomHexColor()} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        );
      })}
    </ul>
  );
};

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return { backgroundColor: color };
}

StatisticsList.propTypes = {
  stats: PropTypes.array.isRequired,
};
