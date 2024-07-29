import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        success: "bg-emerald-100",
      },
      size: {
        default: "p-2",
        large: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const IconVariants = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      success: "text-emerald-700",
    },
    iconSize: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof IconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({
  icon: Icon,
  variant,
  size,
  iconSize,
}: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(IconVariants({ variant, iconSize }))} />
    </div>
  );
};
