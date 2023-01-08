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
export declare type EquipmentTypeUpdateFormInputValues = {
    equipmentType?: string;
};
export declare type EquipmentTypeUpdateFormValidationValues = {
    equipmentType?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentTypeUpdateFormOverridesProps = {
    EquipmentTypeUpdateFormGrid?: FormProps<GridProps>;
    equipmentType?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipmentType?: EquipmentType;
    onSubmit?: (fields: EquipmentTypeUpdateFormInputValues) => EquipmentTypeUpdateFormInputValues;
    onSuccess?: (fields: EquipmentTypeUpdateFormInputValues) => void;
    onError?: (fields: EquipmentTypeUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EquipmentTypeUpdateFormInputValues) => EquipmentTypeUpdateFormInputValues;
    onValidate?: EquipmentTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentTypeUpdateForm(props: EquipmentTypeUpdateFormProps): React.ReactElement;
