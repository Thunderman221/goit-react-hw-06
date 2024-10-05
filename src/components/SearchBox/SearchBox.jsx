import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { Formik, Field, Form } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ handleChange }) => (
        <Form className={s.form}>
          <Field
            type="text"
            name="search"
            className={s.field}
            placeholder="Search contacts"
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
