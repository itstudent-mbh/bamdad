import Tabs from "@/components/Tabs";
import Image from "next/image";
import items from "@/data/tabs";
import LearniaContent from "@/components/LearniaContent";
import Slider from "@/components/slider/Slider";
import slider from "@/data/slider";

export default function Home() {
  return (
    <main className="w-full font-vazir pt-28 bg-white flex-col justify-center items-center gap-12 inline-flex">
      <section className="w-full min-h-80 mt-20 bg-right bg-[url('/img/Dots.svg')] bg-no-repeat">
        <Tabs items={items} />
      </section>

      <section className="w-full ">
        <div className="mx-auto grid grid-cols-2 gap-4">
          <LearniaContent />
          <Slider slider={slider} />
        </div>
      </section>
    </main>
  );
}
