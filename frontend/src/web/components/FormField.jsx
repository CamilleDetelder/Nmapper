import { useField } from "formik";

const FormField = (props) => {
  const { label, className, name, ...otherProps } = props;
  const [field, { error, touched }] = useField({ name });

  return (
    <label className={("flex flex-col gap-2", className)}>
      <span className="text-sm font-medium">{label}</span>
      <input className="px-3 py-1.5 border-2" {...field} {...otherProps} />
      {touched && error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </label>
  );
};

export default FormField;
