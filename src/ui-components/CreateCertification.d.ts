/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateCertificationInputValues = {
    qualtype?: string;
    agency?: string;
    certNum?: string;
    certDate?: string;
};
export declare type CreateCertificationValidationValues = {
    qualtype?: ValidationFunction<string>;
    agency?: ValidationFunction<string>;
    certNum?: ValidationFunction<string>;
    certDate?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateCertificationOverridesProps = {
    CreateCertificationGrid?: FormProps<GridProps>;
    qualtype?: FormProps<TextFieldProps>;
    agency?: FormProps<TextFieldProps>;
    certNum?: FormProps<TextFieldProps>;
    certDate?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateCertificationProps = React.PropsWithChildren<{
    overrides?: CreateCertificationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateCertificationInputValues) => CreateCertificationInputValues;
    onSuccess?: (fields: CreateCertificationInputValues) => void;
    onError?: (fields: CreateCertificationInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateCertificationInputValues) => CreateCertificationInputValues;
    onValidate?: CreateCertificationValidationValues;
} & React.CSSProperties>;
export default function CreateCertification(props: CreateCertificationProps): React.ReactElement;
