import PropTypes from "prop-types";


// {img, title, subTitle, amount}
const Card = ({item}) => {
    const {img, title, subTitle, amount} = item;

    return (
        <section>
            {
                <div className="flex flex-col gap-5">
                    <div>
                        <img className="w-full h-[253px] rounded-xl" src={img} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold text-base text-t-primary leading-[30px]">{title}</h3>
                        <span className="text-[14px] text-t-secondary font-normal leading-[30px]">{subTitle}</span>
                        <h2 className="font-bold text-base text-t-primary leading-[30px]">{amount}</h2>
                    </div>
                </div>
            }
        </section>
    );
};

Card.propTypes = {
    item: PropTypes.any.isRequired,
};

export default Card;