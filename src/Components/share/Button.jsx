import PropTypes from 'prop-types'; // ES6

const Button = ({ text, icon, onClick, className }) => {

    console.log(text, icon, onClick, className);

    return (
        <button
        onClick={onClick}
        className={`py-[11px] px-4 rounded-lg text-[12px] font-bold text-t-secondary bg-white hover:text-white hover:bg-primary transition-colors duration-300 ${className}`}
        >
        {/* Display the icon using the provided className for the Boxicon */}
        {icon && <i className={`mr-2 ${icon}`}></i>} 
        {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,    
    icon: PropTypes.string, 
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
