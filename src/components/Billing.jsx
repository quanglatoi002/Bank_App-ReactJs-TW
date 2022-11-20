import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={`layout.sectionImgReverse flex-[70%]`}>
            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
        <div className="flex flex-[64%] flex-col justify-center items-start font-poppins font-normal md:ml-10 ml-0 md:mt-10 mt-0">
            <h1 className="text-white font-semibold text-[54px] leading-[77px] md:mb-[36px] mb-8 ">
                Easily control your billing & invoicing.
            </h1>
            <p
                className="text-dimWhite 
            text-[18px] leading-[29px] 
            md:mb-[66px] mb-5 "
            >
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
                aliporttitor integer platea placerat.
            </p>
            <div className="flex w-full justify-between md:justify-start sm:gap-x-[43px] flex-wrap">
                <img
                    src={apple}
                    alt="google_play"
                    className="sm:w-[128.86px]
                     w-[40%]
                    sm:h-[42.05px] h-[50%] object-contain sm:mr-5 cursor-pointer mb-4 sm:mb-0"
                />
                <img
                    src={google}
                    alt="google_play"
                    className="sm:w-[144.17px]
                     w-[40%] 
                    sm:h-[43.08px] h-[50%]
                     object-contain 
                    cursor-pointer"
                />
            </div>
        </div>
    </section>
);

export default Billing;
