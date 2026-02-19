import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Button } from "src/shadcn/ui/button";
declare function InputGroup({ className, ...props }: React.ComponentProps<"div">): JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): JSX.Element;
declare function InputGroupText({ className, ...props }: React.ComponentProps<"span">): JSX.Element;
declare const InputGroupInput: any;
declare const InputGroupTextarea: any;
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea, };
