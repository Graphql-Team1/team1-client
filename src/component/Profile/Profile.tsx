import styled from 'styled-components';

import UserImg from './UserImg';
import UserInfo from './UserInfo';
type Props = {
  handleModal: () => void;
  isFollowed: boolean;
  handleClickFollowBtn: () => void;
  followerStatus: Array<number>;
};
const Profile = ({
  handleModal,
  isFollowed,
  handleClickFollowBtn,
  followerStatus,
}: Props) => {
  return (
    <ProfileLayout>
      <UserImg />
      <UserInfo
        handleModal={handleModal}
        isFollowed={isFollowed}
        handleClickFollowBtn={handleClickFollowBtn}
        followerStatus={followerStatus}
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
