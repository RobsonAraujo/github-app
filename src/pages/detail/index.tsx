import React, { useState, useEffect, FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import { useParams } from "react-router-dom";

import { getOrganizationByName } from "../../services/organization";
interface OrganizationData {
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
  description: string;
  name: string;
  company: null;
  blog: string;
  location?: string | null;
  email?: string | null;
  twitter_username?: string | null;
  is_verified: boolean;
  has_organization_projects: boolean;
  has_repository_projects: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  type: string;
}

const initialData = {
  login: "",
  id: 0,
  node_id: "",
  url: "",
  repos_url: "",
  events_url: "",
  hooks_url: "",
  issues_url: "",
  members_url: "",
  public_members_url: "",
  avatar_url: "",
  description: "",
  name: "",
  company: null,
  blog: "",
  location: "",
  email: "",
  twitter_username: "",
  is_verified: false,
  has_organization_projects: true,
  has_repository_projects: true,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  html_url: "",
  created_at: "",
  updated_at: "",
  type: "",
};
function Detail() {
  const [data, setData] = useState<OrganizationData>(initialData);
  const params = useParams();

  const getOrganizationData = async () => {
    const response = await getOrganizationByName(params.name);
    setData(response.data);
  };

  useEffect(() => {
    getOrganizationData();
  }, []);

  return (
    <>
      <h2> Organization Info</h2>
      <div>name: {data.login}</div>
      <div>url: {data.url}</div>
      <div>blog: {data.blog}</div>
      <h2> links to access</h2>
      <a href={data.repos_url}>
        <Chip label="repos_url" />
      </a>
      <a href={data.members_url}>
        <Chip label="members_url" />
      </a>
      <a href={data.issues_url}>
        <Chip label="issues_url" />
      </a>
      <a href={data.events_url}>
        <Chip label="events_url" />
      </a>
      <h2> Infos </h2>
      <p>has_organization_projects</p>
      <Checkbox checked={data.has_organization_projects} />
      <p>is_verified</p>
      <Checkbox checked={data.is_verified} />
      <p>has_repository_projects</p>
      <Checkbox checked={data.has_repository_projects} />
    </>
  );
}

export default Detail;
