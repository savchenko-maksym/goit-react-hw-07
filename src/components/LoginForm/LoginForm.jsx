import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <div className={s.form}>
      <div className={s.formNameWrapper}>
        <h1 className={s.formNameTitle}>Login now!</h1>
        <div className={s.formFormikFieldSet}>
          <div className={s.fieldsetWrap}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className={s.fieldset}>
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
                    <Link className={s.linkToRegister} to="/register">
                      Register if you dont have account
                    </Link>
                  </div>
                  <button type="submit" className={s.btn}>
                    Login
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

export default LoginForm;
