import styled from 'styled-components';

import CurrentInfo from './Info/CurrentInfo';
import MainInfo from './Info/MainInfo';
import SubInfo from './Info/SubInfo';
type Props = { handleModal: () => void };
const UserInfo = ({ handleModal }: Props) => {
  return (
    <UserInfoLayout>
      <MainInfo handleModal={handleModal} />
      <CurrentInfo />
      <SubInfo />
    </UserInfoLayout>
  );
};

export default UserInfo;
const UserInfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;
