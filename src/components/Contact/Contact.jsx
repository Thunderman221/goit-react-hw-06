import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import phoneIcon from "../../assets/phone.svg";
import profileIcon from "../../assets/profile.svg";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.listItem}>
      <p className={s.paragraph}>
        <span>
          <img src={profileIcon} alt="Profile icon" className={s.icon} />
          {name}
        </span>
        <span>
          <img src={phoneIcon} alt="Phone icon" className={s.icon} />
          {number}
        </span>
      </p>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
