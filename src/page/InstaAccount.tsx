import { useState } from 'react';
import styled from 'styled-components';

import Modal from '../component/Modal/Modal';
import Profile from '../component/Profile/Profile';
import Recommend from '../component/Recommend/Recommend';

const InstaAccount = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <InstaAccountLayout>
      {isModalOpen && <Modal handleModal={handleModal} />}
      <Profile handleModal={handleModal} />
      <Recommend />
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
`;
