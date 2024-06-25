import styled from 'styled-components';

import UserImg from './UserImg';
import UserInfo from './UserInfo';
type Props = {
  handleModal: () => void;
  isFollowed: boolean;
  handleClickFollowBtn: () => void;
  follower: number | undefined;
};
const Profile = ({
  handleModal,
  isFollowed,
  handleClickFollowBtn,
  follower,
}: Props) => {
  return (
    <ProfileLayout>
      <UserImg />
      <UserInfo
        handleModal={handleModal}
        isFollowed={isFollowed}
        handleClickFollowBtn={handleClickFollowBtn}
        follower={follower}
      />
    </ProfileLayout>
  );
};

export default Profile;

const ProfileLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;

  width: 100%;
`;
