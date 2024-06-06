import styled from 'styled-components';
import { IcMore, IcRecommend, IcSelect } from '../../../assets';

const USER_NAME = 'lynii._.i';

const MainInfo = () => {
  return (
    <MainInfoContainer>
      <UserName>{USER_NAME}</UserName>

      <BtnWrapper>
        <FollowBtn type="button">
          <ContentsBox>
            <Text>팔로잉</Text>
            <IconBox>
              <IcSelect />
            </IconBox>
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

const FollowBtn = styled.button`
  padding: 0.7rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.semibold_14};
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
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
