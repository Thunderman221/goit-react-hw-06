import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form className={s.form}>
          <label className={s.label}>
            Name:
            <Field
              type="text"
              name="name"
              className={s.field}
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={s.label}>
            Number:
            <Field
              type="tel"
              name="number"
              className={s.field}
              value={values.number}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={s.btn}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
