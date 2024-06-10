import styled from 'styled-components';

import ModalBtn from './ModalBtn';
import ModalTop from './ModalTop';

type Props = { handleModal: () => void };

const Modal = ({ handleModal }: Props) => {
  return (
    <>
      <ModalBG />
      <ModalLayout>
        <ModalTop handleModal={handleModal} />
        <SplitLine />
        <ModalBtn handleModal={handleModal} />
      </ModalLayout>
    </>
  );
};

const ModalBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;

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
