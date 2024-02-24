import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";
import FeaturedProducts from "~/components/sections/featuredProducts";
import MaximiumCapacity from "~/components/sections/maximiumCapacity";


export const meta: MetaFunction = () => {
  return [
    { title: "CapacityX" },

  ];
};

export default function Index() {
  return (
    <div className="parent">
      <Navbar/>
      <MaximiumCapacity maximiumCapacity=" " respMaxCapacity=" "/>
<FeaturedProducts/>
    </div>
  );
}
