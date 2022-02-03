import style from './Filter.module.scss';
import { filterContact } from '../../redux/filter/action';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={style.label}>Find contacts by name</label>
      <input
        className={style.input}
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};
