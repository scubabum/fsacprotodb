/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemberCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    membershipStatus?: string;
    membershipDate?: string;
    membershipValid?: boolean;
    isExec?: boolean;
    memberEmail?: string;
    memberPhoneNumber?: string;
};
export declare type MemberCreateFormValidationValues = {
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
export declare type MemberCreateFormOverridesProps = {
    MemberCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    membershipStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    membershipDate?: PrimitiveOverrideProps<TextFieldProps>;
    membershipValid?: PrimitiveOverrideProps<SwitchFieldProps>;
    isExec?: PrimitiveOverrideProps<SwitchFieldProps>;
    memberEmail?: PrimitiveOverrideProps<TextFieldProps>;
    memberPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberCreateFormProps = React.PropsWithChildren<{
    overrides?: MemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onSuccess?: (fields: MemberCreateFormInputValues) => void;
    onError?: (fields: MemberCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onValidate?: MemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemberCreateForm(props: MemberCreateFormProps): React.ReactElement;
