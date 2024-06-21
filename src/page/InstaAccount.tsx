import { useState } from 'react';
import { useMutation } from 'react-relay';
import styled from 'styled-components';

import followUser from '../apis/followUser';
import unfollowUser from '../apis/unfollowUser';
import Modal from '../component/Modal/Modal';
import Posts from '../component/Posts/Posts';
import Profile from '../component/Profile/Profile';
import Recommend from '../component/Recommend/Recommend';

const InstaAccount = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [commitUnfollow] = useMutation(unfollowUser);
  const [commitFollow] = useMutation(followUser);
  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleClickUnfollowBtn = () => {
    handleModal();
    setIsFollowed(false);
    commitUnfollow({
      variables: {},
      onCompleted(data) {
        console.log(data);
      },
    });
  };

  const handleClickFollowBtn = () => {
    setIsFollowed(true);
    commitFollow({
      variables: {},
      onCompleted(data) {
        console.log(data);
      },
    });
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
