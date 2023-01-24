/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemberUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    membershipStatus?: string;
    membershipDate?: string;
    membershipValid?: boolean;
    isExec?: boolean;
    memberEmail?: string;
    memberPhoneNumber?: string;
};
export declare type MemberUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    membershipStatus?: ValidationFunction<string>;
    membershipDate?: ValidationFunction<string>;
    membershipValid?: ValidationFunction<boolean>;
    isExec?: ValidationFunction<boolean>;
    memberEmail?: ValidationFunction<string>;
    memberPhoneNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberUpdateFormOverridesProps = {
    MemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    membershipStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    membershipDate?: PrimitiveOverrideProps<TextFieldProps>;
    membershipValid?: PrimitiveOverrideProps<SwitchFieldProps>;
    isExec?: PrimitiveOverrideProps<SwitchFieldProps>;
    memberEmail?: PrimitiveOverrideProps<TextFieldProps>;
    memberPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: MemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    member?: Member;
    onSubmit?: (fields: MemberUpdateFormInputValues) => MemberUpdateFormInputValues;
    onSuccess?: (fields: MemberUpdateFormInputValues) => void;
    onError?: (fields: MemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberUpdateFormInputValues) => MemberUpdateFormInputValues;
    onValidate?: MemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MemberUpdateForm(props: MemberUpdateFormProps): React.ReactElement;
