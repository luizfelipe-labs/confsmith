import { Circle } from "lucide-react";
import Nav from "./Nav";

export default function Hero() {
     return (
          <section className="">
               <Nav />
               <div className="py-10 bg-linear-to-bl from-violet-600/50 via-background to-violet600/50 px-5">
                    <div className="flex items-center gap-2">
                         <Circle className="fill-pink-900 text-pink-900 size-2" />
                         <p className="text-xs font-medium">
                              GERADOR DE CONFIGURAÇÕES
                         </p>
                    </div>
                    <div>
                         <h1 className="text-2xl font-stretch-125% font-semibold">
                              Da ideia ao arquivo pronto, sem decorar sintaxe.
                         </h1>
                    </div>
               </div>
          </section>
     );
}
