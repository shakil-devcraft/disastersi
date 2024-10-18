import PropTypes from 'prop-types'; // ES6

const Contianer = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto py-[23px] px-4 md:px-5 lg:px-0 pt-5">
            {children}
        </div>
    );
};

Contianer.propTypes = {
    children: PropTypes.any,
};

export default Contianer;