import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
