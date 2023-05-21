const variants = {
    primary: "text-white bg-blue-600 active:bg-blue-700",
    transparent: "hover:bg-slate-50 active:bg-slate-200"
  };
  const sizes = {
    sm: "text-base font-normal px-2 py-1",
    md: "text-xl font-medium px-3 py-1.5",
    lg: "text-2xl font-bold px-5 py-2.5"
  };
  
  const Button = (props) => {
    const { className, variant = "primary", size = "md", ...otherProps } = props;
  
    return (
      <button
        className={("", variants[variant], sizes[size], className)}
        {...otherProps}
      />
    );
  };
  
  export default Button;
  