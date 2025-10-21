import {ReactNode} from "react";
import {ImCheckmark} from "react-icons/im";
import {FaMoneyBillWave, FaShippingFast} from "react-icons/fa";
import {AiOutlineFileProtect} from "react-icons/ai";

const Benefits = () => {

    type BenefitCard = {
        logo: ReactNode;
        title: string;
        description: string;
    }

    const benefitCards:BenefitCard[] = [
        {
            logo: <ImCheckmark className={"w-10 h-10 md:w-18 md:h-18"}/>,
            title: "Многолетний опыт работы",
            description: "Мы работаем в этой сфере с 2016 года и имеем репутацию надёжного партнёра"
        },
        {
            logo: <FaMoneyBillWave className={"w-10 h-10 md:w-18 md:h-18"}/>,
            title: "Низкие цены",
            description: "Мы закупаем товары напрямую у производителей в Китае"
        },
        {
            logo: <AiOutlineFileProtect className={"w-10 h-10 md:w-18 md:h-18"}/>,
            title: "Качество товара",
            description: "Мы отвечаем за качество и даём гарантию на товар"
        },
        {
            logo: <FaShippingFast className={"w-10 h-10 md:w-18 md:h-18"}/>,
            title: "Поставка в любую точку",
            description: "Мы поставляем товары по всем регионам Узбекистана"
        },

    ]



    return (
        <div className={"text-center text-primary font-bold md:text-4xl p-12 bg-gray-50"}>
            <h1 className={"pb-14 text-xl md:text-3xl"}>Преимущества работать с нами</h1>
            <div className={"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full max-w-screen"}>
                {
                    benefitCards.map((benefit) => (
                        <div className={"bg-white shadow-md flex flex-col items-center p-10 rounded-lg hover:shadow-xl justify-items-center"} key={benefit.title}>
                            <span className={"mb-5"}>{benefit.logo}</span>
                            <h1 className={"text-sm md:text-lg mb-5  text-primary"}>{benefit.title}</h1>
                            <p className={"text-xs md:text-sm w-4/5 text-[#66a3e5]"}>{benefit.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Benefits