import { graphql } from 'react-relay';

const followUser = graphql`
  mutation followUserMutation {
    followUser(followingId: 2) {
      id
      followingCount
      followerCount
    }
  }
`;

export default followUser;
