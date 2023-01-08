/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EquipmentType } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateEquipmentTypeInputValues = {
    equipmentType?: string;
};
export declare type UpdateEquipmentTypeValidationValues = {
    equipmentType?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateEquipmentTypeOverridesProps = {
    UpdateEquipmentTypeGrid?: FormProps<GridProps>;
    equipmentType?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateEquipmentTypeProps = React.PropsWithChildren<{
    overrides?: UpdateEquipmentTypeOverridesProps | undefined | null;
} & {
    id?: string;
    equipmentType?: EquipmentType;
    onSubmit?: (fields: UpdateEquipmentTypeInputValues) => UpdateEquipmentTypeInputValues;
    onSuccess?: (fields: UpdateEquipmentTypeInputValues) => void;
    onError?: (fields: UpdateEquipmentTypeInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateEquipmentTypeInputValues) => UpdateEquipmentTypeInputValues;
    onValidate?: UpdateEquipmentTypeValidationValues;
} & React.CSSProperties>;
export default function UpdateEquipmentType(props: UpdateEquipmentTypeProps): React.ReactElement;
