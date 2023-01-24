/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProfileProps } from "./IconProfile";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconsOverridesProps = {
    Icons?: PrimitiveOverrideProps<ViewProps>;
    "Icon/Profile"?: IconProfileProps;
} & EscapeHatchProps;
export declare type IconsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconsOverridesProps | undefined | null;
}>;
export default function Icons(props: IconsProps): React.ReactElement;
