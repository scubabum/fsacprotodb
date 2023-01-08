/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEquipmentInputValues = {
    EquipmentType?: string;
    brand?: string;
    model?: string;
    serialNumber?: string;
    assetNumber?: string;
    maintenanceStatus?: string;
    lastMaintenanceDate?: string;
    tankVisual?: string;
    tankHydro?: string;
    equipmentEquipmentTypeId?: string;
};
export declare type CreateEquipmentValidationValues = {
    EquipmentType?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    serialNumber?: ValidationFunction<string>;
    assetNumber?: ValidationFunction<string>;
    maintenanceStatus?: ValidationFunction<string>;
    lastMaintenanceDate?: ValidationFunction<string>;
    tankVisual?: ValidationFunction<string>;
    tankHydro?: ValidationFunction<string>;
    equipmentEquipmentTypeId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEquipmentOverridesProps = {
    CreateEquipmentGrid?: FormProps<GridProps>;
    EquipmentType?: FormProps<SelectFieldProps>;
    brand?: FormProps<TextFieldProps>;
    model?: FormProps<TextFieldProps>;
    serialNumber?: FormProps<TextFieldProps>;
    assetNumber?: FormProps<TextFieldProps>;
    maintenanceStatus?: FormProps<TextFieldProps>;
    lastMaintenanceDate?: FormProps<TextFieldProps>;
    tankVisual?: FormProps<TextFieldProps>;
    tankHydro?: FormProps<TextFieldProps>;
    equipmentEquipmentTypeId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEquipmentProps = React.PropsWithChildren<{
    overrides?: CreateEquipmentOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateEquipmentInputValues) => CreateEquipmentInputValues;
    onSuccess?: (fields: CreateEquipmentInputValues) => void;
    onError?: (fields: CreateEquipmentInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateEquipmentInputValues) => CreateEquipmentInputValues;
    onValidate?: CreateEquipmentValidationValues;
} & React.CSSProperties>;
export default function CreateEquipment(props: CreateEquipmentProps): React.ReactElement;
