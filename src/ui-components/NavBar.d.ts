/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, SearchFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    NavItems?: PrimitiveOverrideProps<FlexProps>;
    "Main Page"?: PrimitiveOverrideProps<TextProps>;
    "View Members"?: PrimitiveOverrideProps<TextProps>;
    "Add Member"?: PrimitiveOverrideProps<TextProps>;
    "View Equipment"?: PrimitiveOverrideProps<TextProps>;
    "Add Equipment"?: PrimitiveOverrideProps<TextProps>;
    SearchandAccountProfile?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
