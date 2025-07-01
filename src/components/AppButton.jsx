function AppButton({ title = "Title", titleColor = "#444", url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: titleColor || "#fff" }}
    >
      {title}
    </a>
  );
}

export default AppButton;
