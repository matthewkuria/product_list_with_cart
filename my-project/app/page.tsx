import Image from "next/image";
import data from "./lib/data.json"
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "./ui/components/ui/card";
import { Button } from "./ui/components/ui/button";
export default function Home() {  
  return (
    <main className="p-12 w-full">
      <h1 className="font-bold my-5 text-3xl">Desserts</h1>
      <div className="max-w-md flex flex-col md:flex md:flex-row md:flex-wrap gap-8">
          {data.map((item) => {
          return (
            <Card className=" w-[320px] md:w-[120px] md:h-[220px] rounded-md basis-1 flex-auto">
              {/* The image for the desktop design */}
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={250}
                height={150}
                className="rounded-md flex-none hidden md:block"
              /> 
              {/* The image for the tablet design */}
              
              {/* The image for the mobile design */}
              <Image
                src={item.image.mobile}
                alt={item.name}
                width={350}
                height={150}
                className="rounded-md flex-none block md:hidden"
              />
              <CardFooter className="flex flex-col items-start text-left mt-2 text-xs ">
                <p>{ item.category}</p>
                <p>{ item.name}</p>
                <p className="font-bold">${ item.price}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  );
}
