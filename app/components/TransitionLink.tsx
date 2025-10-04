"use client";
import {usePathname, useRouter} from "next/navigation";
import {animatePageOut} from "@/app/utils/animation";
import GsapMagnetic from "@/app/components/GsapMagnetic";

interface Props {
  href: string;
  label: string;
}
const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <GsapMagnetic>
      <button
        className="text-xl text-neutral-900 hover:text-neutral-500"
        onClick={handleClick}
        style={{ width: 50, height: 50 }}
      >
        {label}
      </button>
    </GsapMagnetic>
  );
};

export default TransitionLink;