import React from "react";
import s from "./ContactList.module.css";
import IconButton from "../IconButton/";
import { ReactComponent as AddIcon } from "../../icons/delete.svg";

import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";
import * as actions from "../../redux/actions";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <IconButton onClick={() => onDeleteContact(id)}>
            <AddIcon width="15" height="15" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
