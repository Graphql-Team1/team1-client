import styled from 'styled-components';

import { IcMore, IcRecommend, IcSelect } from '../../../assets';
import { USER_NAME } from '../../../constants/userInfo';
type Props = {
  handleModal: () => void;
  isFollowed: boolean;
  handleClickFollowBtn: () => void;
};
const MainInfo = ({ handleModal, isFollowed, handleClickFollowBtn }: Props) => {
  const handleClickBtn = () => {
    handleClickFollowBtn();

    if (isFollowed) {
      handleModal();
    }
  };

  return (
    <MainInfoContainer>
      <UserName>{USER_NAME}</UserName>

      <BtnWrapper>
        <FollowBtn
          type="button"
          onClick={handleClickBtn}
          $isFollowed={isFollowed}
        >
          <ContentsBox>
            <Text $isFollowed={isFollowed}>
              {isFollowed ? '팔로잉' : '팔로우'}
            </Text>
            {isFollowed && (
              <IconBox>
                <IcSelect />
              </IconBox>
            )}
          </ContentsBox>
        </FollowBtn>
        <DMBtn type="button">메시지 보내기</DMBtn>
        <RecommendBtn type="button">
          <IcRecommend />
        </RecommendBtn>
      </BtnWrapper>

      <MoreBtn type="button">
        <IcMore />
      </MoreBtn>
    </MainInfoContainer>
  );
};

export default MainInfo;

const MainInfoContainer = styled.section`
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  margin-right: 2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.h2};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;
`;

const FollowBtn = styled.button<{ $isFollowed: boolean }>`
  padding: 0.7rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.lightGray : theme.colors.primeBlue};

  ${({ theme }) => theme.fonts.semibold_14};
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p<{ $isFollowed: boolean }>`
  color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.black : theme.colors.white};
  ${({ theme }) => theme.fonts.semibold_14};
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;

  margin-left: 1rem;

  transform: rotate(180deg);
`;

const DMBtn = styled.button`
  padding: 0.7rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.semibold_14};
`;

const RecommendBtn = styled.button`
  padding: 0.55rem 1rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const MoreBtn = styled.button`
  padding: 0.7rem;
`;
