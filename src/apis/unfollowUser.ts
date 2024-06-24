import { graphql } from 'react-relay';

const unfollowUser = graphql`
  mutation unfollowUserMutation {
    unfollowUser(followingId: 2) {
      id
      followingCount
      followerCount
    }
  }
`;

export default unfollowUser;
