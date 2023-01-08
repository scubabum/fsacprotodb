import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum CertAgency {
  PADI = "PADI",
  NAUI = "NAUI",
  SSI = "SSI",
  SDI = "SDI",
  TDI = "TDI",
  IANTD = "IANTD",
  BSAC = "BSAC",
  CMAS = "CMAS",
  FQAS = "FQAS"
}

export enum MembershipType {
  REGULAR = "REGULAR",
  ORDINARY = "ORDINARY",
  ASSOCIATE = "ASSOCIATE"
}



type EagerEquipmentType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equipmentType: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equipmentType: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentType = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentType : LazyEquipmentType

export declare const EquipmentType: (new (init: ModelInit<EquipmentType>) => EquipmentType) & {
  copyOf(source: EquipmentType, mutator: (draft: MutableModel<EquipmentType>) => MutableModel<EquipmentType> | void): EquipmentType;
}

type EagerEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly EquipmentType?: EquipmentType | null;
  readonly brand?: string | null;
  readonly model?: string | null;
  readonly serialNumber?: string | null;
  readonly assetNumber?: string | null;
  readonly maintenanceStatus?: string | null;
  readonly lastMaintenanceDate?: string | null;
  readonly memberID?: string | null;
  readonly tankVisual?: string | null;
  readonly tankHydro?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly equipmentEquipmentTypeId?: string | null;
}

type LazyEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly EquipmentType: AsyncItem<EquipmentType | undefined>;
  readonly brand?: string | null;
  readonly model?: string | null;
  readonly serialNumber?: string | null;
  readonly assetNumber?: string | null;
  readonly maintenanceStatus?: string | null;
  readonly lastMaintenanceDate?: string | null;
  readonly memberID?: string | null;
  readonly tankVisual?: string | null;
  readonly tankHydro?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly equipmentEquipmentTypeId?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment>) => MutableModel<Equipment> | void): Equipment;
}

type EagerCertifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qualtype: string;
  readonly memberID: string;
  readonly agency: CertAgency | keyof typeof CertAgency;
  readonly certNum?: string | null;
  readonly certDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCertifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qualtype: string;
  readonly memberID: string;
  readonly agency: CertAgency | keyof typeof CertAgency;
  readonly certNum?: string | null;
  readonly certDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Certifications = LazyLoading extends LazyLoadingDisabled ? EagerCertifications : LazyCertifications

export declare const Certifications: (new (init: ModelInit<Certifications>) => Certifications) & {
  copyOf(source: Certifications, mutator: (draft: MutableModel<Certifications>) => MutableModel<Certifications> | void): Certifications;
}

type EagerMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly diveCerts?: (Certifications | null)[] | null;
  readonly membershipStatus: MembershipType | keyof typeof MembershipType;
  readonly Equipment?: (Equipment | null)[] | null;
  readonly membershipDate: string;
  readonly membershipValid: boolean;
  readonly isExec: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly diveCerts: AsyncCollection<Certifications>;
  readonly membershipStatus: MembershipType | keyof typeof MembershipType;
  readonly Equipment: AsyncCollection<Equipment>;
  readonly membershipDate: string;
  readonly membershipValid: boolean;
  readonly isExec: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member>) => Member) & {
  copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}