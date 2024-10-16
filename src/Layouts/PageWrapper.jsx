import PropTypes from 'prop-types';

function PageWrapper(props) {
  return (
    <div className="px-[69px] mobiles:px-[20px]">
      {props.children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper