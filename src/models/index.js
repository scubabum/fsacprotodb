// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CertAgency = {
  "PADI": "PADI",
  "NAUI": "NAUI",
  "SSI": "SSI",
  "SDI": "SDI",
  "TDI": "TDI",
  "IANTD": "IANTD",
  "BSAC": "BSAC",
  "CMAS": "CMAS",
  "FQAS": "FQAS"
};

const MembershipType = {
  "REGULAR": "REGULAR",
  "ORDINARY": "ORDINARY",
  "ASSOCIATE": "ASSOCIATE"
};

const { EquipmentType, Equipment, Certifications, Member } = initSchema(schema);

export {
  EquipmentType,
  Equipment,
  Certifications,
  Member,
  CertAgency,
  MembershipType
};