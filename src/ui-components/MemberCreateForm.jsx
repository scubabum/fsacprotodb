/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Member } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MemberCreateForm(props) {
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
    firstName: undefined,
    lastName: undefined,
    membershipStatus: undefined,
    membershipDate: undefined,
    membershipValid: false,
    isExec: false,
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [membershipStatus, setMembershipStatus] = React.useState(
    initialValues.membershipStatus
  );
  const [membershipDate, setMembershipDate] = React.useState(
    initialValues.membershipDate
  );
  const [membershipValid, setMembershipValid] = React.useState(
    initialValues.membershipValid
  );
  const [isExec, setIsExec] = React.useState(initialValues.isExec);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setMembershipStatus(initialValues.membershipStatus);
    setMembershipDate(initialValues.membershipDate);
    setMembershipValid(initialValues.membershipValid);
    setIsExec(initialValues.isExec);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    membershipStatus: [{ type: "Required" }],
    membershipDate: [{ type: "Required" }],
    membershipValid: [{ type: "Required" }],
    isExec: [{ type: "Required" }],
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
          firstName,
          lastName,
          membershipStatus,
          membershipDate,
          membershipValid,
          isExec,
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
          await DataStore.save(new Member(modelFields));
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
      {...getOverrideProps(overrides, "MemberCreateForm")}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              membershipStatus,
              membershipDate,
              membershipValid,
              isExec,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              membershipStatus,
              membershipDate,
              membershipValid,
              isExec,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SelectField
        label="Membership status"
        placeholder="Please select an option"
        isDisabled={false}
        value={membershipStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus: value,
              membershipDate,
              membershipValid,
              isExec,
            };
            const result = onChange(modelFields);
            value = result?.membershipStatus ?? value;
          }
          if (errors.membershipStatus?.hasError) {
            runValidationTasks("membershipStatus", value);
          }
          setMembershipStatus(value);
        }}
        onBlur={() => runValidationTasks("membershipStatus", membershipStatus)}
        errorMessage={errors.membershipStatus?.errorMessage}
        hasError={errors.membershipStatus?.hasError}
        {...getOverrideProps(overrides, "membershipStatus")}
      >
        <option
          children="Regular"
          value="REGULAR"
          {...getOverrideProps(overrides, "membershipStatusoption0")}
        ></option>
        <option
          children="Ordinary"
          value="ORDINARY"
          {...getOverrideProps(overrides, "membershipStatusoption1")}
        ></option>
        <option
          children="Associate"
          value="ASSOCIATE"
          {...getOverrideProps(overrides, "membershipStatusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Membership date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus,
              membershipDate: value,
              membershipValid,
              isExec,
            };
            const result = onChange(modelFields);
            value = result?.membershipDate ?? value;
          }
          if (errors.membershipDate?.hasError) {
            runValidationTasks("membershipDate", value);
          }
          setMembershipDate(value);
        }}
        onBlur={() => runValidationTasks("membershipDate", membershipDate)}
        errorMessage={errors.membershipDate?.errorMessage}
        hasError={errors.membershipDate?.hasError}
        {...getOverrideProps(overrides, "membershipDate")}
      ></TextField>
      <SwitchField
        label="Membership valid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={membershipValid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus,
              membershipDate,
              membershipValid: value,
              isExec,
            };
            const result = onChange(modelFields);
            value = result?.membershipValid ?? value;
          }
          if (errors.membershipValid?.hasError) {
            runValidationTasks("membershipValid", value);
          }
          setMembershipValid(value);
        }}
        onBlur={() => runValidationTasks("membershipValid", membershipValid)}
        errorMessage={errors.membershipValid?.errorMessage}
        hasError={errors.membershipValid?.hasError}
        {...getOverrideProps(overrides, "membershipValid")}
      ></SwitchField>
      <SwitchField
        label="Is exec"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isExec}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus,
              membershipDate,
              membershipValid,
              isExec: value,
            };
            const result = onChange(modelFields);
            value = result?.isExec ?? value;
          }
          if (errors.isExec?.hasError) {
            runValidationTasks("isExec", value);
          }
          setIsExec(value);
        }}
        onBlur={() => runValidationTasks("isExec", isExec)}
        errorMessage={errors.isExec?.errorMessage}
        hasError={errors.isExec?.hasError}
        {...getOverrideProps(overrides, "isExec")}
      ></SwitchField>
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
