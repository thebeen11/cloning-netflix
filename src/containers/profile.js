import { Header, Profiles } from "../components";
import * as ROUTES from "../constans/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setprofile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's whatching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setprofile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
