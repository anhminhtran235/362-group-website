import styled from 'styled-components';

import EmbedComponent from '../components/EmbedComponent';
import workloadDistribution from '../images/workload_distribution.png';
import threadDesign from '../images/thread_design.png';
import { Link } from 'react-router-dom';

const FINAL_PROJECT_SLIDES_EMBED_CODE = `<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTxfjuWug6pxMqk2NJ-i4mWOuG2rBpC7kuhLvxlo8MWsw95Z7rrUIU-ADSmdloeTs52BZPw0zo_V8gr/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

const FINAL_PROJECT_VIDEO_EMBED_CODE = `<iframe width="720" height="400" src="https://www.youtube.com/embed/mQwHCCkZuOc" title="LocaDine 362 G13 Final Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const FinalProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
  }
`;

const FinalProject = () => {
  return (
    <FinalProjectStyle>
      <h1>Milestone 4: Final project</h1>
      <p>
        You can download our app{' '}
        <a href='https://drive.google.com/file/d/1Ym_rrYM7l4-n0LORTPELwg6txSU1zmN2/view?usp=sharing'>
          here
        </a>
        . The original project pitch can be found{' '}
        <Link to='/project_pitch'>here</Link>. A zip of the source code can be
        found{' '}
        <a href='https://drive.google.com/file/d/140u7GQUtV33DqyjWTYLQtjdNo9o2MdjN/view?usp=sharing'>
          here
        </a>
        .
      </p>
      <p>Team effort breakdown - Who did what</p>
      <img src={workloadDistribution} alt='Workload distribution' width={720} />
      <p>Thread design</p>
      <img src={threadDesign} alt='Thread design' width={720} />
      <p>Presentation video</p>
      <EmbedComponent embedCode={FINAL_PROJECT_VIDEO_EMBED_CODE} />
      <p>Slide deck</p>
      <EmbedComponent embedCode={FINAL_PROJECT_SLIDES_EMBED_CODE} />
    </FinalProjectStyle>
  );
};

export default FinalProject;
