const Warning = (props) => {
  const { warning } = props;
  const warningValue = 'DO NOT DIVIDE BY 0! AGAIN, DO NOT DIVIDE BY 0!!!';

  let classList = 'warning';
  if (warning) {
    classList = 'warning warning--active';
  }

  return (
    <div className={classList}>
      <i className="fas fa-radiation"></i>
      <p>{warningValue}</p>
    </div>
  );
};

export default Warning;
