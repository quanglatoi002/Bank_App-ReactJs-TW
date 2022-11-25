import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
    <div
        className="flex flex-col flex-1 justify-between
         px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 
         my-5 feedback-card"
    >
        <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">{content}</p>

        <div className="flex mt-auto md:flex-row flex-col gap-x-[16px]">
            <img src={img} alt={name} className="rounded-full w-[48px] h-[48px]" />
            <div className="flex flex-col justify-center">
                <h4 className="font-poppins font-normal md:text-[20px] text-[16px] leading-[32px] text-white">
                    {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
            </div>
        </div>
    </div>
);

export default FeedbackCard;
