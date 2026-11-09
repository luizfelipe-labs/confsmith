import Image from "next/image";

export default function LogoSwitcher({ className = "" }) {
     return (
          <>
               <Image
                    src="/icons/logo-light.svg"
                    width={130}
                    height={20}
                    alt="ConfSmith"
                    className={`dark:hidden h-auto ${className}`}
               />
               <Image
                    src="/icons/logo-dark.svg"
                    width={130}
                    height={20}
                    alt="ConfSmith"
                    className={`hidden dark:block h-auto ${className}`}
               />
          </>
     );
}
