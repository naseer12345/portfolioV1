import { CardBody, CardContainer, CardItem  } from "../components/ui/3d-card"
import myimg from './test.jpg';
import Image from "next/image";


export default function ProjectCard(){
    return(
       
<CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Project 1
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          What i have learned Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Tempore, veniam! Voluptatibus expedita reprehenderit enim iusto alias, veritatis 
             repellat eum, velit quos 
            ipsum, dignissimos quis perferendis vero cum corporis minima nulla!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={myimg}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live demo
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

     
        
      
     

    )
}