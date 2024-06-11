import { useState } from 'react';
import styled from 'styled-components';

import PostsHeader from './PostsHeader';

const DUMMY = [
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
  { imgSrc: '/test.jpeg' },
];

const Posts = () => {
  const [isClicked, setIsClicked] = useState('게시물');

  const handleClickHeader = (text: string) => {
    setIsClicked(text);
  };

  return (
    <PostsLayout>
      <PostsHeader isClicked={isClicked} handleClickFn={handleClickHeader} />

      <PostsContainer>
        {isClicked === '게시물' &&
          DUMMY.map((img, idx) => {
            if (idx % 3 === 0) {
              return (
                <PostsWrapper key={idx}>
                  <ImgBox>
                    <Img src={img.imgSrc} />
                  </ImgBox>
                  <ImgBox>{DUMMY[idx + 1] && <Img src={img.imgSrc} />}</ImgBox>
                  <ImgBox>{DUMMY[idx + 2] && <Img src={img.imgSrc} />}</ImgBox>
                </PostsWrapper>
              );
            }
          })}
      </PostsContainer>
    </PostsLayout>
  );
};

export default Posts;

const PostsLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 2rem;
`;

const PostsContainer = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 0.4rem;
`;

const PostsWrapper = styled.div`
  display: flex;

  gap: 0.4rem;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
