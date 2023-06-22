function People(props) {
  const { text, link } = props;

  return (
    <p>
      What is up people? {text}. {link}
    </p>
  );
}
export default People;
