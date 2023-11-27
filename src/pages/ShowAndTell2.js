import EmbedComponent from '../components/EmbedComponent';

import styled from 'styled-components';

const SHOW_AND_TELL_2_SLIDES_EMBED_CODE = `<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vScKfMcTqumdju3OlbQfLARiKAiSiQrD72gqNeCDyukuGCquStYzV6gvIUsnX8n3rGF9P6HqToVZGwz/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

const SHOW_AND_TELL_2_VIDEO_EMBED_CODE = `<iframe width="720" height="400" src="https://www.youtube.com/embed/5kPL1vRayg4" title="LocaDine G13 S&amp;T2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const ShowAndTell2Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
  }
`;

const ShowAndTell2 = () => {
  return (
    <ShowAndTell2Style>
      <h1>Milestone 3: Show And Tell 2</h1>
      <p>Presentation video</p>
      <EmbedComponent embedCode={SHOW_AND_TELL_2_VIDEO_EMBED_CODE} />
      <p>Slide deck</p>
      <EmbedComponent embedCode={SHOW_AND_TELL_2_SLIDES_EMBED_CODE} />
    </ShowAndTell2Style>
  );
};

export default ShowAndTell2;
