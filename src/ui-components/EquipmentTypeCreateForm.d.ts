/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentTypeCreateFormInputValues = {
    equipmentType?: string;
};
export declare type EquipmentTypeCreateFormValidationValues = {
    equipmentType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentTypeCreateFormOverridesProps = {
    EquipmentTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    equipmentType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentTypeCreateFormInputValues) => EquipmentTypeCreateFormInputValues;
    onSuccess?: (fields: EquipmentTypeCreateFormInputValues) => void;
    onError?: (fields: EquipmentTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentTypeCreateFormInputValues) => EquipmentTypeCreateFormInputValues;
    onValidate?: EquipmentTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentTypeCreateForm(props: EquipmentTypeCreateFormProps): React.ReactElement;
