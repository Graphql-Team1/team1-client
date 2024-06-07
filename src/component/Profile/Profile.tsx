import styled from 'styled-components';
import UserImg from './UserImg';
import UserInfo from './UserInfo';

const Profile = () => {
  return (
    <ProfileLayout>
      <UserImg />
      <UserInfo />
    </ProfileLayout>
  );
};

export default Profile;

const ProfileLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;

  width: 100%;
`;
