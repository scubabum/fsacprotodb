/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEquipmentType = /* GraphQL */ `
  query GetEquipmentType($id: ID!) {
    getEquipmentType(id: $id) {
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
export const listEquipmentTypes = /* GraphQL */ `
  query ListEquipmentTypes(
    $filter: ModelEquipmentTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        equipmentType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEquipmentTypes = /* GraphQL */ `
  query SyncEquipmentTypes(
    $filter: ModelEquipmentTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        equipmentType
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
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
export const listEquipment = /* GraphQL */ `
  query ListEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEquipment = /* GraphQL */ `
  query SyncEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipment(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const equipmentByMemberID = /* GraphQL */ `
  query EquipmentByMemberID(
    $memberID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    equipmentByMemberID(
      memberID: $memberID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCertifications = /* GraphQL */ `
  query GetCertifications($id: ID!) {
    getCertifications(id: $id) {
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
export const listCertifications = /* GraphQL */ `
  query ListCertifications(
    $filter: ModelCertificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCertifications = /* GraphQL */ `
  query SyncCertifications(
    $filter: ModelCertificationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const certificationsByMemberID = /* GraphQL */ `
  query CertificationsByMemberID(
    $memberID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificationsByMemberID(
      memberID: $memberID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        diveCerts {
          nextToken
          startedAt
        }
        membershipStatus
        Equipment {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        diveCerts {
          nextToken
          startedAt
        }
        membershipStatus
        Equipment {
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
      nextToken
      startedAt
    }
  }
`;
