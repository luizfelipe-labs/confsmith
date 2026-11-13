import { Circle, Folder } from "lucide-react";
import TimeStamp from "./TimeStamp";

export default function TerminalWindow({className = " "}) {
     return (
          <>
               <div className={`bg-slate-950 max-w-86 mx-auto rounded-xl overflow-hidden ${className}`}>
                    <div className="bg-zinc-700 w-full flex items-center ">
                         <div className="gap-2 flex p-2">
                              <Circle className="fill-red-400 size-3 stroke-0" />
                              <Circle className="fill-amber-400 size-3 stroke-0" />
                              <Circle className="fill-green-500 size-3 stroke-0" />
                         </div>
                         <span className="flex mx-auto text-xs text-slate-300 items-center gap-1 font-semibold">
                              <Folder className="size-4 fill-sky-400 stroke-0" />
                              portage — zsh — 80x24
                         </span>
                         <div className="gap-2 flex p-2 invisible">
                              <Circle className="fill-red-400 size-3 stroke-0" />
                              <Circle className="fill-amber-400 size-3 stroke-0" />
                              <Circle className="fill-green-500 size-3 stroke-0" />
                         </div>
                    </div>
                    <div className="text-slate-50 flex flex-col text-10 text-[0.6875rem] font-mono p-2">
                         <span>Last login: <TimeStamp /> on console</span>
                         <span>guest@Mac /etc/portage % cat make.conf</span>
                         
                    </div>
               </div>
          </>
     );
}
