import styled from 'styled-components';

import { IcClose } from '../../assets';

type Props = {
  name: string;
  desc: string;
  img: string;
};

const ProfileCard = (props: Props) => {
  const { name, desc, img } = props;
  return (
    <CardLayout>
      <CardContainer>
        <TouchBox>
          <IcClose />
        </TouchBox>
        <ProfileImg src={img} alt={name} />
        <ProfileTxt>{name}</ProfileTxt>
        <Desc>{desc}</Desc>
      </CardContainer>
      <SplitLine />
      <FollowBtn>
        <FollowTxt>팔로우</FollowTxt>
      </FollowBtn>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.6rem;
  height: fit-content;
  flex-shrink: 0;

  border-radius: 4px 4px 0 0;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
`;
const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18.1rem;
  align-items: center;

  padding: 1.2rem 1.2rem 0.8rem;
`;

const ProfileImg = styled.img`
  width: 7.7rem;
  height: 7.7rem;
  margin: 1.2rem 0 0.4rem;
`;
const ProfileTxt = styled.p`
  ${({ theme }) => theme.fonts.semibold_14};
  margin: 0.4rem 0 0.8rem;
`;
const Desc = styled.p`
  ${({ theme }) => theme.fonts.regular_14};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0 0 0.4rem;
  text-align: center;
`;
const FollowBtn = styled.button`
  width: 100%;
  height: fit-content;

  padding: 1.2rem;
`;
const FollowTxt = styled.p`
  ${({ theme }) => theme.fonts.semibold_14};
  color: ${({ theme }) => theme.colors.primeBlue};
`;
const SplitLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
const TouchBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  height: fit-content;
  padding: 1rem 1rem 1.2rem 1.2rem;
`;
export default ProfileCard;
