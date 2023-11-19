import EmbedComponent from '../components/EmbedComponent';

import styled from 'styled-components';

const PROJECT_PITCH_SLIDES_EMBED_CODE = `<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLiwRlsP2vWkQl65Jqnctmie0wxGb4ZlX3dYX764asdzwsXyxL5zEs2JwUNtgPiR32Fyoze3slslSE/embed?start=false&loop=true&delayms=3000" frameborder="0" width="720" height="440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

const PROJECT_PITCH_VIDEO_EMBED_CODE = `<iframe width="720" height="400" src="https://www.youtube.com/embed/AVObd9AqXco" title="LocaDine - CMPT 362 Group 13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const ProjectPitchStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
  }
`;

const ProjectPitch = () => {
  return (
    <ProjectPitchStyle>
      <h1>Milestone 1: Project Pitch</h1>
      <p>Presentation video</p>
      <EmbedComponent embedCode={PROJECT_PITCH_VIDEO_EMBED_CODE} />
      <p>Slide deck</p>
      <EmbedComponent embedCode={PROJECT_PITCH_SLIDES_EMBED_CODE} />
    </ProjectPitchStyle>
  );
};

export default ProjectPitch;
