/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EquipmentType } from "../models";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentTypeUpdateFormOverridesProps = {
    EquipmentTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    equipmentType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipmentType?: EquipmentType;
    onSubmit?: (fields: EquipmentTypeUpdateFormInputValues) => EquipmentTypeUpdateFormInputValues;
    onSuccess?: (fields: EquipmentTypeUpdateFormInputValues) => void;
    onError?: (fields: EquipmentTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentTypeUpdateFormInputValues) => EquipmentTypeUpdateFormInputValues;
    onValidate?: EquipmentTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentTypeUpdateForm(props: EquipmentTypeUpdateFormProps): React.ReactElement;
