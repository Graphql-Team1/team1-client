import styled from 'styled-components';

import CurrentInfo from './Info/CurrentInfo';
import MainInfo from './Info/MainInfo';
import SubInfo from './Info/SubInfo';
type Props = {
  handleModal: () => void;
  isFollowed: boolean;
  handleClickFollowBtn: () => void;
  followerStatus: Array<number>;
};
const UserInfo = ({
  handleModal,
  isFollowed,
  handleClickFollowBtn,
  followerStatus,
}: Props) => {
  return (
    <UserInfoLayout>
      <MainInfo
        handleModal={handleModal}
        isFollowed={isFollowed}
        handleClickFollowBtn={handleClickFollowBtn}
      />
      <CurrentInfo followerStatus={followerStatus}/>
      <SubInfo />
    </UserInfoLayout>
  );
};

export default UserInfo;
const UserInfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;
