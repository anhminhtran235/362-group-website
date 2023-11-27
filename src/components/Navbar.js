import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  background: ;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  background: white;
  margin-bottom: 20px;

  a {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink className='nav-link' to='/group_info'>
        Group Info
      </NavLink>
      <NavLink className='nav-link' to='/project_pitch'>
        Project Pitch
      </NavLink>
      <NavLink className='nav-link' to='/show_and_tell_1'>
        Show And Tell 1
      </NavLink>
      <NavLink className='nav-link' to='/show_and_tell_2'>
        Show And Tell 2
      </NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
