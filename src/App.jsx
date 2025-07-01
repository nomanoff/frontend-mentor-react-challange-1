import AppButton from "./components/AppButton";
import AppText from "./components/AppText";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard margin="10px 0">
        <img
          src="https://i.postimg.cc/c1vCKYc3/avatar-jessica.jpg"
          alt="Profile"
          className="profile-image"
        />

        <AppText variant="h1" color="white">
          Jasica Randall
        </AppText>

        <AppText variant="h4" color="red">
          London, United Kingdom
        </AppText>

        <AppText>*Front-end developer and avaid reader</AppText>

        <div className="social-links">
          <AppButton title="Twitter 1" url="https://twitter.com/yourusername" />

          <AppButton />
          <AppButton
            title="LinkedIn"
            url="https://linkedin.com/in/yourusername"
          />

          <AppButton
            title="GitHub"
            url="https://github.com/hojie1.o"
            titleColor="red"
          />

          <AppButton
            title="Forntend Mentor"
            url="https://www.frontendmentor.io/profile/amirbek0305"
          />
        </div>
      </ProfileCard>
    </div>
  );
}

export default App;
