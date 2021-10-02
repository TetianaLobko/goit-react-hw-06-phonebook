import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import * as actions from "../../redux/actions";
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </>
  );
};

export default Filter;
