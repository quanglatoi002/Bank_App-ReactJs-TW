const Button = ({ styles }) => (
    <button
        type="button"
        className={` bg-blue-gradient 
        cursor-pointer rounded-[10px] text-primary 
        font-poppins font-medium text-[18px] 
        leading-[27px] uppercase py-[18px] px-[33px] 
        outline-none
    ${styles}`}
    >
        Get Started
    </button>
);

export default Button;
