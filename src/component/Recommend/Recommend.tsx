import styled from 'styled-components';

import DUMMYRECOMMDATA from '../../constants/recommendData';
import ProfileCard from './ProfileCard';

const Recommend = () => {
  return (
    <RecommendLayout>
      <InfoWrapper>
        <InfoTitle>회원님을 위한 추천</InfoTitle>
        <InfoMore>모두 보기</InfoMore>
      </InfoWrapper>

      <RecommCardWrapper>
        {DUMMYRECOMMDATA.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            desc={profile.desc}
            img={profile.img}
          />
        ))}
      </RecommCardWrapper>
    </RecommendLayout>
  );
};
const RecommendLayout = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.8rem;

  justify-content: space-between;
  margin: 1.6rem 0rem 1.2rem;
`;
const InfoTitle = styled.span`
  ${({ theme }) => theme.fonts.semibold_14};
`;
const InfoMore = styled(InfoTitle)`
  color: ${({ theme }) => theme.colors.primeBlue};
`;
const RecommCardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Recommend;
