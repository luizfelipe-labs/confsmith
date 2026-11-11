import { Check, Circle } from "lucide-react";
import Nav from "./Nav";
import RotatingWord from "./RotatingWord";

export default function Hero() {
     return (
          <section className="">
               <Nav />
               <div className="flex flex-col py-10 bg-linear-to-bl gap-5 from-background via-background to-violet-800/10 px-5">
                    <div className="flex items-center gap-2">
                         <Circle className="fill-pink-900 text-pink-900 size-2" />
                         <p className="text-xs font-medium">
                              GERADOR DE CONFIGURAÇÕES
                         </p>
                    </div>
                    <div className="gap-5 flex flex-col">
                         <div className="w-full md:max-w-4xl">
                              <h1 className="text-3xl font-stretch-125% font-semibold md:text-6xl">
                                   Da ideia à configuração, sem decorar{" "}
                                   <RotatingWord className="text-pink-500" />
                              </h1>
                         </div>
                         <div className="text-sm md:text-lg text-balance md:max-w-4xl">
                              <ul className="flex flex-col gap-2">
                                   <li className="flex gap-2 items-center">
                                        <Check className="size-5 text-pink-500 stroke-4 bg-pink-100 dark:bg-slate-700 rounded-full p-1" />{" "}
                                        Roda 100% no navegador
                                   </li>
                                   <li className="flex gap-2 items-center">
                                        <Check className="size-5 text-pink-500 stroke-4 bg-pink-100 dark:bg-slate-700 rounded-full p-1" />{" "}
                                        Sem cadastro, sem servidor
                                   </li>
                                   <li className="flex gap-2 items-center">
                                        <Check className="size-5 text-pink-500 stroke-4 bg-pink-100 dark:bg-slate-700 rounded-full p-1" />{" "}
                                        Tudo local, nada é enviado
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
