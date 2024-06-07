import React from 'react';
import styled, { css } from 'styled-components';

const DUMMY_NAME = '해린';
const DUMMY_SUB_NAME = '아이스크림 가게';
const DUMMY_FOLLOWERS = [
  { id: 'kimchaehyun_._', desc: '님과' },
  { id: 'rkdrbxo1632', desc: '님이 팔로우합니다' },
];

const SubInfo = () => {
  return (
    <SubInfoContainer>
      <Name>{DUMMY_NAME}</Name>
      <SubName>{DUMMY_SUB_NAME}</SubName>

      <FollowerWrapper>
        {DUMMY_FOLLOWERS.map((follower, idx) => {
          return (
            <React.Fragment>
              <Follower $isSecondFollower={idx === 1}>{follower.id}</Follower>
              <Desc>{follower.desc}</Desc>
            </React.Fragment>
          );
        })}
      </FollowerWrapper>
    </SubInfoContainer>
  );
};

export default SubInfo;

const SubInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.semibold_14};
`;

const SubName = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.fonts.regular_14};
`;

const FollowerWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.4rem;
`;

const Follower = styled.p<{ $isSecondFollower: boolean }>`
  ${({ $isSecondFollower }) =>
    $isSecondFollower &&
    css`
      margin-left: 0.5rem;
    `};
  ${({ theme }) => theme.fonts.medium_12};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.fonts.medium_12};
`;
