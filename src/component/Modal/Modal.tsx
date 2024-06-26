import styled from 'styled-components';

import ModalBtn from './ModalBtn';
import ModalTop from './ModalTop';

type Props = {
  handleModal: () => void;
  handleClickUnfollowBtn: () => void;
};

const Modal = ({ handleModal, handleClickUnfollowBtn }: Props) => {
  return (
    <>
      <ModalBG onClick={handleModal} />
      <ModalLayout>
        <ModalTop handleModal={handleModal} />
        <SplitLine />
        <ModalBtn handleClickUnfollowBtn={handleClickUnfollowBtn} />
      </ModalLayout>
    </>
  );
};

const ModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;

  background-color: black;
  opacity: 85%;
  z-index: 2;
`;
const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: fit-content;
  z-index: 3;
`;
const SplitLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
export default Modal;
