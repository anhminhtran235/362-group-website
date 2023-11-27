import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectPitch from './pages/ProjectPitch';
import ShowAndTell1 from './pages/ShowAndTell1';

import styled from 'styled-components';
import GroupInfo from './pages/GroupInfo';
import ShowAndTell2 from './pages/ShowAndTell2';

const PageContentStyled = styled.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <PageContentStyled>
        <Routes>
          <Route path='/' element={<Navigate replace to='/group_info' />} />
          <Route path='/group_info' element={<GroupInfo />} />
          <Route path='/project_pitch' element={<ProjectPitch />} />
          <Route path='/show_and_tell_1' element={<ShowAndTell1 />} />
          <Route path='/show_and_tell_2' element={<ShowAndTell2 />} />
        </Routes>
      </PageContentStyled>
    </Router>
  );
}

export default App;
