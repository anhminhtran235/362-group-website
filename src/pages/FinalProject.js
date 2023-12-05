import EmbedComponent from '../components/EmbedComponent';

import styled from 'styled-components';

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
      <p>Presentation video</p>
      <EmbedComponent embedCode={FINAL_PROJECT_VIDEO_EMBED_CODE} />
      <p>Slide deck</p>
      <EmbedComponent embedCode={FINAL_PROJECT_SLIDES_EMBED_CODE} />
    </FinalProjectStyle>
  );
};

export default FinalProject;
