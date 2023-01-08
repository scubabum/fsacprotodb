/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Certifications } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function UpdateCertification(props) {
  const {
    id,
    certifications,
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
    qualtype: undefined,
    agency: undefined,
    certNum: undefined,
    certDate: undefined,
  };
  const [qualtype, setQualtype] = React.useState(initialValues.qualtype);
  const [agency, setAgency] = React.useState(initialValues.agency);
  const [certNum, setCertNum] = React.useState(initialValues.certNum);
  const [certDate, setCertDate] = React.useState(initialValues.certDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...certificationsRecord };
    setQualtype(cleanValues.qualtype);
    setAgency(cleanValues.agency);
    setCertNum(cleanValues.certNum);
    setCertDate(cleanValues.certDate);
    setErrors({});
  };
  const [certificationsRecord, setCertificationsRecord] =
    React.useState(certifications);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(Certifications, id)
        : certifications;
      setCertificationsRecord(record);
    };
    queryData();
  }, [id, certifications]);
  React.useEffect(resetStateValues, [certificationsRecord]);
  const validations = {
    qualtype: [{ type: "Required" }],
    agency: [{ type: "Required" }],
    certNum: [],
    certDate: [],
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
          qualtype,
          agency,
          certNum,
          certDate,
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
            Certifications.copyOf(certificationsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UpdateCertification")}
    >
      <TextField
        label="Qualtype"
        isRequired={true}
        isReadOnly={false}
        defaultValue={qualtype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              qualtype: value,
              agency,
              certNum,
              certDate,
            };
            const result = onChange(modelFields);
            value = result?.qualtype ?? value;
          }
          if (errors.qualtype?.hasError) {
            runValidationTasks("qualtype", value);
          }
          setQualtype(value);
        }}
        onBlur={() => runValidationTasks("qualtype", qualtype)}
        errorMessage={errors.qualtype?.errorMessage}
        hasError={errors.qualtype?.hasError}
        {...getOverrideProps(overrides, "qualtype")}
      ></TextField>
      <SelectField
        label="Agency"
        placeholder="Please select an option"
        isDisabled={false}
        value={agency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              qualtype,
              agency: value,
              certNum,
              certDate,
            };
            const result = onChange(modelFields);
            value = result?.agency ?? value;
          }
          if (errors.agency?.hasError) {
            runValidationTasks("agency", value);
          }
          setAgency(value);
        }}
        onBlur={() => runValidationTasks("agency", agency)}
        errorMessage={errors.agency?.errorMessage}
        hasError={errors.agency?.hasError}
        {...getOverrideProps(overrides, "agency")}
      >
        <option
          children="Padi"
          value="PADI"
          {...getOverrideProps(overrides, "agencyoption0")}
        ></option>
        <option
          children="Naui"
          value="NAUI"
          {...getOverrideProps(overrides, "agencyoption1")}
        ></option>
        <option
          children="Ssi"
          value="SSI"
          {...getOverrideProps(overrides, "agencyoption2")}
        ></option>
        <option
          children="Sdi"
          value="SDI"
          {...getOverrideProps(overrides, "agencyoption3")}
        ></option>
        <option
          children="Tdi"
          value="TDI"
          {...getOverrideProps(overrides, "agencyoption4")}
        ></option>
        <option
          children="Iantd"
          value="IANTD"
          {...getOverrideProps(overrides, "agencyoption5")}
        ></option>
        <option
          children="Bsac"
          value="BSAC"
          {...getOverrideProps(overrides, "agencyoption6")}
        ></option>
        <option
          children="Cmas"
          value="CMAS"
          {...getOverrideProps(overrides, "agencyoption7")}
        ></option>
        <option
          children="Fqas"
          value="FQAS"
          {...getOverrideProps(overrides, "agencyoption8")}
        ></option>
      </SelectField>
      <TextField
        label="Cert num"
        isRequired={false}
        isReadOnly={false}
        defaultValue={certNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              qualtype,
              agency,
              certNum: value,
              certDate,
            };
            const result = onChange(modelFields);
            value = result?.certNum ?? value;
          }
          if (errors.certNum?.hasError) {
            runValidationTasks("certNum", value);
          }
          setCertNum(value);
        }}
        onBlur={() => runValidationTasks("certNum", certNum)}
        errorMessage={errors.certNum?.errorMessage}
        hasError={errors.certNum?.hasError}
        {...getOverrideProps(overrides, "certNum")}
      ></TextField>
      <TextField
        label="Cert date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={certDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              qualtype,
              agency,
              certNum,
              certDate: value,
            };
            const result = onChange(modelFields);
            value = result?.certDate ?? value;
          }
          if (errors.certDate?.hasError) {
            runValidationTasks("certDate", value);
          }
          setCertDate(value);
        }}
        onBlur={() => runValidationTasks("certDate", certDate)}
        errorMessage={errors.certDate?.errorMessage}
        hasError={errors.certDate?.hasError}
        {...getOverrideProps(overrides, "certDate")}
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
