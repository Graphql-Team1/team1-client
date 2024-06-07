import styled from 'styled-components';

const DUMMY_INFO = [27, 904, 701];

const CURRENT_INFO = [
  { title: '게시물', info: DUMMY_INFO[0] },
  { title: '팔로워', info: DUMMY_INFO[1] },
  { title: '팔로우', info: DUMMY_INFO[2] },
];

const CurrentInfo = () => {
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
