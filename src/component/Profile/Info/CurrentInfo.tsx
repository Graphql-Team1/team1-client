import styled from 'styled-components';

type Props = {
  followerStatus: Array<number>;
};

const CurrentInfo = ({ followerStatus }: Props) => {
  const FOLLOWER_INFO = [27, followerStatus[0], followerStatus[1]];

  const CURRENT_INFO = [
    { title: '게시물', info: FOLLOWER_INFO[0] },
    { title: '팔로워', info: FOLLOWER_INFO[1] },
    { title: '팔로우', info: FOLLOWER_INFO[2] },
  ];

  return (
    <section>
      <CurrentInfoWrapper>
        {CURRENT_INFO.map((cur) => {
          return (
            <CurrentInfoList key={cur.title}>
              <Title>{cur.title}</Title>
              <Info>{cur.info}</Info>
            </CurrentInfoList>
          );
        })}
      </CurrentInfoWrapper>
    </section>
  );
};

export default CurrentInfo;

const CurrentInfoWrapper = styled.ul`
  display: flex;

  gap: 4rem;
`;

const CurrentInfoList = styled.li`
  display: flex;

  gap: 0.5rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.regular_16};
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.semibold_16};
`;
