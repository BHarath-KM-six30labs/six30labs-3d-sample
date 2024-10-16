import PropTypes from 'prop-types';

function Wrapper(props) {
  return (
    <div className="w-full ">
      {props.children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;

