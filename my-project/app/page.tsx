import Image from "next/image";
import data from "./lib/data.json"
import { Card,CardFooter,
   } from "./ui/components/ui/card";
import { Button } from "./ui/components/ui/button";
export default function Home() {  
  return (
    <main className="p-12 w-full">
      <h1 className="font-bold my-5 text-3xl">Desserts</h1>
      <div className="max-w-md flex flex-col md:flex md:flex-row lg:flex md:flex-wrap gap-10 w-full">
          {data.map((item) => {
          return (
            <Card className=" border-none w-[320px] md:w-[120px] lg:w-[120px] md:h-[220px] rounded-md basis-1 flex-auto ">
              {/* The image for the desktop design */}
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={180}
                height={150}
                className="rounded-md flex-none hidden md:hidden lg:block p-1"
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
              <CardFooter className="flex flex-col items-start text-left mt-2 text-[16px] px-1 ">
                <p className=" text-rose-400">{ item.category}</p>
                <p className="font-bold">{ item.name}</p>
                <p className="font-bold text-red">${ item.price}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  );
}
