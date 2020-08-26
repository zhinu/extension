import styled from 'styled-components';
import Tab from 'components/atoms/Tab/Tab';

const TabsNav = styled.nav`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.secondaryColor};

  ${Tab} {
    width: 50%;
  }
`;

export default TabsNav;
