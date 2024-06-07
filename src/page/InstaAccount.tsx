import styled from 'styled-components';
import Profile from '../component/Profile/Profile';

const InstaAccount = () => {
  return (
    <InstaAccountLayout>
      <Profile />
    </InstaAccountLayout>
  );
};

export default InstaAccount;

const InstaAccountLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem 0;
  width: calc(100% - 4rem);
`;
