/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
};
export declare type MemberCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    membershipStatus?: ValidationFunction<string>;
    membershipDate?: ValidationFunction<string>;
    membershipValid?: ValidationFunction<boolean>;
    isExec?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberCreateFormOverridesProps = {
    MemberCreateFormGrid?: FormProps<GridProps>;
    firstName?: FormProps<TextFieldProps>;
    lastName?: FormProps<TextFieldProps>;
    membershipStatus?: FormProps<SelectFieldProps>;
    membershipDate?: FormProps<TextFieldProps>;
    membershipValid?: FormProps<SwitchFieldProps>;
    isExec?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MemberCreateFormProps = React.PropsWithChildren<{
    overrides?: MemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onSuccess?: (fields: MemberCreateFormInputValues) => void;
    onError?: (fields: MemberCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onValidate?: MemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemberCreateForm(props: MemberCreateFormProps): React.ReactElement;
