import PropTypes from 'prop-types';

function Container({ id = "", className = "", children }) {
  return (
    <div
      id={id}
      className={`container px-10 ${className}`}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;