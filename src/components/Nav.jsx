import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import LogoSwitcher from "./LogoSwitcher";
import Link from "next/link";

export default function Nav() {
     return (
          <nav className="sticky flex p-5 justify-between items-center md:text-2xl md:mx-5 md:my-2">
               <div className="flex gap-20 text-base">
                    <LogoSwitcher className="md:w-50" />
                    <div className="gap-5 hidden md:flex font-medium">
                         <Link
                              href="/"
                              alt="Recursos"
                              className="flex hover:bg-zinc-200 hover:text-violet-600/70 md:bg-background md:hover:bg-zinc-900 md:hover:text-pink-100 transition-colors bg-slate-50/40 rounded-2xl p-2 items-center"
                         >
                              Recursos
                              <ChevronDown className="size-5"/>
                         </Link>
                         <Link
                              href="/"
                              alt="Recursos"
                              className="flex hover:bg-zinc-200 hover:text-violet-600/70 md:bg-background md:hover:bg-zinc-900 md:hover:text-pink-100 transition-colors bg-slate-50/40 rounded-2xl p-2 items-center"
                         >
                              Como funciona
                              <ChevronDown className="size-5"/>
                         </Link>
                         <Link
                              href="/"
                              alt="Recursos"
                              className="flex hover:bg-zinc-200 hover:text-violet-600/70 md:bg-background md:hover:bg-zinc-900 md:hover:text-pink-100 transition-colors bg-slate-50/40 rounded-2xl p-2 items-center"
                         >
                              Tecnologias
                              <ChevronDown className="size-5"/>
                         </Link>
                    </div>
               </div>
               <div className="flex gap-2 group md:gap-7">
                    <Link
                         href="/"
                         className="flex bg-zinc-900 items-center text-violet-50 px-2 rounded-lg hover:bg-zinc-600 transition-colors duration-300 border border-violet-500 dark:bg-violet-600 md:px-3 md:py-1"
                    >
                         <span className="font-semibold text-sm md:text-2xl">
                              Editor
                         </span>
                         <ChevronRight className="size-4 stroke-4 transition-transform group-hover:translate-x-2 duration-500" />
                    </Link>
                    <Image
                         src="/icons/github.svg"
                         width={35}
                         height={35}
                         alt="meu github"
                         className="dark:invert hover:bg-violet-200 dark:hover:bg-white rounded-full p-1  transition-colors duration-350  "
                    />
                    <span className="sr-only">
                         Meu perfil no GitHub (abre em nova aba)
                    </span>
               </div>
          </nav>
     );
}
