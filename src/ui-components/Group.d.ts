/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupOverridesProps = {
    Group?: PrimitiveOverrideProps<ViewProps>;
    Group36663883?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type GroupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GroupOverridesProps | undefined | null;
}>;
export default function Group(props: GroupProps): React.ReactElement;
