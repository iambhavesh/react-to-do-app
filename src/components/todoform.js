import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};
const TodoForm = ({ onSaveData }) => {
  const formik = useFormik({
    initialValues: { name: "" },
    validate,
    onSubmit(values, { resetForm }) {
      onSaveData(values.name);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
      className={formik.errors.name ? "error-input" : ""}
        name="todo"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        {...formik.getFieldProps("name")}
      />
      {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
