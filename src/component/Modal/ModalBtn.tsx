import styled from 'styled-components';

import { IcCloseFriend, IcFavorite, IcSelect } from '../../assets';
type Props = { handleModal: () => void };
const ModalBtn = ({ handleModal }: Props) => {
  return (
    <BtnLayout>
      <BtnContainer>
        <BtnTxt>친한 친구 리스트에 추가</BtnTxt>
        <BtnIcCloseFriend>
          <IcCloseFriend />
        </BtnIcCloseFriend>
      </BtnContainer>
      <BtnContainer>
        <BtnTxt>즐겨찾기에 추가</BtnTxt>
        <IcFavorite />
      </BtnContainer>
      <BtnContainer>
        <BtnTxt>업데이트 안 보기</BtnTxt>
        <BtnMore />
      </BtnContainer>
      <BtnContainer>
        <BtnTxt>제한</BtnTxt>
        <BtnMore />
      </BtnContainer>
      <BtnContainer
        style={{ borderRadius: '0 0 12px 12px' }}
        onClick={handleModal}
      >
        <BtnTxt>팔로우 취소</BtnTxt>
      </BtnContainer>
    </BtnLayout>
  );
};

const BtnIcCloseFriend = styled.div`
  display: flex;
  width: 2.2rem;
  height: 2.2rem;

  align-items: center;
  justify-content: center;

  padding: 0.15rem;
  border: solid 1.5px ${({ theme }) => theme.colors.black};
  border-radius: 50%;
`;
const BtnMore = styled(IcSelect)`
  width: 1.4rem;
  height: 1.4rem;
  fill: ${({ theme }) => theme.colors.darkGray};
  transform: rotate(90deg);
`;
const BtnLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;
const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5.4rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
const BtnTxt = styled.p`
  ${({ theme }) => theme.fonts.regular_14};
`;
export default ModalBtn;
