/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEquipmentType = /* GraphQL */ `
  mutation CreateEquipmentType(
    $input: CreateEquipmentTypeInput!
    $condition: ModelEquipmentTypeConditionInput
  ) {
    createEquipmentType(input: $input, condition: $condition) {
      id
      equipmentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEquipmentType = /* GraphQL */ `
  mutation UpdateEquipmentType(
    $input: UpdateEquipmentTypeInput!
    $condition: ModelEquipmentTypeConditionInput
  ) {
    updateEquipmentType(input: $input, condition: $condition) {
      id
      equipmentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEquipmentType = /* GraphQL */ `
  mutation DeleteEquipmentType(
    $input: DeleteEquipmentTypeInput!
    $condition: ModelEquipmentTypeConditionInput
  ) {
    deleteEquipmentType(input: $input, condition: $condition) {
      id
      equipmentType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      EquipmentType {
        id
        equipmentType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      brand
      model
      serialNumber
      assetNumber
      maintenanceStatus
      lastMaintenanceDate
      memberID
      tankVisual
      tankHydro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentTypeId
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      EquipmentType {
        id
        equipmentType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      brand
      model
      serialNumber
      assetNumber
      maintenanceStatus
      lastMaintenanceDate
      memberID
      tankVisual
      tankHydro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentTypeId
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      EquipmentType {
        id
        equipmentType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      brand
      model
      serialNumber
      assetNumber
      maintenanceStatus
      lastMaintenanceDate
      memberID
      tankVisual
      tankHydro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      equipmentEquipmentTypeId
    }
  }
`;
export const createCertifications = /* GraphQL */ `
  mutation CreateCertifications(
    $input: CreateCertificationsInput!
    $condition: ModelCertificationsConditionInput
  ) {
    createCertifications(input: $input, condition: $condition) {
      id
      qualtype
      memberID
      agency
      certNum
      certDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCertifications = /* GraphQL */ `
  mutation UpdateCertifications(
    $input: UpdateCertificationsInput!
    $condition: ModelCertificationsConditionInput
  ) {
    updateCertifications(input: $input, condition: $condition) {
      id
      qualtype
      memberID
      agency
      certNum
      certDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCertifications = /* GraphQL */ `
  mutation DeleteCertifications(
    $input: DeleteCertificationsInput!
    $condition: ModelCertificationsConditionInput
  ) {
    deleteCertifications(input: $input, condition: $condition) {
      id
      qualtype
      memberID
      agency
      certNum
      certDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      firstName
      lastName
      diveCerts {
        items {
          id
          qualtype
          memberID
          agency
          certNum
          certDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      membershipStatus
      Equipment {
        items {
          id
          brand
          model
          serialNumber
          assetNumber
          maintenanceStatus
          lastMaintenanceDate
          memberID
          tankVisual
          tankHydro
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          equipmentEquipmentTypeId
        }
        nextToken
        startedAt
      }
      membershipDate
      membershipValid
      isExec
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      firstName
      lastName
      diveCerts {
        items {
          id
          qualtype
          memberID
          agency
          certNum
          certDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      membershipStatus
      Equipment {
        items {
          id
          brand
          model
          serialNumber
          assetNumber
          maintenanceStatus
          lastMaintenanceDate
          memberID
          tankVisual
          tankHydro
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          equipmentEquipmentTypeId
        }
        nextToken
        startedAt
      }
      membershipDate
      membershipValid
      isExec
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      firstName
      lastName
      diveCerts {
        items {
          id
          qualtype
          memberID
          agency
          certNum
          certDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      membershipStatus
      Equipment {
        items {
          id
          brand
          model
          serialNumber
          assetNumber
          maintenanceStatus
          lastMaintenanceDate
          memberID
          tankVisual
          tankHydro
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          equipmentEquipmentTypeId
        }
        nextToken
        startedAt
      }
      membershipDate
      membershipValid
      isExec
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
