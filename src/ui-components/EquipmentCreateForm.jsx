/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Equipment } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EquipmentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    EquipmentType: {},
    brand: undefined,
    model: undefined,
    serialNumber: undefined,
    assetNumber: undefined,
    maintenanceStatus: undefined,
    lastMaintenanceDate: undefined,
    tankVisual: undefined,
    tankHydro: undefined,
    equipmentEquipmentTypeId: undefined,
  };
  const [EquipmentType, setEquipmentType] = React.useState(
    initialValues.EquipmentType
  );
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [model, setModel] = React.useState(initialValues.model);
  const [serialNumber, setSerialNumber] = React.useState(
    initialValues.serialNumber
  );
  const [assetNumber, setAssetNumber] = React.useState(
    initialValues.assetNumber
  );
  const [maintenanceStatus, setMaintenanceStatus] = React.useState(
    initialValues.maintenanceStatus
  );
  const [lastMaintenanceDate, setLastMaintenanceDate] = React.useState(
    initialValues.lastMaintenanceDate
  );
  const [tankVisual, setTankVisual] = React.useState(initialValues.tankVisual);
  const [tankHydro, setTankHydro] = React.useState(initialValues.tankHydro);
  const [equipmentEquipmentTypeId, setEquipmentEquipmentTypeId] =
    React.useState(initialValues.equipmentEquipmentTypeId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEquipmentType(initialValues.EquipmentType);
    setBrand(initialValues.brand);
    setModel(initialValues.model);
    setSerialNumber(initialValues.serialNumber);
    setAssetNumber(initialValues.assetNumber);
    setMaintenanceStatus(initialValues.maintenanceStatus);
    setLastMaintenanceDate(initialValues.lastMaintenanceDate);
    setTankVisual(initialValues.tankVisual);
    setTankHydro(initialValues.tankHydro);
    setEquipmentEquipmentTypeId(initialValues.equipmentEquipmentTypeId);
    setErrors({});
  };
  const validations = {
    EquipmentType: [],
    brand: [],
    model: [],
    serialNumber: [],
    assetNumber: [],
    maintenanceStatus: [],
    lastMaintenanceDate: [],
    tankVisual: [],
    tankHydro: [],
    equipmentEquipmentTypeId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          EquipmentType,
          brand,
          model,
          serialNumber,
          assetNumber,
          maintenanceStatus,
          lastMaintenanceDate,
          tankVisual,
          tankHydro,
          equipmentEquipmentTypeId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Equipment(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "EquipmentCreateForm")}
    >
      <SelectField
        label="Equipment type"
        placeholder="Please select an option"
        isDisabled={false}
        value={EquipmentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType: value,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.EquipmentType ?? value;
          }
          if (errors.EquipmentType?.hasError) {
            runValidationTasks("EquipmentType", value);
          }
          setEquipmentType(value);
        }}
        onBlur={() => runValidationTasks("EquipmentType", EquipmentType)}
        errorMessage={errors.EquipmentType?.errorMessage}
        hasError={errors.EquipmentType?.hasError}
        {...getOverrideProps(overrides, "EquipmentType")}
      ></SelectField>
      <TextField
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand: value,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model: value,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Serial number"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber: value,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.serialNumber ?? value;
          }
          if (errors.serialNumber?.hasError) {
            runValidationTasks("serialNumber", value);
          }
          setSerialNumber(value);
        }}
        onBlur={() => runValidationTasks("serialNumber", serialNumber)}
        errorMessage={errors.serialNumber?.errorMessage}
        hasError={errors.serialNumber?.hasError}
        {...getOverrideProps(overrides, "serialNumber")}
      ></TextField>
      <TextField
        label="Asset number"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber: value,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.assetNumber ?? value;
          }
          if (errors.assetNumber?.hasError) {
            runValidationTasks("assetNumber", value);
          }
          setAssetNumber(value);
        }}
        onBlur={() => runValidationTasks("assetNumber", assetNumber)}
        errorMessage={errors.assetNumber?.errorMessage}
        hasError={errors.assetNumber?.hasError}
        {...getOverrideProps(overrides, "assetNumber")}
      ></TextField>
      <TextField
        label="Maintenance status"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus: value,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.maintenanceStatus ?? value;
          }
          if (errors.maintenanceStatus?.hasError) {
            runValidationTasks("maintenanceStatus", value);
          }
          setMaintenanceStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("maintenanceStatus", maintenanceStatus)
        }
        errorMessage={errors.maintenanceStatus?.errorMessage}
        hasError={errors.maintenanceStatus?.hasError}
        {...getOverrideProps(overrides, "maintenanceStatus")}
      ></TextField>
      <TextField
        label="Last maintenance date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate: value,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.lastMaintenanceDate ?? value;
          }
          if (errors.lastMaintenanceDate?.hasError) {
            runValidationTasks("lastMaintenanceDate", value);
          }
          setLastMaintenanceDate(value);
        }}
        onBlur={() =>
          runValidationTasks("lastMaintenanceDate", lastMaintenanceDate)
        }
        errorMessage={errors.lastMaintenanceDate?.errorMessage}
        hasError={errors.lastMaintenanceDate?.hasError}
        {...getOverrideProps(overrides, "lastMaintenanceDate")}
      ></TextField>
      <TextField
        label="Tank visual"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual: value,
              tankHydro,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.tankVisual ?? value;
          }
          if (errors.tankVisual?.hasError) {
            runValidationTasks("tankVisual", value);
          }
          setTankVisual(value);
        }}
        onBlur={() => runValidationTasks("tankVisual", tankVisual)}
        errorMessage={errors.tankVisual?.errorMessage}
        hasError={errors.tankVisual?.hasError}
        {...getOverrideProps(overrides, "tankVisual")}
      ></TextField>
      <TextField
        label="Tank hydro"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro: value,
              equipmentEquipmentTypeId,
            };
            const result = onChange(modelFields);
            value = result?.tankHydro ?? value;
          }
          if (errors.tankHydro?.hasError) {
            runValidationTasks("tankHydro", value);
          }
          setTankHydro(value);
        }}
        onBlur={() => runValidationTasks("tankHydro", tankHydro)}
        errorMessage={errors.tankHydro?.errorMessage}
        hasError={errors.tankHydro?.hasError}
        {...getOverrideProps(overrides, "tankHydro")}
      ></TextField>
      <TextField
        label="Equipment equipment type id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EquipmentType,
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentEquipmentTypeId: value,
            };
            const result = onChange(modelFields);
            value = result?.equipmentEquipmentTypeId ?? value;
          }
          if (errors.equipmentEquipmentTypeId?.hasError) {
            runValidationTasks("equipmentEquipmentTypeId", value);
          }
          setEquipmentEquipmentTypeId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "equipmentEquipmentTypeId",
            equipmentEquipmentTypeId
          )
        }
        errorMessage={errors.equipmentEquipmentTypeId?.errorMessage}
        hasError={errors.equipmentEquipmentTypeId?.hasError}
        {...getOverrideProps(overrides, "equipmentEquipmentTypeId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
