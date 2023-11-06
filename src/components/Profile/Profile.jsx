import {
  Container,
  Description,
  UserInfo,
  ProfileList,
  ProfileItem,
  Label,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <img src={avatar} alt="User avatar" width="100" />
        <UserInfo>{username}</UserInfo>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <ProfileList>
        <ProfileItem>
          <Label>Followers</Label>
          <Label>{stats.followers}</Label>
        </ProfileItem>
        <ProfileItem>
          <Label>Views</Label>
          <Label>{stats.views}</Label>
        </ProfileItem>
        <ProfileItem>
          <Label>Likes</Label>
          <Label>{stats.likes}</Label>
        </ProfileItem>
      </ProfileList>
    </Container>
  );
};
export default Profile;
