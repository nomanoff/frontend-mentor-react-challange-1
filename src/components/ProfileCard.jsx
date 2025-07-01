function ProfileCard({ children, margin }) {
  return (
    <div style={{ margin: margin }} className="profile-card">
      {children}
    </div>
  );
}

export default ProfileCard;
