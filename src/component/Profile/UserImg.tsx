import styled from 'styled-components';

const UserImg = () => {
  return (
    <UserImgContainer>
      <ImgWrapper>
        <Img src="/test.jpeg" />
      </ImgWrapper>
    </UserImgContainer>
  );
};

export default UserImg;

const UserImgContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 2.8rem;
`;

const ImgWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16.6rem;
  height: 16.6rem;

  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.lightGray};
`;

const Img = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;
