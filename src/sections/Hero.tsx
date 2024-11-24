import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa";
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";


export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} 
                    height={240}
                    width={240}
                    
                    alt="Design" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} 
                    height={240}
                    width={240}
                    alt="Design" />
                </div>
                <div className="absolute left-48 top-80 hidden lg:block">
                    <Pointer
                    name="Tayyab"
                    />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer
                    name="Ali"
                    color="red"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        🌳 Planted 7.5M tree around world
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 mx-auto lg:max-w-3xl ">
                    Design tools shouldn't slow you down. Layers combine
                    powerful features with an intuiative interface that keeps
                    you in creative flow.
                </p>
                <form  className="flex border border-white/15 rounded-full p-2  mt-8  max-w-lg mx-auto">


                    <input 
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-transparent px-4 outline-none md:flex-1 " />
                    <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap"
                    size="sm"
                    
                    ><FaArrowRight/></Button>
                </form>
            </div>
        </section>
    );
}
