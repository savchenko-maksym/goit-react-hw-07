import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.contactList}>
        {visibleContacts.map(({ id, name, number }, idx) => (
          <li className={s.contactItem} key={id}>
            <Contact name={name} number={number} id={id} idx={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
