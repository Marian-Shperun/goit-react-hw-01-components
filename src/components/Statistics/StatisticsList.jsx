import PropTypes from 'prop-types';
import getRandomHexColor from './randomColor';
import css from './Statistics.module.css';

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

StatisticsList.propTypes = {
  stats: PropTypes.array.isRequired,
};
