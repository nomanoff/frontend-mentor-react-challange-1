function AppText({ children, className, variant, color }) {
  if (variant === "h1") {
    return (
      <h1 style={{ color: color }} className={className}>
        {children}
      </h1>
    );
  }

  if (variant === "h4") {
    return (
      <h4 style={{ color: color }} className={className}>
        {children}
      </h4>
    );
  }

  return <p className={className}>{children}</p>;
}

export default AppText;
