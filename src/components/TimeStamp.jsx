"use client";

import { useSyncExternalStore } from "react";

let stamp;

const getServerSnapshot = () => "";
const getSnapshot = () => {
     stamp ??= new Date()
          .toLocaleString("en-US", {
               weekday: "short",
               month: "short",
               day: "numeric",
               hour: "2-digit",
               minute: "2-digit",
               second: "2-digit",
               hourCycle: "h24",
          })
          .replaceAll(",", "");
     return stamp;
};
const subscribe = () => () => {};

export default function TimeStamp() {
     const hora = useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot,
     );
     return <span>{hora}</span>;
}
