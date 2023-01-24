/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Equipment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EquipmentUpdateForm(props) {
  const {
    id: idProp,
    equipment,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    brand: "",
    model: "",
    serialNumber: "",
    assetNumber: "",
    maintenanceStatus: "",
    lastMaintenanceDate: "",
    tankVisual: "",
    tankHydro: "",
    equipmentStatusNotes: "",
  };
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
  const [equipmentStatusNotes, setEquipmentStatusNotes] = React.useState(
    initialValues.equipmentStatusNotes
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equipmentRecord
      ? { ...initialValues, ...equipmentRecord }
      : initialValues;
    setBrand(cleanValues.brand);
    setModel(cleanValues.model);
    setSerialNumber(cleanValues.serialNumber);
    setAssetNumber(cleanValues.assetNumber);
    setMaintenanceStatus(cleanValues.maintenanceStatus);
    setLastMaintenanceDate(cleanValues.lastMaintenanceDate);
    setTankVisual(cleanValues.tankVisual);
    setTankHydro(cleanValues.tankHydro);
    setEquipmentStatusNotes(cleanValues.equipmentStatusNotes);
    setErrors({});
  };
  const [equipmentRecord, setEquipmentRecord] = React.useState(equipment);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Equipment, idProp)
        : equipment;
      setEquipmentRecord(record);
    };
    queryData();
  }, [idProp, equipment]);
  React.useEffect(resetStateValues, [equipmentRecord]);
  const validations = {
    brand: [],
    model: [],
    serialNumber: [],
    assetNumber: [],
    maintenanceStatus: [],
    lastMaintenanceDate: [],
    tankVisual: [],
    tankHydro: [],
    equipmentStatusNotes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
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
          brand,
          model,
          serialNumber,
          assetNumber,
          maintenanceStatus,
          lastMaintenanceDate,
          tankVisual,
          tankHydro,
          equipmentStatusNotes,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Equipment.copyOf(equipmentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EquipmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand: value,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model: value,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={serialNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber: value,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={assetNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber: value,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={maintenanceStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus: value,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={lastMaintenanceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate: value,
              tankVisual,
              tankHydro,
              equipmentStatusNotes,
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
        value={tankVisual}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual: value,
              tankHydro,
              equipmentStatusNotes,
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
        value={tankHydro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro: value,
              equipmentStatusNotes,
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
        label="Equipment status notes"
        isRequired={false}
        isReadOnly={false}
        value={equipmentStatusNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              model,
              serialNumber,
              assetNumber,
              maintenanceStatus,
              lastMaintenanceDate,
              tankVisual,
              tankHydro,
              equipmentStatusNotes: value,
            };
            const result = onChange(modelFields);
            value = result?.equipmentStatusNotes ?? value;
          }
          if (errors.equipmentStatusNotes?.hasError) {
            runValidationTasks("equipmentStatusNotes", value);
          }
          setEquipmentStatusNotes(value);
        }}
        onBlur={() =>
          runValidationTasks("equipmentStatusNotes", equipmentStatusNotes)
        }
        errorMessage={errors.equipmentStatusNotes?.errorMessage}
        hasError={errors.equipmentStatusNotes?.hasError}
        {...getOverrideProps(overrides, "equipmentStatusNotes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || equipment)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || equipment) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
