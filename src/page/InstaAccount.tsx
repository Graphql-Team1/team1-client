import styled from 'styled-components';

import Profile from '../component/Profile/Profile';
import Recommend from '../component/Recommend/Recommend';

const InstaAccount = () => {
  return (
    <InstaAccountLayout>
      <Profile />
      <Recommend />
    </InstaAccountLayout>
  );
};

export default InstaAccount;

const InstaAccountLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem 2rem 0;
  width: calc(100% - 4rem);
`;
