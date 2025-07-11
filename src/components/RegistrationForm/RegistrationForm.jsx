import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
  };

  return (
    <div className={s.form}>
      <div className={s.formNameWrapper}>
        <h1 className={s.formNameTitle}>Register now!</h1>
        <div className={s.formFormikFieldSet}>
          <div className={s.fieldsetWrap}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className={s.fieldset}>
                  <label className={s.label}>
                    Name
                    <Field
                      name="name"
                      type="name"
                      className={s.input}
                      placeholder="Name"
                    />
                  </label>
                  <label className={s.label}>
                    Email
                    <Field
                      name="email"
                      type="email"
                      className={s.input}
                      placeholder="Email"
                    />
                  </label>
                  <label className={s.label}>
                    Password
                    <Field
                      name="password"
                      type="password"
                      className={s.input}
                      placeholder="Password"
                    />
                  </label>
                  <div>
                    <Link to="/login" className={s.link}>
                      Login if registered
                    </Link>
                  </div>
                  <button type="submit" className={s.btn}>
                    Register
                  </button>
                </fieldset>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
