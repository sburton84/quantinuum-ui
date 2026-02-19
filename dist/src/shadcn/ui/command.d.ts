import { type DialogProps } from "@radix-ui/react-dialog";
declare const Command: any;
declare const CommandDialog: ({ children, ...props }: DialogProps) => JSX.Element;
declare const CommandInput: any;
declare const CommandList: any;
declare const CommandEmpty: any;
declare const CommandGroup: any;
declare const CommandSeparator: any;
declare const CommandItem: any;
declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX.Element;
    displayName: string;
};
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut };
