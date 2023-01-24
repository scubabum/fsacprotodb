/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MemberUpdateForm(props) {
  const {
    id: idProp,
    member,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    membershipStatus: undefined,
    membershipDate: "",
    membershipValid: false,
    isExec: false,
    memberEmail: "",
    memberPhoneNumber: "",
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
  const [memberEmail, setMemberEmail] = React.useState(
    initialValues.memberEmail
  );
  const [memberPhoneNumber, setMemberPhoneNumber] = React.useState(
    initialValues.memberPhoneNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = memberRecord
      ? { ...initialValues, ...memberRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setMembershipStatus(cleanValues.membershipStatus);
    setMembershipDate(cleanValues.membershipDate);
    setMembershipValid(cleanValues.membershipValid);
    setIsExec(cleanValues.isExec);
    setMemberEmail(cleanValues.memberEmail);
    setMemberPhoneNumber(cleanValues.memberPhoneNumber);
    setErrors({});
  };
  const [memberRecord, setMemberRecord] = React.useState(member);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Member, idProp) : member;
      setMemberRecord(record);
    };
    queryData();
  }, [idProp, member]);
  React.useEffect(resetStateValues, [memberRecord]);
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    membershipStatus: [{ type: "Required" }],
    membershipDate: [{ type: "Required" }],
    membershipValid: [{ type: "Required" }],
    isExec: [{ type: "Required" }],
    memberEmail: [],
    memberPhoneNumber: [{ type: "Phone" }],
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
          firstName,
          lastName,
          membershipStatus,
          membershipDate,
          membershipValid,
          isExec,
          memberEmail,
          memberPhoneNumber,
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
            Member.copyOf(memberRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MemberUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
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
              memberEmail,
              memberPhoneNumber,
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
        value={lastName}
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
              memberEmail,
              memberPhoneNumber,
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
              memberEmail,
              memberPhoneNumber,
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
        value={membershipDate}
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
              memberEmail,
              memberPhoneNumber,
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
              memberEmail,
              memberPhoneNumber,
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
              memberEmail,
              memberPhoneNumber,
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
      <TextField
        label="Member email"
        isRequired={false}
        isReadOnly={false}
        value={memberEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus,
              membershipDate,
              membershipValid,
              isExec,
              memberEmail: value,
              memberPhoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.memberEmail ?? value;
          }
          if (errors.memberEmail?.hasError) {
            runValidationTasks("memberEmail", value);
          }
          setMemberEmail(value);
        }}
        onBlur={() => runValidationTasks("memberEmail", memberEmail)}
        errorMessage={errors.memberEmail?.errorMessage}
        hasError={errors.memberEmail?.hasError}
        {...getOverrideProps(overrides, "memberEmail")}
      ></TextField>
      <TextField
        label="Member phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={memberPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              membershipStatus,
              membershipDate,
              membershipValid,
              isExec,
              memberEmail,
              memberPhoneNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.memberPhoneNumber ?? value;
          }
          if (errors.memberPhoneNumber?.hasError) {
            runValidationTasks("memberPhoneNumber", value);
          }
          setMemberPhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("memberPhoneNumber", memberPhoneNumber)
        }
        errorMessage={errors.memberPhoneNumber?.errorMessage}
        hasError={errors.memberPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "memberPhoneNumber")}
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
          isDisabled={!(idProp || member)}
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
              !(idProp || member) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
