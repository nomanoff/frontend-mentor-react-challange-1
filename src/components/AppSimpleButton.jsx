function AppSimpleButton({ children, type, handleButtonClick }) {
  return (
    <button
      onClick={() => {
        handleButtonClick(type);
      }}
    >
      {children}
    </button>
  );
}

export default AppSimpleButton;
