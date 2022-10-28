import { BaseText, BaseTitle } from "../../../../components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { gitHubApi } from "../../../../lib/axios";
import { InfoProfile } from "../InfoProfile";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  GitHubLink,
  ProfileAvatar,
  ProfileContainer,
  ProfileText,
} from "./styles";

interface ProfileInfo {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  html_url: string;
}

export function Profile() {
  const [userProfile, setUserProfile] = useState<ProfileInfo>(
    {} as ProfileInfo
  );

  async function fetchDataFromUsers() {
    const user = "hilucred";
    const response = await gitHubApi.get(`users/${user}`);

    setUserProfile(response.data);
  }

  useEffect(() => {
    fetchDataFromUsers();
  }, []);

  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={userProfile.avatar_url} alt="" />
      </ProfileAvatar>

      <ProfileText>
        <BaseTitle level="large">{userProfile.name}</BaseTitle>

        <GitHubLink href={userProfile.html_url}>
          <span>GITHUB</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </GitHubLink>

        <BaseText>{userProfile.bio}</BaseText>

        <InfoProfile
          login={userProfile.login}
          location={userProfile.location}
          followers={userProfile.followers}
        />
      </ProfileText>
    </ProfileContainer>
  );
}
