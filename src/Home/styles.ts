import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IStyledProps {
  isLight: boolean;
}

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: flex-end;

  position: relative;
  padding: 10rem;

  height: 100vh;

  background: ${props => props.theme.background};

  transition: background 1s ease;
`;

export const IconMoon = styled(FontAwesomeIcon)<IStyledProps>`
  position: absolute;
  top: 10rem;
  
  color: ${props => props.theme.color};

  opacity: 1;
  transition: opacity 0.3s ease, transform 1s ease, color 0.3s ease;

  ${props => props.isLight && css`
    opacity: 0;
    transform: translateY(200px);
  `}
`;

export const IconSun = styled(FontAwesomeIcon)<IStyledProps>`
  position: absolute;
  top: 10rem;
  
  color: #F5B512;

  opacity: 0;
  transform: translateY(-200px);
  transition: opacity 0.3s ease, transform 1s ease;

  ${props => props.isLight && css`
    opacity: 1;
    transform: translateY(0px);
  `}
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  
  width: 5rem;
  height: 2.5rem;

  border-radius: 2rem;

  background: ${props => props.theme.color};

  position: relative;

  padding: 0.5rem;

  transition: background 1s ease;
`

export const Ball = styled.div<IStyledProps>`
  height: 2rem;
  width: 2rem;

  border-radius: 50%;

  position: absolute;

  top: 0.25rem;
  left: 0.25rem;

  background: ${props => props.theme.background};

  cursor: pointer;

  transform: translateX(0);
  transition: transform 0.3s ease;

  ${props => props.isLight && css`
    transform: translateX(2.5rem);
  `}
`;