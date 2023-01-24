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
export declare type EquipmentCreateFormInputValues = {
    brand?: string;
    model?: string;
    serialNumber?: string;
    assetNumber?: string;
    maintenanceStatus?: string;
    lastMaintenanceDate?: string;
    tankVisual?: string;
    tankHydro?: string;
    equipmentStatusNotes?: string;
};
export declare type EquipmentCreateFormValidationValues = {
    brand?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    serialNumber?: ValidationFunction<string>;
    assetNumber?: ValidationFunction<string>;
    maintenanceStatus?: ValidationFunction<string>;
    lastMaintenanceDate?: ValidationFunction<string>;
    tankVisual?: ValidationFunction<string>;
    tankHydro?: ValidationFunction<string>;
    equipmentStatusNotes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentCreateFormOverridesProps = {
    EquipmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    serialNumber?: PrimitiveOverrideProps<TextFieldProps>;
    assetNumber?: PrimitiveOverrideProps<TextFieldProps>;
    maintenanceStatus?: PrimitiveOverrideProps<TextFieldProps>;
    lastMaintenanceDate?: PrimitiveOverrideProps<TextFieldProps>;
    tankVisual?: PrimitiveOverrideProps<TextFieldProps>;
    tankHydro?: PrimitiveOverrideProps<TextFieldProps>;
    equipmentStatusNotes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentCreateFormInputValues) => EquipmentCreateFormInputValues;
    onSuccess?: (fields: EquipmentCreateFormInputValues) => void;
    onError?: (fields: EquipmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentCreateFormInputValues) => EquipmentCreateFormInputValues;
    onValidate?: EquipmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentCreateForm(props: EquipmentCreateFormProps): React.ReactElement;
