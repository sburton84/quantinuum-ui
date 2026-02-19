import * as React from "react";
import { ButtonProps } from "src/shadcn/ui/button";
declare const Pagination: ({ className, ...props }: React.ComponentProps<"nav">) => JSX.Element;
declare const PaginationContent: any;
declare const PaginationItem: any;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<{
        ({ className, isActive, size, ...props }: PaginationLinkProps): JSX.Element;
        displayName: string;
    }>): JSX.Element;
    displayName: string;
};
declare const PaginationNext: ({ className, ...props }: React.ComponentProps<{
    ({ className, isActive, size, ...props }: PaginationLinkProps): JSX.Element;
    displayName: string;
}>) => JSX.Element;
declare const PaginationEllipsis: ({ className, ...props }: React.ComponentProps<"span">) => JSX.Element;
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
