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
export declare type CreateEquipmentTypeInputValues = {
    equipmentType?: string;
};
export declare type CreateEquipmentTypeValidationValues = {
    equipmentType?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEquipmentTypeOverridesProps = {
    CreateEquipmentTypeGrid?: FormProps<GridProps>;
    equipmentType?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEquipmentTypeProps = React.PropsWithChildren<{
    overrides?: CreateEquipmentTypeOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateEquipmentTypeInputValues) => CreateEquipmentTypeInputValues;
    onSuccess?: (fields: CreateEquipmentTypeInputValues) => void;
    onError?: (fields: CreateEquipmentTypeInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateEquipmentTypeInputValues) => CreateEquipmentTypeInputValues;
    onValidate?: CreateEquipmentTypeValidationValues;
} & React.CSSProperties>;
export default function CreateEquipmentType(props: CreateEquipmentTypeProps): React.ReactElement;
