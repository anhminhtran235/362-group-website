const EmbedComponent = ({ embedCode }) => {
  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};

export default EmbedComponent;
