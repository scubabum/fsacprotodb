/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewCardProps } from "./ReviewCard";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberCardOverridesProps = {
    MemberCard?: PrimitiveOverrideProps<FlexProps>;
    MemberCard36522734?: ReviewCardProps;
} & EscapeHatchProps;
export declare type MemberCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MemberCardOverridesProps | undefined | null;
}>;
export default function MemberCard(props: MemberCardProps): React.ReactElement;
