import axios from "axios";

const getListOrganizations = (linkNextPage: string | null) =>
  axios({
    method: "get",
    url:
      linkNextPage ||
      `https://api.github.com/organizations?per_page=10&since=0`,
  });

const getOrganizationByName = (name: string | undefined) =>
  axios({
    method: "get",
    url: `  https://api.github.com/orgs/${name}`,
  });

export { getListOrganizations, getOrganizationByName };
