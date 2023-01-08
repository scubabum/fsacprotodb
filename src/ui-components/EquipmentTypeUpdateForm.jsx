/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { EquipmentType } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EquipmentTypeUpdateForm(props) {
  const {
    id,
    equipmentType,
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
    equipmentType: undefined,
  };
  const [equipmentType, setEquipmentType] = React.useState(
    initialValues.equipmentType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...equipmentTypeRecord };
    setEquipmentType(cleanValues.equipmentType);
    setErrors({});
  };
  const [equipmentTypeRecord, setEquipmentTypeRecord] =
    React.useState(equipmentType);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(EquipmentType, id)
        : equipmentType;
      setEquipmentTypeRecord(record);
    };
    queryData();
  }, [id, equipmentType]);
  React.useEffect(resetStateValues, [equipmentTypeRecord]);
  const validations = {
    equipmentType: [{ type: "Required" }],
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
          equipmentType,
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
          await DataStore.save(
            EquipmentType.copyOf(equipmentTypeRecord, (updated) => {
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
      {...rest}
      {...getOverrideProps(overrides, "EquipmentTypeUpdateForm")}
    >
      <TextField
        label="Equipment type"
        isRequired={true}
        isReadOnly={false}
        defaultValue={equipmentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equipmentType: value,
            };
            const result = onChange(modelFields);
            value = result?.equipmentType ?? value;
          }
          if (errors.equipmentType?.hasError) {
            runValidationTasks("equipmentType", value);
          }
          setEquipmentType(value);
        }}
        onBlur={() => runValidationTasks("equipmentType", equipmentType)}
        errorMessage={errors.equipmentType?.errorMessage}
        hasError={errors.equipmentType?.hasError}
        {...getOverrideProps(overrides, "equipmentType")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
