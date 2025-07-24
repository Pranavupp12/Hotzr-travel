
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.08}}>
      {children}
    </ReactLenis>
  );
}
