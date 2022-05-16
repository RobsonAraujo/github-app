import React, { useState, useEffect } from "react";
import organizationJson from "../mocks/organizations.json";
import Card from "../components/card";
import { WrapperList } from "./styles";

type organizationList = {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string | null;
};

function Home() {
  const [organizationList, setOrganizationList] = useState<
    organizationList[] | []
  >([]);

  useEffect(() => {
    setOrganizationList(organizationJson);
  });

  return (
    <WrapperList>
      {organizationList.map((item) => {
        return (
          <Card
            key={item.id}
            avatar={item.avatar_url}
            link={item.url}
            login={item.login}
            description={item.description}
          />
        );
      })}
    </WrapperList>
  );
}

export default Home;
