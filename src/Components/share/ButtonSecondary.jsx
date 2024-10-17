import PropTypes from 'prop-types'; // ES6

const ButtonSecondary = ({btnText}) => {

    return (
        <>
           <button className={`py-[12px] px-[25px] rounded-lg text-[12px] text-white bg-primary hover:text-t-secondary hover:bg-white transition-colors duration-300`}>{btnText}</button> 
        </>
    );
};

ButtonSecondary.propTypes = {
    btnText: PropTypes.any.isRequired,
};

export default ButtonSecondary;