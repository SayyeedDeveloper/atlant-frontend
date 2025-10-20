import Carousel from "@/app/components/Carousel";
import Benefits from "@/app/components/Benefits";

export default function Home() {
  return (
      <div className={"mt-18 lg:mt-34"}>
          <div>
              <Carousel/>
              <Benefits/>
          </div>
      </div>
  );
}
