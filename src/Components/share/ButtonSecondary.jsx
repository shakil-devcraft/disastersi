import PropTypes from 'prop-types'; // ES6

const ButtonSecondary = ({text="Cypher AI", icon, onClick, className}) => {

    return (
        <>
           <button
            onClick={onClick}
            className={`py-[12px] px-[25px] rounded-lg text-[12px] font-bold text-white bg-primary hover:text-t-secondary hover:bg-white transition-colors duration-300 ${className}`}
            >
            {/* Display the icon using the provided className for the Boxicon */}
            {icon && <i className={`mr-2 ${icon}`}></i>} 
            {text}
            </button>
        </>
    );
};

ButtonSecondary.propTypes = {
    text: PropTypes.string,    
    icon: PropTypes.string, 
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default ButtonSecondary;