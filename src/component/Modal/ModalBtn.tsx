import styled from 'styled-components';

import { IcCloseFriend, IcFavorite, IcSelect } from '../../assets';
type Props = { handleModal: () => void };
const ModalBtn = ({ handleModal }: Props) => {
  const BTNCONTENT = [
    {
      txt: '친한 친구 리스트에 추가',
      icon: (
        <BtnIcCloseFriend>
          <IcCloseFriend />
        </BtnIcCloseFriend>
      ),
    },
    {
      txt: '즐겨찾기에 추가',
      icon: <IcFavorite />,
    },
    {
      txt: '업데이트 안 보기',
      icon: <BtnMore />,
    },
    {
      txt: '제한',
      icon: <BtnMore />,
    },
    {
      txt: '팔로우 취소',
      icon: null,
      onClick: handleModal,
    },
  ];

  return (
    <BtnLayout>
      {BTNCONTENT.map((ele, idx) =>
        idx === BTNCONTENT.length - 1 ? (
          <BtnLastContainer key={ele.txt} onClick={ele.onClick}>
            <BtnTxt>{ele.txt}</BtnTxt>
          </BtnLastContainer>
        ) : (
          <BtnContainer key={ele.txt}>
            <BtnTxt>{ele.txt}</BtnTxt>
            {ele.icon}
          </BtnContainer>
        ),
      )}
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
const BtnLastContainer = styled(BtnContainer)`
  border-radius: 0 0 12px 12px;
`;
const BtnTxt = styled.p`
  ${({ theme }) => theme.fonts.regular_14};
`;
export default ModalBtn;
