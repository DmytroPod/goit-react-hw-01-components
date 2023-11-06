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
        <img src={avatar} alt="User avatar" class="avatar" width="100" />
        <UserInfo class="name">{username}</UserInfo>
        <UserInfo class="tag">{tag}</UserInfo>
        <UserInfo class="location">{location}</UserInfo>
      </Description>

      <ProfileList>
        <ProfileItem>
          <Label class="label">Followers</Label>
          <Label class="quantity">{stats.followers}</Label>
        </ProfileItem>
        <ProfileItem>
          <Label class="label">Views</Label>
          <Label class="quantity">{stats.views}</Label>
        </ProfileItem>
        <ProfileItem>
          <Label class="label">Likes</Label>
          <Label class="quantity">{stats.likes}</Label>
        </ProfileItem>
      </ProfileList>
    </Container>
  );
};
export default Profile;
