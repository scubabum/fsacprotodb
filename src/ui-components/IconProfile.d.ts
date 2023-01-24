/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconProfileOverridesProps = {
    IconProfile?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4163"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4164"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type IconProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconProfileOverridesProps | undefined | null;
}>;
export default function IconProfile(props: IconProfileProps): React.ReactElement;
