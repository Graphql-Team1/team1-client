import styled from 'styled-components';

import { IcModalClose } from '../../assets';
import { USER_NAME } from '../../constants/userInfo';

type Props = { handleModal: () => void };

const ModalTop = ({ handleModal }: Props) => {
  return (
    <TopContainer>
      <TouchBox onClick={handleModal}>
        <IcModalClose />
      </TouchBox>
      <TopImg src="/test.jpeg" alt="프로필" />
      <IdTxt>{USER_NAME}</IdTxt>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  align-items: center;
  padding: 1.6rem;
  border-radius: 12px 12px 0 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
const TouchBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.8rem;
  margin: 0.4rem 0.8rem;
`;
const TopImg = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
`;
const IdTxt = styled.p`
  ${({ theme }) => theme.fonts.semibold_14};
  margin-top: 0.8rem;
`;

export default ModalTop;
