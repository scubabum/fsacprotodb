/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Equipment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentUpdateFormInputValues = {
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
export declare type EquipmentUpdateFormValidationValues = {
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
export declare type EquipmentUpdateFormOverridesProps = {
    EquipmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EquipmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipment?: Equipment;
    onSubmit?: (fields: EquipmentUpdateFormInputValues) => EquipmentUpdateFormInputValues;
    onSuccess?: (fields: EquipmentUpdateFormInputValues) => void;
    onError?: (fields: EquipmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentUpdateFormInputValues) => EquipmentUpdateFormInputValues;
    onValidate?: EquipmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentUpdateForm(props: EquipmentUpdateFormProps): React.ReactElement;
