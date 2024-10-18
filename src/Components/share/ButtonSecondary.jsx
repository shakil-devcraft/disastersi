import PropTypes from 'prop-types'; // ES6

const ButtonSecondary = ({text2, icon2, onClick2, className2}) => {

    console.log(text2, icon2, onClick2, className2);

    return (
        <>
           <button
            onClick={onClick2}
            className={`py-[11px] px-[25px] rounded-lg text-[12px] font-bold text-white bg-primary hover:text-t-secondary hover:bg-white transition-colors duration-300 ${className2}`}
            >
            {/* Display the icon using the provided className for the Boxicon */}
            {icon2 && <i className={`mr-2 ${icon2}`}></i>} 
            {text2}
            </button>
        </>
    );
};

ButtonSecondary.propTypes = {
    text2: PropTypes.string,    
    icon2: PropTypes.string, 
    onClick2: PropTypes.func,
    className2: PropTypes.string,
};

export default ButtonSecondary;