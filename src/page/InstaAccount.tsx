import { useState } from 'react';
import { useMutation } from 'react-relay';
import styled from 'styled-components';

import followUser from '../apis/followUser';
import unfollowUser from '../apis/unfollowUser';
import Modal from '../component/Modal/Modal';
import Posts from '../component/Posts/Posts';
import Profile from '../component/Profile/Profile';
import Recommend from '../component/Recommend/Recommend';

type DataType = {
  followUser?: {
    followingCount: number;
    followerCount: number;
  };

  unfollowUser?: {
    followingCount: number;
    followerCount: number;
  };
};

const InstaAccount = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followerStatus, setFollowerStatus] = useState<number[]>([2, 2]);

  const [commitUnfollow] = useMutation(unfollowUser);
  const [commitFollow] = useMutation(followUser);
  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleFollowChange = (isFollowed: boolean) => {
    setIsFollowed(isFollowed);
    const commitFunction = isFollowed ? commitFollow : commitUnfollow;

    commitFunction({
      variables: {},
      onCompleted(data: DataType) {
        const { followUser, unfollowUser } = data;
        const user = followUser || unfollowUser;

        if (user) {
          const { followingCount, followerCount } = user;
          setFollowerStatus([followingCount, followerCount]);
        }
      },
    });
  };

  const handleClickUnfollowBtn = () => {
    handleModal();
    handleFollowChange(false);
  };

  const handleClickFollowBtn = () => {
    handleFollowChange(true);
  };

  return (
    <InstaAccountLayout>
      {isModalOpen && (
        <Modal
          handleModal={handleModal}
          handleClickUnfollowBtn={handleClickUnfollowBtn}
        />
      )}
      <Profile
        isFollowed={isFollowed}
        handleModal={handleModal}
        handleClickFollowBtn={handleClickFollowBtn}
        followerStatus={followerStatus}
      />
      <Recommend />
      <Posts />
    </InstaAccountLayout>
  );
};

export default InstaAccount;

const InstaAccountLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem 2rem 0;
  width: calc(100% - 4rem);

  overflow-y: auto;
  gap: 3rem;
`;
