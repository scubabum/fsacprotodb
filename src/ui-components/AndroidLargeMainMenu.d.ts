/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { GroupProps } from "./Group";
import { UseraltProps } from "./Useralt";
import { FSACLogoProps } from "./FSACLogo";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AndroidLargeMainMenuOverridesProps = {
    AndroidLargeMainMenu?: PrimitiveOverrideProps<ViewProps>;
    ScubaBackImage?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<IconProps>;
    Button36673022?: PrimitiveOverrideProps<ButtonProps>;
    Button36673038?: PrimitiveOverrideProps<ButtonProps>;
    Group?: GroupProps;
    "FSAC Members and Equipment App"?: PrimitiveOverrideProps<TextProps>;
    User_alt?: UseraltProps;
    FSACLogo?: FSACLogoProps;
} & EscapeHatchProps;
export declare type AndroidLargeMainMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AndroidLargeMainMenuOverridesProps | undefined | null;
}>;
export default function AndroidLargeMainMenu(props: AndroidLargeMainMenuProps): React.ReactElement;
