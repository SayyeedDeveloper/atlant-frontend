import Carousel from "@/app/components/Carousel";
import Benefits from "@/app/components/Benefits";
import Callretail from "@/app/components/Callretail";
import Catalogproduct from "@/app/components/Catalogproduct";


export default function Home() {
  return (
    <div className="mt-18 lg:mt-34">
      <div>
        <Carousel />
        <Benefits />
        <Callretail/>
        <Catalogproduct/>
      </div>
    </div>
  );
}
