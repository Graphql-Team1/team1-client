import React from 'react';
import styled, { css } from 'styled-components';

import { POST_HEADER_CONTENTS } from '../../constants/postHeaderContents';

interface PostHeaderProps {
  isClicked: string;
  handleClickFn: (text: string) => void;
}

const PostsHeader = ({ isClicked, handleClickFn }: PostHeaderProps) => {
  return (
    <React.Fragment>
      <Line />
      <PostsHeaderContainer>
        {POST_HEADER_CONTENTS.map((content) => {
          return (
            <PostHeader
              key={content.text}
              onClick={() => handleClickFn(content.text)}
              $isClicked={isClicked === content.text}
            >
              {content.icon}
              <Text $isClicked={isClicked === content.text}>
                {content.text}
              </Text>
            </PostHeader>
          );
        })}
      </PostsHeaderContainer>
    </React.Fragment>
  );
};

export default PostsHeader;

const Line = styled.div`
  width: 100%;

  border: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
`;

const PostsHeaderContainer = styled.header`
  display: flex;

  gap: 6rem;
`;

const sharedColor = css<{ $isClicked: boolean }>`
  ${({ theme, $isClicked }) =>
    $isClicked
      ? css`
          color: ${theme.colors.black};
        `
      : css`
          color: ${theme.colors.darkGray};
        `};
`;

const PostHeader = styled.div<{ $isClicked: boolean }>`
  display: flex;
  align-items: flex-start;

  padding: 2.5rem 0;

  ${({ theme, $isClicked }) =>
    $isClicked &&
    css`
      border-top: 0.1rem solid ${theme.colors.black};
    `};

  ${sharedColor}
`;

const Text = styled.p<{ $isClicked: boolean }>`
  margin-left: 0.6rem;

  ${sharedColor}
  ${({ theme }) => theme.fonts.semibold_12};
`;
