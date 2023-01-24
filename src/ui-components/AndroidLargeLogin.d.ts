/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AndroidLargeLoginOverridesProps = {
    AndroidLargeLogin?: PrimitiveOverrideProps<ViewProps>;
    "TitleFrame Component"?: PrimitiveOverrideProps<FlexProps>;
    NavigationFrame?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    "Enter your login information"?: PrimitiveOverrideProps<TextProps>;
    Login?: PrimitiveOverrideProps<TextProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type AndroidLargeLoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AndroidLargeLoginOverridesProps | undefined | null;
}>;
export default function AndroidLargeLogin(props: AndroidLargeLoginProps): React.ReactElement;
