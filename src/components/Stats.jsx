import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat, index) => (
            <div key={index} className={`flex flex-1 flex-row m-3 start `}>
                <div className="flex items-center">
                    <h4
                        className={`font-poppins font-semibold xs:text-[40px] text-[30px    ] xs:leading-[52px] text-white leading-[42px]`}
                    >
                        {stat.value}
                    </h4>
                    <p
                        className={`font-poppins font-normal uppercase xs:text-[20px] text-[15px] xs:leading-[27px] leading-[21px] ml-3
                        text-gradient `}
                    >
                        {stat.title}
                    </p>
                </div>
            </div>
        ))}
    </section>
);

export default Stats;
