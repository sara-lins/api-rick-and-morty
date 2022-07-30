import styled from "styled-components";
import backCard from "../imgs/stickers.png";

export const LiCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-image: url(${backCard});
  background-size: 22rem;
  background-repeat: no-repeat;
  min-width: 22rem;
  min-height: 22rem;

  img {
    border-radius: 50%;
    width: 12.5rem;
  }
`;

/*  */
