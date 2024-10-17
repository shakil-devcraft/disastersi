import PropTypes from 'prop-types'; // ES6

const Button = ({btnText}) => {

    return (
        <>
           <button className={`py-[12px] px-4 rounded-lg text-[12px] text-t-secondary bg-white hover:text-white hover:bg-primary transition-colors duration-300`}>{btnText}</button> 
        </>
    );
};

Button.propTypes = {
    btnText: PropTypes.any.isRequired,
};

export default Button;