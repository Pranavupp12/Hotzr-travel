// components/ButtonGhostIcon.tsx
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonGhostIcon({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`size-8 ${isActive ? "bg-primary/10 text-primary" : ""}`}
      aria-label="Sign Up"
      onClick={onClick}
    >
      <UserPlus />
    </Button>
  );
}
