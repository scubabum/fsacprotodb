/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEquipmentType = /* GraphQL */ `
  subscription OnCreateEquipmentType(
    $filter: ModelSubscriptionEquipmentTypeFilterInput
  ) {
    onCreateEquipmentType(filter: $filter) {
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
export const onUpdateEquipmentType = /* GraphQL */ `
  subscription OnUpdateEquipmentType(
    $filter: ModelSubscriptionEquipmentTypeFilterInput
  ) {
    onUpdateEquipmentType(filter: $filter) {
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
export const onDeleteEquipmentType = /* GraphQL */ `
  subscription OnDeleteEquipmentType(
    $filter: ModelSubscriptionEquipmentTypeFilterInput
  ) {
    onDeleteEquipmentType(filter: $filter) {
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
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onCreateEquipment(filter: $filter) {
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
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onUpdateEquipment(filter: $filter) {
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
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onDeleteEquipment(filter: $filter) {
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
export const onCreateCertifications = /* GraphQL */ `
  subscription OnCreateCertifications(
    $filter: ModelSubscriptionCertificationsFilterInput
  ) {
    onCreateCertifications(filter: $filter) {
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
export const onUpdateCertifications = /* GraphQL */ `
  subscription OnUpdateCertifications(
    $filter: ModelSubscriptionCertificationsFilterInput
  ) {
    onUpdateCertifications(filter: $filter) {
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
export const onDeleteCertifications = /* GraphQL */ `
  subscription OnDeleteCertifications(
    $filter: ModelSubscriptionCertificationsFilterInput
  ) {
    onDeleteCertifications(filter: $filter) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
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
