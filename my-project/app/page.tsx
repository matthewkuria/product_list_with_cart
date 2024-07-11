import Image from "next/image";
// Import the data in the data.json file
import data from "./lib/data.json"
import { Card,CardFooter,
   } from "./ui/components/ui/card";
import { Button } from "./ui/components/ui/button";
export default function Home() {  
  return (
    <main className="p-12 w-full">
      <h1 className="font-bold my-5 text-3xl">Desserts</h1>
      <div className="md:max-w-md lg:max-w-3xl flex flex-col md:flex md:flex-row lg:flex md:flex-wrap gap-10">
        {/* Map through the data from the JSON file and return a  card for each item */}
          {data.map((item) => {
          return (
            <Card className=" border-none w-[320px] md:w-[120px] lg:w-[190px] md:h-[220px] lg:h-[280px] rounded-md basis-1 flex-auto ">
              {/* The image for the desktop design */}
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={200}
                height={150}
                className="rounded-lg flex-none hidden md:hidden lg:block p-1"
              /> 
              {/* The image for the tablet design */}
              <Image
                src={item.image.tablet}
                alt={item.name}
                width={350}
                height={150}
                className="rounded-md flex-none hidden md:block lg:hidden"
              />
              {/* The image for the mobile design */}
              <Image
                src={item.image.mobile}
                alt={item.name}
                width={350}
                height={150}
                className="rounded-md flex-none block md:hidden lg:hidden"
              />
              <CardFooter className="flex flex-col items-start text-left mt-2  px-1 font-bold ">
                <p className="font-normal text-rose-400">{ item.category}</p>
                <p className="text-[16px]">{ item.name}</p>
                <p className=" text-red">${ item.price}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  );
}
