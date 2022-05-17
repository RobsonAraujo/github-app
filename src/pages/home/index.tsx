import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import { WrapperList, WrapperButton, WrapperContent } from "./styles";

import { NavLink } from "react-router-dom";
import { getListOrganizations } from "../../services/organization";

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

  const [linkNextPage, setLinkNextPage] = useState<string | null>(null);

  const getOrganizations = async (linkNextPage: string | null) => {
    const response = await getListOrganizations(linkNextPage);
    const linkHeader = response.headers.link;
    const handledLink = linkHeader
      .split(";")[0]
      .replace("<", "")
      .replace(">", "");
    setLinkNextPage(handledLink);
    handleOrganizationList(response.data);
  };

  const handleOrganizationList = (organizationJson: organizationList[]) => {
    const sortDataByName = organizationJson.sort((a, b) => {
      return a.login.localeCompare(b.login);
    });
    setOrganizationList((prevState) => [...prevState, ...sortDataByName]);
  };

  useEffect(() => {
    getOrganizations(null);
  }, []);

  return (
    <WrapperContent>
      <WrapperList>
        {organizationList.map((item) => {
          return (
            <NavLink key={item.id} to={`organization/${item.login}`}>
              <Card
                avatar={item.avatar_url}
                link={item.url}
                login={item.login}
                description={item.description}
              />
            </NavLink>
          );
        })}
      </WrapperList>
      <WrapperButton
        variant="outlined"
        onClick={() => getOrganizations(linkNextPage)}
      >
        See More...
      </WrapperButton>
    </WrapperContent>
  );
}

export default Home;
