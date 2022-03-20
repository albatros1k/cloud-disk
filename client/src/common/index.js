import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const fontProps = css`
  font-family: "Inspiration";
  font-weight: ${({ fw = "normal" }) => fw};
  font-size: ${({ fz = 14 }) => `${fz}px`};
  color: ${({ theme: { primary, white } }) => (primary ? primary : white)};
`;

export const flex = css`
  display: flex;
  justify-content: ${({ justify = "space-between" }) => justify};
  align-items: ${({ align = "flex-start" }) => align};
`;

export const block = css`
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  width: ${({ w = "auto" }) => w};
  height: ${({ h = "auto" }) => h};
  box-sizing: border-box;
  background: ${({ bg = "transparent" }) => bg};
`;

export const Heading = styled.h5`
  ${fontProps}
  margin: ${({ m = "0" }) => m};
`;

export const Column = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  align-items: ${({ align = "flex-start" }) => align};
`;

export const Row = styled.div`
  ${block}
  ${flex}
`;

export const Card = styled.section`
  ${block}
  ${flex}
	flex-direction: column;
  background: #fff;
  position: relative;
  border-radius: ${({ br = 4 }) => `${br}px`};
  box-shadow: 0px 1px 4px rgba(92, 92, 92, 0.25);
`;

export const Link = styled(NavLink)`
  font-family: "Inspiration";
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme: { primary } }) => primary};
  text-decoration: none;
  margin: ${({ m }) => m};
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateX(3px) scale(1.05); 
`;
