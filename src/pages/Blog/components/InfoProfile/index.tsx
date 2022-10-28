import { faMapLocation, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoBox } from "../../../../components/InfoBox";
import { BaseText } from "../../../../components/Typography";

interface InfoProfileProps {
  login: string;
  location: string;
  followers: number;
}

export function InfoProfile({ login, location, followers }: InfoProfileProps) {
  const { colors } = useTheme();

  return (
    <InfoBox>
      <li>
        <GithubLogo size={24} color={colors["base-label"]} />
        <BaseText>{login}</BaseText>
      </li>

      <li>
        <FontAwesomeIcon icon={faMapLocation} color={colors["base-label"]} />
        <BaseText>{location}</BaseText>
      </li>

      <li>
        <FontAwesomeIcon icon={faUserGroup} color={colors["base-label"]} />
        <BaseText>
          {followers} {followers > 1 ? "seguidores" : "seguidor"}
        </BaseText>
      </li>
    </InfoBox>
  );
}
