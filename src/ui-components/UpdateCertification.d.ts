/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Certifications } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateCertificationInputValues = {
    qualtype?: string;
    agency?: string;
    certNum?: string;
    certDate?: string;
};
export declare type UpdateCertificationValidationValues = {
    qualtype?: ValidationFunction<string>;
    agency?: ValidationFunction<string>;
    certNum?: ValidationFunction<string>;
    certDate?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateCertificationOverridesProps = {
    UpdateCertificationGrid?: FormProps<GridProps>;
    qualtype?: FormProps<TextFieldProps>;
    agency?: FormProps<SelectFieldProps>;
    certNum?: FormProps<TextFieldProps>;
    certDate?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateCertificationProps = React.PropsWithChildren<{
    overrides?: UpdateCertificationOverridesProps | undefined | null;
} & {
    id?: string;
    certifications?: Certifications;
    onSubmit?: (fields: UpdateCertificationInputValues) => UpdateCertificationInputValues;
    onSuccess?: (fields: UpdateCertificationInputValues) => void;
    onError?: (fields: UpdateCertificationInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateCertificationInputValues) => UpdateCertificationInputValues;
    onValidate?: UpdateCertificationValidationValues;
} & React.CSSProperties>;
export default function UpdateCertification(props: UpdateCertificationProps): React.ReactElement;
