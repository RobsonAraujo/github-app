import styled from "styled-components";
import Button from "@mui/material/Button";

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;

export const WrapperButton = styled(Button)`
  margin: 0 auto;
`;
