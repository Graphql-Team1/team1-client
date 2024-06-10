import styled from 'styled-components';

import UserImg from './UserImg';
import UserInfo from './UserInfo';
type Props = { handleModal: () => void };
const Profile = ({ handleModal }: Props) => {
  return (
    <ProfileLayout>
      <UserImg />
      <UserInfo handleModal={handleModal} />
    </ProfileLayout>
  );
};

export default Profile;

const ProfileLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;

  width: 100%;
`;
