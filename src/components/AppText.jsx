function AppText({ children, className, variant, color }) {
  if (variant === "h1") {
    return (
      <h1
        style={{ color: color, border: "1px solid red" }}
        className={className}
      >
        {children}
      </h1>
    );
  }

  return <p className={className}>{children}</p>;
}

export default AppText;
