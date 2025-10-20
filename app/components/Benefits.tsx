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
            logo: <ImCheckmark/>,
            title: "Многолетний опыт работы",
            description: "Мы работаем в этой сфере с 2016 года и имеем репутацию надёжного партнёра"
        },
        {
            logo: <FaMoneyBillWave/>,
            title: "Низкие цены",
            description: "Мы закупаем товары напрямую у производителей в Китае"
        },
        {
            logo: <AiOutlineFileProtect/>,
            title: "Качество товара",
            description: "Мы отвечаем за качество и даём гарантию на товар"
        },
        {
            logo: <FaShippingFast/>,
            title: "Поставка в любую точку",
            description: "Мы поставляем товары по всем регионам Узбекистана"
        },

    ]



    return (
        <div className={"text-center text-primary font-bold md:text-4xl p-12 bg-gray-50"}>
            <h1>Преимущества работать с нами</h1>
            <div className={"grid grid-cols-2 gap-8 md:grid-cols-4"}>
                {
                    benefitCards.map((benefit) => (
                        <div className={"bg-white shadow-md flex flex-col w-4/5 mt-10"} key={benefit.title}>
                            {benefit.logo}
                            <h1 className={"text-xl"}>{benefit.title}</h1>
                            <p className={"text-sm w-3/5"}>{benefit.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Benefits