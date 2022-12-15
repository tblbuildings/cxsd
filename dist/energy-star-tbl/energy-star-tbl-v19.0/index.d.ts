import * as Primitive from '../xml-primitives';

// Source files:
// http://localhost:8080/account/account.xsd
// http://localhost:8080/account/customer.xsd
// http://localhost:8080/account/dataExchangeSettings.xsd
// http://localhost:8080/assignment/eGridSubregion.xsd
// http://localhost:8080/assignment/edu.xsd
// http://localhost:8080/assignment/internationalWeatherStation.xsd
// http://localhost:8080/assignment/pgp.xsd
// http://localhost:8080/association/association.xsd
// http://localhost:8080/authorization/authorization.xsd
// http://localhost:8080/building/building.xsd
// http://localhost:8080/common/address.xsd
// http://localhost:8080/common/audit.xsd
// http://localhost:8080/common/customField.xsd
// http://localhost:8080/common/grossFloorArea.xsd
// http://localhost:8080/common/irrigatedArea.xsd
// http://localhost:8080/common/links.xsd
// http://localhost:8080/hey/hey.xsd
// http://localhost:8080/main.xsd
// http://localhost:8080/mapping/mapping.xsd
// http://localhost:8080/meter/individual.xsd
// http://localhost:8080/meter/meter.xsd
// http://localhost:8080/meter/meterConsumptionData.xsd
// http://localhost:8080/meter/wasteData.xsd
// http://localhost:8080/property/additionalIdentifier.xsd
// http://localhost:8080/property/alerts.xsd
// http://localhost:8080/property/baselineAndTarget.xsd
// http://localhost:8080/property/billboardMetricSetting.xsd
// http://localhost:8080/property/billboardMetrics.xsd
// http://localhost:8080/property/design.xsd
// http://localhost:8080/property/energyPerformanceProject.xsd
// http://localhost:8080/property/federalAgency.xsd
// http://localhost:8080/property/licenseList.xsd
// http://localhost:8080/property/professionalDesignation.xsd
// http://localhost:8080/property/property.xsd
// http://localhost:8080/property/propertyDesign.xsd
// http://localhost:8080/property/propertyMetrics.xsd
// http://localhost:8080/property/propertyMetricsList.xsd
// http://localhost:8080/property/verification.xsd
// http://localhost:8080/propertyUse/bankBranch.xsd
// http://localhost:8080/propertyUse/barracks.xsd
// http://localhost:8080/propertyUse/characteristicType.xsd
// http://localhost:8080/propertyUse/characteristics.xsd
// http://localhost:8080/propertyUse/collegeUniversity.xsd
// http://localhost:8080/propertyUse/convenienceStoreWithGasStation.xsd
// http://localhost:8080/propertyUse/convenienceStoreWithoutGasStation.xsd
// http://localhost:8080/propertyUse/courthouse.xsd
// http://localhost:8080/propertyUse/dataCenter.xsd
// http://localhost:8080/propertyUse/distributionCenter.xsd
// http://localhost:8080/propertyUse/drinkingWaterTreatmentAndDistribution.xsd
// http://localhost:8080/propertyUse/financialOffice.xsd
// http://localhost:8080/propertyUse/foodSales.xsd
// http://localhost:8080/propertyUse/hospital.xsd
// http://localhost:8080/propertyUse/hotel.xsd
// http://localhost:8080/propertyUse/iceCurlingRink.xsd
// http://localhost:8080/propertyUse/indoorArena.xsd
// http://localhost:8080/propertyUse/k12School.xsd
// http://localhost:8080/propertyUse/medicalOffice.xsd
// http://localhost:8080/propertyUse/multifamilyHousing.xsd
// http://localhost:8080/propertyUse/nonRefrigeratedWarehouse.xsd
// http://localhost:8080/propertyUse/office.xsd
// http://localhost:8080/propertyUse/otherPropertyUses.xsd
// http://localhost:8080/propertyUse/otherStadium.xsd
// http://localhost:8080/propertyUse/parking.xsd
// http://localhost:8080/propertyUse/propertyUse.xsd
// http://localhost:8080/propertyUse/propertyUseList.xsd
// http://localhost:8080/propertyUse/refrigeratedWarehouse.xsd
// http://localhost:8080/propertyUse/residenceHallDormitory.xsd
// http://localhost:8080/propertyUse/residentialCareFacility.xsd
// http://localhost:8080/propertyUse/retail.xsd
// http://localhost:8080/propertyUse/selfStorage.xsd
// http://localhost:8080/propertyUse/seniorLivingCommunity.xsd
// http://localhost:8080/propertyUse/singleFamilyHome.xsd
// http://localhost:8080/propertyUse/stadiumClosed.xsd
// http://localhost:8080/propertyUse/stadiumOpen.xsd
// http://localhost:8080/propertyUse/supermarket.xsd
// http://localhost:8080/propertyUse/swimmingPool.xsd
// http://localhost:8080/propertyUse/useDetailsRevisions.xsd
// http://localhost:8080/propertyUse/wastewaterTreatmentPlant.xsd
// http://localhost:8080/propertyUse/wholesaleClubSupercenter.xsd
// http://localhost:8080/propertyUse/worshipFacility.xsd
// http://localhost:8080/response/hierarchy.xsd
// http://localhost:8080/response/response.xsd
// http://localhost:8080/targetFinder/targetFinder.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** The response to the sharing request */
export type acceptRejectType = ("Accept" | "Reject");
interface _acceptRejectType extends Primitive._string { content: acceptRejectType; }

interface _AccountInfoType extends BaseType {}
interface AccountInfoType extends _AccountInfoType { constructor: { new(): AccountInfoType }; }

interface _accountType extends BaseType {}
export interface accountType extends _accountType { constructor: { new(): accountType }; }
export var accountType: { new(): accountType };

/** Represents a list of property identifiers. */
interface _AdditionalIdentifiersType extends BaseType {
	/** The values associated to the additional property/meter identifier for a given property.  This is used when you provide the values (update or add) to an additional property identifier for a specific property. */
	additionalIdentifier?: AdditionalIdentifierType[];
}
interface AdditionalIdentifiersType extends _AdditionalIdentifiersType { constructor: { new(): AdditionalIdentifiersType }; }

interface _AdditionalIdentifierType extends BaseType {
	/** The id of the transaction when values are provided for a specific additional property identifier and property. */
	id?: number;
}
interface AdditionalIdentifierType extends _AdditionalIdentifierType { constructor: { new(): AdditionalIdentifierType }; }

/** Represents a list of property identifiers types that have been standardized with the EPA. */
interface _AdditionalIdentifierTypesType extends BaseType {
	/** The additional property identifier that EPA has approved for use.  This is used when you just want to get the complete static list of additional property identifiers.  This set includes the unique identifier #1, #2, and #3 and the set that EPA is maintaining/approved. */
	additionalIdentifierType?: AdditionalIdentifierTypeType[];
}
interface AdditionalIdentifierTypesType extends _AdditionalIdentifierTypesType { constructor: { new(): AdditionalIdentifierTypesType }; }

interface _AdditionalIdentifierTypeType extends BaseType {
	/** The description of the additional property identifier. */
	description?: string;
	/** The id of the additional property identifier */
	id: number;
	/** The name of the additional property identifier */
	name?: string;
	/** Whether the additional property identifier is from the standard list that EPA is maintaining (versus the generic set of 3 unique identifier fields that can be used) */
	standardApproved?: boolean;
}
interface AdditionalIdentifierTypeType extends _AdditionalIdentifierTypeType { constructor: { new(): AdditionalIdentifierTypeType }; }

interface _addressType extends BaseType {
	/** The property physical address  - line 1. */
	address1: string;
	/** The property physical address  - line 2. */
	address2?: string;
	/** The property physical address - city. */
	city: string;
	/** The property physical address - country. */
	country: countryList;
	/** The property physical address - county. */
	county: string;
	/** The property physical address - state or province (when not US/Canada). */
	otherState?: string;
	/** The property physical address - postal code/zip code. */
	postalCode: string;
	/** The property physical address - state or province. */
	state?: addressTypeStateType;
}
export interface addressType extends _addressType { constructor: { new(): addressType }; }
export var addressType: { new(): addressType };

type addressTypeAddress1Type = string;
type _addressTypeAddress1Type = Primitive._string;

type addressTypeAddress2Type = string;
type _addressTypeAddress2Type = Primitive._string;

type addressTypeCityType = string;
type _addressTypeCityType = Primitive._string;

type addressTypeCountyType = string;
type _addressTypeCountyType = Primitive._string;

type addressTypeOtherStateType = string;
type _addressTypeOtherStateType = Primitive._string;

type addressTypePostalCodeType = string;
type _addressTypePostalCodeType = Primitive._string;

type addressTypeStateType = ("AK" | "AL" | "AR" | "AS" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "GU" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MH" | "MI" | "MN" | "MO" | "MP" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NN" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "PI" | "PR" | "RI" | "SC" | "SD" | "TN" | "TT" | "TX" | "UM" | "UT" | "VA" | "VI" | "VT" | "WA" | "WI" | "WQ" | "WV" | "WY" | "AB" | "BC" | "MB" | "NB" | "NL" | "NS" | "NT" | "NU" | "ON" | "PE" | "QC" | "SK" | "YT");
interface _addressTypeStateType extends Primitive._string { content: addressTypeStateType; }

interface _AgencyType extends BaseType {
	/** The federal agency code or abbreviation. */
	code?: string;
	/** The country which owns this agency. */
	country?: AgencyTypeCountryType;
	/** The ID created within Portfolio Manager that uniquely defines the federal agency. */
	id: number;
	/** The federal agency name. */
	name?: string;
}
export interface AgencyType extends _AgencyType { constructor: { new(): AgencyType }; }
export var AgencyType: { new(): AgencyType };

type AgencyTypeCountryType = ("US" | "CA" | "AD" | "AE" | "AF" | "AG" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BM" | "BN" | "BO" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PW" | "PY" | "QA" | "RE" | "RO" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "ST" | "SV" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UY" | "UZ" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _AgencyTypeCountryType extends Primitive._string { content: AgencyTypeCountryType; }

interface _alertsType extends BaseType {
	/** The month of the period ending date provided. */
	month: number;
	/** The id of the property. */
	propertyId: number;
	/** The year of the period ending date provided. */
	year: number;
	alert?: alertsTypeAlertType[];
}
export interface alertsType extends _alertsType { constructor: { new(): alertsType }; }
export var alertsType: { new(): alertsType };

interface _alertsTypeAlertType extends BaseType {}
interface alertsTypeAlertType extends _alertsTypeAlertType { constructor: { new(): alertsTypeAlertType }; }

type alertsTypeMonthType = number;
type _alertsTypeMonthType = Primitive._number;

export type allEnergyMetersType = ("Electric" | "Electric on Site Solar" | "Electric on Site Wind" | "Natural Gas" | "Propane" | "Diesel" | "District Steam" | "District Hot Water" | "District Chilled Water - Absorption Chiller using Natural Gas" | "District Chilled Water - Electric-Driven Chiller" | "District Chilled Water - Engine-Driven Chiller using Natural Gas" | "District Chilled Water - Other" | "Fuel Oil No 1" | "Fuel Oil No 2" | "Fuel Oil No 4" | "Fuel Oil No 5 or 6" | "Coal Anthracite" | "Coal Bituminous" | "Coke" | "Wood" | "Kerosene" | "Other (Energy)");
interface _allEnergyMetersType extends Primitive._string { content: allEnergyMetersType; }

export type allMeterTypes = string;
type _allMeterTypes = Primitive._string;

interface _amountOfLaundryProcessedAnnuallyType extends _useAttributeBase {
	units: amountOfLaundryProcessedAnnuallyUnitsType;
	value?: number;
}
export interface amountOfLaundryProcessedAnnuallyType extends _amountOfLaundryProcessedAnnuallyType { constructor: { new(): amountOfLaundryProcessedAnnuallyType }; }
export var amountOfLaundryProcessedAnnuallyType: { new(): amountOfLaundryProcessedAnnuallyType };

export type amountOfLaundryProcessedAnnuallyUnitsType = ("pounds" | "Kilogram" | "short tons");
interface _amountOfLaundryProcessedAnnuallyUnitsType extends Primitive._string { content: amountOfLaundryProcessedAnnuallyUnitsType; }

interface _bankBranchType extends BaseType {}
export interface bankBranchType extends _bankBranchType { constructor: { new(): bankBranchType }; }
export var bankBranchType: { new(): bankBranchType };

interface _barracksType extends BaseType {}
export interface barracksType extends _barracksType { constructor: { new(): barracksType }; }
export var barracksType: { new(): barracksType };

interface _baselineAndTargetType extends BaseType {
	baseline?: baselineType;
	target?: performanceTargetType;
}
export interface baselineAndTargetType extends _baselineAndTargetType { constructor: { new(): baselineAndTargetType }; }
export var baselineAndTargetType: { new(): baselineAndTargetType };

export type baselineDateType = string;
type _baselineDateType = Primitive._string;

interface _baselineType extends BaseType {
	/** The baseline date used for your property's energy consumption.  Must be in the format of YYYY-MM or "System Determined" to indicate for Portfolio Manager to automatically calculate the baseline date. */
	energyBaselineDate?: string;
	/** The baseline date used for your property's water consumption.  Must be in the format of YYYY-MM or "System Determined" to indicate for Portfolio Manager to automatically calculate the baseline date. */
	waterBaselineDate?: string;
}
export interface baselineType extends _baselineType { constructor: { new(): baselineType }; }
export var baselineType: { new(): baselineType };

interface _BillboardMetricSettingType extends BaseType {}
interface BillboardMetricSettingType extends _BillboardMetricSettingType { constructor: { new(): BillboardMetricSettingType }; }

/** List of billboard metrics that can be used. */
interface _billboardMetricsType extends BaseType {
	/** Displays metric information. */
	metric: billboardMetricType[];
}
export interface billboardMetricsType extends _billboardMetricsType { constructor: { new(): billboardMetricsType }; }
export var billboardMetricsType: { new(): billboardMetricsType };

/** Settings to your billboard metric */
interface _billboardMetricType extends BaseType {
	/** The data type of the value for the metric (i.e., string, numeric, date). */
	dataType: dataType;
	/** The name of the metric. */
	name: string;
}
export interface billboardMetricType extends _billboardMetricType { constructor: { new(): billboardMetricType }; }
export var billboardMetricType: { new(): billboardMetricType };

/** List of categories or stages for the project. */
export type categoryType = ("Recommissioning (Stage 1)" | "Lighting (Stage 2)" | "Load Reductions (Stage 3)" | "Fan Systems (Stage 4)" | "Heating & Cooling Plant (Stage 5)" | "Behavioral/Outreach" | "Other Technologies/Strategies");
interface _categoryType extends Primitive._string { content: categoryType; }

interface _clearHeightUnitsType extends _useAttributeBase {
	units: lengthUnitsType;
	value?: number;
}
export interface clearHeightUnitsType extends _clearHeightUnitsType { constructor: { new(): clearHeightUnitsType }; }
export var clearHeightUnitsType: { new(): clearHeightUnitsType };

interface _collegeUniversityType extends BaseType {}
export interface collegeUniversityType extends _collegeUniversityType { constructor: { new(): collegeUniversityType }; }
export var collegeUniversityType: { new(): collegeUniversityType };

export type constructionStatusType = ("Existing" | "Project" | "Test");
interface _constructionStatusType extends Primitive._string { content: constructionStatusType; }

interface _contactType extends BaseType {}
export interface contactType extends _contactType { constructor: { new(): contactType }; }
export var contactType: { new(): contactType };

interface _convenienceStoreWithGasStationType extends BaseType {}
export interface convenienceStoreWithGasStationType extends _convenienceStoreWithGasStationType { constructor: { new(): convenienceStoreWithGasStationType }; }
export var convenienceStoreWithGasStationType: { new(): convenienceStoreWithGasStationType };

interface _convenienceStoreWithoutGasStationType extends BaseType {}
export interface convenienceStoreWithoutGasStationType extends _convenienceStoreWithoutGasStationType { constructor: { new(): convenienceStoreWithoutGasStationType }; }
export var convenienceStoreWithoutGasStationType: { new(): convenienceStoreWithoutGasStationType };

interface _coolingEquipmentRedundancyType extends _useAttributeBase {
	value?: coolingEquipmentRedundancyTypeValueType;
}
export interface coolingEquipmentRedundancyType extends _coolingEquipmentRedundancyType { constructor: { new(): coolingEquipmentRedundancyType }; }
export var coolingEquipmentRedundancyType: { new(): coolingEquipmentRedundancyType };

type coolingEquipmentRedundancyTypeValueType = ("N" | "N+1" | "N+2" | "2N" | "Greater than 2N" | "None of the Above");
interface _coolingEquipmentRedundancyTypeValueType extends Primitive._string { content: coolingEquipmentRedundancyTypeValueType; }

export type countryCode = ("US" | "CA" | "");
interface _countryCode extends Primitive._string { content: countryCode; }

export type countryList = ("US" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _countryList extends Primitive._string { content: countryList; }

interface _courthouseType extends BaseType {}
export interface courthouseType extends _courthouseType { constructor: { new(): courthouseType }; }
export var courthouseType: { new(): courthouseType };

interface _CustomerType extends BaseType {}
interface CustomerType extends _CustomerType { constructor: { new(): CustomerType }; }

interface _CustomFieldListType extends BaseType {
	customField?: CustomFieldListTypeCustomFieldType[];
}
interface CustomFieldListType extends _CustomFieldListType { constructor: { new(): CustomFieldListType }; }

interface _CustomFieldListTypeCustomFieldType extends Primitive._string {
	name: string;
}
interface CustomFieldListTypeCustomFieldType extends _CustomFieldListTypeCustomFieldType { constructor: { new(): CustomFieldListTypeCustomFieldType }; }

interface _CustomFieldType extends BaseType {
	/** The custom field name which will display to the PM user. */
	name: string;
	/** Whether the field is required or not. */
	required: boolean;
	/** The set of valid characters allowed for input. */
	validCharacters: CustomFieldTypeValidCharactersType;
	/** When the custom field should be prompted to the user (i.e., every account, every property, or every meter). */
	whenToPrompt: CustomFieldTypeWhenToPromptType;
}
interface CustomFieldType extends _CustomFieldType { constructor: { new(): CustomFieldType }; }

type CustomFieldTypeNameType = string;
type _CustomFieldTypeNameType = Primitive._string;

type CustomFieldTypeValidCharactersType = ("Any" | "Alphanumeric" | "Numeric");
interface _CustomFieldTypeValidCharactersType extends Primitive._string { content: CustomFieldTypeValidCharactersType; }

type CustomFieldTypeWhenToPromptType = ("Once" | "Property" | "Meter");
interface _CustomFieldTypeWhenToPromptType extends Primitive._string { content: CustomFieldTypeWhenToPromptType; }

interface _dataCenterType extends BaseType {}
export interface dataCenterType extends _dataCenterType { constructor: { new(): dataCenterType }; }
export var dataCenterType: { new(): dataCenterType };

interface _DataExchangeSettingsType extends BaseType {}
interface DataExchangeSettingsType extends _DataExchangeSettingsType { constructor: { new(): DataExchangeSettingsType }; }

export type dataType = ("date" | "numeric" | "string");
interface _dataType extends Primitive._string { content: dataType; }

export type decimalPrecision = number;
type _decimalPrecision = Primitive._number;

export type decimalTwoPrecision = number;
type _decimalTwoPrecision = Primitive._number;

export type decimalTwoPrecisionOrEmptyString = string;
type _decimalTwoPrecisionOrEmptyString = Primitive._string;

interface _demandTrackingType extends BaseType {}
export interface demandTrackingType extends _demandTrackingType { constructor: { new(): demandTrackingType }; }
export var demandTrackingType: { new(): demandTrackingType };

interface _designBaseType extends BaseType {}
export interface designBaseType extends _designBaseType { constructor: { new(): designBaseType }; }
export var designBaseType: { new(): designBaseType };

export type designUnitOfMeasure = ("ccf (hundred cubic feet)" | "cf (cubic feet)" | "cm (Cubic meters)" | "Cords" | "Gallons (UK)" | "Gallons (US)" | "GJ" | "kBtu (thousand Btu)" | "kcf (thousand cubic feet)" | "Kcm (Thousand Cubic meters)" | "KGal (thousand gallons) (UK)" | "KGal (thousand gallons) (US)" | "Kilogram" | "KLbs. (thousand pounds)" | "kWh (thousand Watt-hours)" | "Liters" | "MBtu (million Btu)" | "MCF(million cubic feet)" | "mg/l (milligrams per liter)" | "MGal (million gallons) (UK)" | "MGal (million gallons) (US)" | "Million Gallons per Day" | "MLbs. (million pounds)" | "MWh (million Watt-hours)" | "pounds" | "Pounds per year" | "therms" | "ton hours" | "Tonnes (metric)" | "tons");
interface _designUnitOfMeasure extends Primitive._string { content: designUnitOfMeasure; }

/** A service type used for representing a disposal destination entry. */
interface _disposalDestinationType extends BaseType {}
export interface disposalDestinationType extends _disposalDestinationType { constructor: { new(): disposalDestinationType }; }
export var disposalDestinationType: { new(): disposalDestinationType };

interface _distributionCenterType extends BaseType {}
export interface distributionCenterType extends _distributionCenterType { constructor: { new(): distributionCenterType }; }
export var distributionCenterType: { new(): distributionCenterType };

interface _drinkingWaterTreatmentAndDistributionType extends BaseType {}
export interface drinkingWaterTreatmentAndDistributionType extends _drinkingWaterTreatmentAndDistributionType { constructor: { new(): drinkingWaterTreatmentAndDistributionType }; }
export var drinkingWaterTreatmentAndDistributionType: { new(): drinkingWaterTreatmentAndDistributionType };

interface _EduListType extends BaseType {
	/** Electric Distribution Utility Information */
	edu?: EduType[];
}
interface EduListType extends _EduListType { constructor: { new(): EduListType }; }

interface _EduType extends BaseType {
	/** The code to the Electric Distribution Utility (EDU) */
	eduCode: string;
	/** The code of the eGrid Subregion that the EDU belongs to. */
	eGridCode?: string;
	/** The name of the eGrid Subregion that the EDU belongs to. */
	eGridName?: string;
	/** The name of Electric Distribution Utility (EDU). */
	name?: string;
	/** This is the default EDU for a property if there are multiple EDU options. */
	preferred?: boolean;
	/** Whether the property is currently assigned to this EDU. */
	selected?: boolean;
}
interface EduType extends _EduType { constructor: { new(): EduType }; }

interface _EGridSubregionListType extends BaseType {
	/** Electric Distribution Utility Information */
	eGridSubregion?: EGridSubregionType[];
}
interface EGridSubregionListType extends _EGridSubregionListType { constructor: { new(): EGridSubregionListType }; }

interface _EGridSubregionType extends BaseType {
	/** The code of the eGrid Subregion. */
	code: string;
	/** The country in which the eGrid Subregion is located. */
	country: EGridSubregionTypeCountryType;
	/** The name of the eGrid Subregion. */
	name: string;
}
interface EGridSubregionType extends _EGridSubregionType { constructor: { new(): EGridSubregionType }; }

type EGridSubregionTypeCountryType = ("US" | "CA" | "AD" | "AE" | "AF" | "AG" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BM" | "BN" | "BO" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PW" | "PY" | "QA" | "RE" | "RO" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "ST" | "SV" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UY" | "UZ" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _EGridSubregionTypeCountryType extends Primitive._string { content: EGridSubregionTypeCountryType; }

export type emptyString = "";
interface _emptyString extends Primitive._string { content: emptyString; }

export type emptyType = "";
interface _emptyType extends Primitive._string { content: emptyType; }

interface _energyMeterAssocAndConfigType extends BaseType {}
export interface energyMeterAssocAndConfigType extends _energyMeterAssocAndConfigType { constructor: { new(): energyMeterAssocAndConfigType }; }
export var energyMeterAssocAndConfigType: { new(): energyMeterAssocAndConfigType };

interface _energyPerformanceProjectType extends BaseType {}
export interface energyPerformanceProjectType extends _energyPerformanceProjectType { constructor: { new(): energyPerformanceProjectType }; }
export var energyPerformanceProjectType: { new(): energyPerformanceProjectType };

/** A list of errors that caused this request to fail. */
interface _errorsType extends BaseType {
	/** The error of the web service call. */
	error?: errorType[];
}
export interface errorsType extends _errorsType { constructor: { new(): errorsType }; }
export var errorsType: { new(): errorsType };

interface _errorType extends BaseType {
	/** The description of the error. */
	errorDescription: string;
	/** The number of the error. */
	errorNumber: string;
}
export interface errorType extends _errorType { constructor: { new(): errorType }; }
export var errorType: { new(): errorType };

interface _estimatedEnergyListType extends BaseType {
	designEntry?: estimatedEnergyType[];
}
export interface estimatedEnergyListType extends _estimatedEnergyListType { constructor: { new(): estimatedEnergyListType }; }
export var estimatedEnergyListType: { new(): estimatedEnergyListType };

interface _estimatedEnergyType extends BaseType {}
export interface estimatedEnergyType extends _estimatedEnergyType { constructor: { new(): estimatedEnergyType }; }
export var estimatedEnergyType: { new(): estimatedEnergyType };

interface _evaluationPeriodType extends BaseType {}
export interface evaluationPeriodType extends _evaluationPeriodType { constructor: { new(): evaluationPeriodType }; }
export var evaluationPeriodType: { new(): evaluationPeriodType };

/** Represents a list of federal agencies. */
interface _FederalAgenciesType extends BaseType {
	agency?: AgencyType[];
}
interface FederalAgenciesType extends _FederalAgenciesType { constructor: { new(): FederalAgenciesType }; }

interface _financialOfficeType extends BaseType {}
export interface financialOfficeType extends _financialOfficeType { constructor: { new(): financialOfficeType }; }
export var financialOfficeType: { new(): financialOfficeType };

interface _floorAreaTypeBase extends _useAttributeBase {
	/** The units of the Gross Floor Area (Square Foot or Square Meter). */
	units: grossFloorAreaUnitsType;
}
export interface floorAreaTypeBase extends _floorAreaTypeBase { constructor: { new(): floorAreaTypeBase }; }
export var floorAreaTypeBase: { new(): floorAreaTypeBase };

interface _foodSalesType extends BaseType {}
export interface foodSalesType extends _foodSalesType { constructor: { new(): foodSalesType }; }
export var foodSalesType: { new(): foodSalesType };

export type generationPlantType = string;
type _generationPlantType = Primitive._string;

interface _greenPowerType extends BaseType {}
export interface greenPowerType extends _greenPowerType { constructor: { new(): greenPowerType }; }
export var greenPowerType: { new(): greenPowerType };

/** The total gross floor area of all buildings at the property, measured at the exterior boundary of the enclosing walls, including all areas within the building (common, tenant, maintenance, etc). */
interface _grossFloorAreaType extends _floorAreaTypeBase {
	value: number;
}
export interface grossFloorAreaType extends _grossFloorAreaType { constructor: { new(): grossFloorAreaType }; }
export var grossFloorAreaType: { new(): grossFloorAreaType };

export type grossFloorAreaUnitsType = ("Square Feet" | "Square Meters");
interface _grossFloorAreaUnitsType extends Primitive._string { content: grossFloorAreaUnitsType; }

interface _heyType extends BaseType {
	meter: heyTypeMeterType[];
	propertyInfo: heyTypePropertyInfoType;
}
export interface heyType extends _heyType { constructor: { new(): heyType }; }
export var heyType: { new(): heyType };

interface _heyTypeMeterType extends BaseType {
	meterData: heyTypeMeterTypeMeterDataType;
	type: allEnergyMetersType;
	unitOfMeasure: designUnitOfMeasure;
}
interface heyTypeMeterType extends _heyTypeMeterType { constructor: { new(): heyTypeMeterType }; }

interface _heyTypeMeterTypeMeterDataType extends BaseType {
	meterConsumption: meterConsumptionType[];
}
interface heyTypeMeterTypeMeterDataType extends _heyTypeMeterTypeMeterDataType { constructor: { new(): heyTypeMeterTypeMeterDataType }; }

interface _heyTypePropertyInfoType extends BaseType {}
interface heyTypePropertyInfoType extends _heyTypePropertyInfoType { constructor: { new(): heyTypePropertyInfoType }; }

interface _hierarchyType extends BaseType {
	/** Id of the Property Data Administrator */
	accountId?: number;
	/** Id of the consumption data record */
	consumptionDataId?: number;
	/** Id of the meter */
	meterId?: number;
	/** Id of the property */
	propertyId?: number;
	/** Id of the property use */
	propertyUseId?: number;
	/** Id of the use detail record */
	useDetailId?: number;
	/** Username of the Property Data Administrator */
	username?: string;
	/** Id of the waste meter data record */
	wasteMeterDataId?: number;
}
export interface hierarchyType extends _hierarchyType { constructor: { new(): hierarchyType }; }
export var hierarchyType: { new(): hierarchyType };

interface _hospitalType extends BaseType {}
export interface hospitalType extends _hospitalType { constructor: { new(): hospitalType }; }
export var hospitalType: { new(): hospitalType };

/** This xml type represents a property use type. If an element is missing it will be
  * populated with a default value. */
interface _hotelType extends BaseType {}
export interface hotelType extends _hotelType { constructor: { new(): hotelType }; }
export var hotelType: { new(): hotelType };

interface _hoursPerDayGuestsOnsiteType extends _useAttributeBase {
	value?: hoursPerDayGuestsOnsiteTypeValueType;
}
export interface hoursPerDayGuestsOnsiteType extends _hoursPerDayGuestsOnsiteType { constructor: { new(): hoursPerDayGuestsOnsiteType }; }
export var hoursPerDayGuestsOnsiteType: { new(): hoursPerDayGuestsOnsiteType };

type hoursPerDayGuestsOnsiteTypeValueType = ("Less Than 15" | "15 To 19" | "More Than 20");
interface _hoursPerDayGuestsOnsiteTypeValueType extends Primitive._string { content: hoursPerDayGuestsOnsiteTypeValueType; }

interface _iceCurlingRinkType extends BaseType {}
export interface iceCurlingRinkType extends _iceCurlingRinkType { constructor: { new(): iceCurlingRinkType }; }
export var iceCurlingRinkType: { new(): iceCurlingRinkType };

/** Individual meter details. */
interface _IndividualMeterType extends BaseType {}
interface IndividualMeterType extends _IndividualMeterType { constructor: { new(): IndividualMeterType }; }

interface _indoorArenaType extends BaseType {}
export interface indoorArenaType extends _indoorArenaType { constructor: { new(): indoorArenaType }; }
export var indoorArenaType: { new(): indoorArenaType };

interface _InternationalWeatherStationListType extends BaseType {
	links?: linksType;
	/** International Weather Station information */
	station?: StationType[];
}
interface InternationalWeatherStationListType extends _InternationalWeatherStationListType { constructor: { new(): InternationalWeatherStationListType }; }

/** Irrigated area is the amount of outdoor vegetated area that is supplied water regularly, measured in square feet, square meters, or acres. */
interface _irrigationAreaType extends _irrigationAreaTypeBase {
	value?: string;
}
export interface irrigationAreaType extends _irrigationAreaType { constructor: { new(): irrigationAreaType }; }
export var irrigationAreaType: { new(): irrigationAreaType };

interface _irrigationAreaTypeBase extends BaseType {
	/** Specifies whether to use the default value for Irrigated Area. Only applicable for Multi-Family Housing. */
	default?: boolean;
	/** The units of the Irrigated Area (Square Foot, Square Meter, or Acres). */
	units: irrigationAreaUnitsType;
}
export interface irrigationAreaTypeBase extends _irrigationAreaTypeBase { constructor: { new(): irrigationAreaTypeBase }; }
export var irrigationAreaTypeBase: { new(): irrigationAreaTypeBase };

export type irrigationAreaUnitsType = ("Square Feet" | "Square Meters" | "Acres" | "");
interface _irrigationAreaUnitsType extends Primitive._string { content: irrigationAreaUnitsType; }

interface _itEnergyConfigurationType extends _useAttributeBase {
	value?: itEnergyConfigurationTypeValueType;
}
export interface itEnergyConfigurationType extends _itEnergyConfigurationType { constructor: { new(): itEnergyConfigurationType }; }
export var itEnergyConfigurationType: { new(): itEnergyConfigurationType };

type itEnergyConfigurationTypeValueType = ("UPS Supports Only IT Equipment" | "UPS Include Non IT Load Less Than 10%" | "UPS Include Non-IT Load Greater Than 10% Load Submetered" | "UPS Include Non IT Load Greater Than 10% Load Not Submetered" | "Facility Has No UPS" | "No IT Energy Configuration Selected");
interface _itEnergyConfigurationTypeValueType extends Primitive._string { content: itEnergyConfigurationTypeValueType; }

interface _k12SchoolType extends BaseType {}
export interface k12SchoolType extends _k12SchoolType { constructor: { new(): k12SchoolType }; }
export var k12SchoolType: { new(): k12SchoolType };

interface _lengthOfAllOpenClosedRefrigerationUnitsType extends _useAttributeBase {
	units: lengthUnitsType;
	value?: number;
}
export interface lengthOfAllOpenClosedRefrigerationUnitsType extends _lengthOfAllOpenClosedRefrigerationUnitsType { constructor: { new(): lengthOfAllOpenClosedRefrigerationUnitsType }; }
export var lengthOfAllOpenClosedRefrigerationUnitsType: { new(): lengthOfAllOpenClosedRefrigerationUnitsType };

export type lengthUnitsType = ("Feet" | "Meters");
interface _lengthUnitsType extends Primitive._string { content: lengthUnitsType; }

/** List of licenses for Professional Designation of the verifier. */
interface _LicenseListType extends BaseType {
	license?: LicenseType[];
}
interface LicenseListType extends _LicenseListType { constructor: { new(): LicenseListType }; }

/** License details for Professional Designations. */
interface _LicenseType extends BaseType {}
interface LicenseType extends _LicenseType { constructor: { new(): LicenseType }; }


interface _linksType extends BaseType {
	link?: linkType[];
}
export interface linksType extends _linksType { constructor: { new(): linksType }; }
export var linksType: { new(): linksType };

interface _linkType extends BaseType {
	/** The HTTP method to the web service call. */
	httpMethod: string;
	/** Indicates the unique Portfolio Manager identifier used to define this entity. */
	id: number;
	/** The URL to a web service call for subsequent processing. */
	link: string;
	/** The description of the link. */
	linkDescription: string;
}
export interface linkType extends _linkType { constructor: { new(): linkType }; }
export var linkType: { new(): linkType };

interface _logType extends BaseType {
	/** The username of the user who created the record.  This information is only available in an XML response. */
	createdBy?: string;
	/** The id of the user who created the record.  This information is only available in an XML response. */
	createdByAccountId?: number;
	/** The date and time stamp the record was created (in EST).  This information is only available in an XML response. */
	createdDate?: Date;
	/** The username of the user who performed the last update.   This information is only available in an XML response. */
	lastUpdatedBy?: string;
	/** The id of the user who performed the last update.   This information is only available in an XML response. */
	lastUpdatedByAccountId?: number;
	/** The date and time stamp of the last update (in EST).   This information is only available in an XML response. */
	lastUpdatedDate?: Date;
}
export interface logType extends _logType { constructor: { new(): logType }; }
export var logType: { new(): logType };

interface _mappingType extends BaseType {
	/** The id of the account, property, or meter needed to reference a customer, property, or meter for a given external identifier from ABS 2.5. */
	id?: number;
}
export interface mappingType extends _mappingType { constructor: { new(): mappingType }; }
export var mappingType: { new(): mappingType };

interface _medicalOfficeType extends BaseType {}
export interface medicalOfficeType extends _medicalOfficeType { constructor: { new(): medicalOfficeType }; }
export var medicalOfficeType: { new(): medicalOfficeType };

/** A service type used for representing a meter consumption entry */
interface _meterConsumptionType extends BaseType {
	id: number;
  startDate: Date;
  endDate: Date;
  usage: number;
  cost: optionalCost;
  energyExportedOffSite: number;
  greenPower: greenPowerType;
  RECOwnership: 'Owned' | 'Sold' | 'Arbitrage';
  demandTracking: demandTrackingType;
  audit: logType;
	/** Whether the meter consumption is an estimated value. */
	estimatedValue?: boolean;
	/** Whether the meter is for Green Power. */
	isGreenPower?: boolean;
}
export interface meterConsumptionType extends _meterConsumptionType { constructor: { new(): meterConsumptionType }; }
export var meterConsumptionType: { new(): meterConsumptionType };

/** A service type used for getting and receiving meter consumption data */
interface _meterDataType extends BaseType {
	links?: linksType;
	/** Consumption data used for a meter that is set up to be metered. */
	meterConsumption?: meterConsumptionType[];
	meterDelivery?: meterDeliveryType[];
}
export interface meterDataType extends _meterDataType { constructor: { new(): meterDataType }; }
export var meterDataType: { new(): meterDataType };

/** Delivery data used for a meter that is set up for bulk delivery. */
interface _meterDeliveryType extends BaseType {
	id: number;
  deliveryDate: Date;
  quantity: number;
  cost: optionalCost;
  audit: logType;
	estimatedValue?: boolean;
}
export interface meterDeliveryType extends _meterDeliveryType { constructor: { new(): meterDeliveryType }; }
export var meterDeliveryType: { new(): meterDeliveryType };

interface _meterListType extends BaseType {
	/** Id of the meter to associate to the specific property or property use. */
	meterId?: number[];
}
export interface meterListType extends _meterListType { constructor: { new(): meterListType }; }
export var meterListType: { new(): meterListType };

interface _meterPropertyAssociationListType extends BaseType {}
export interface meterPropertyAssociationListType extends _meterPropertyAssociationListType { constructor: { new(): meterPropertyAssociationListType }; }
export var meterPropertyAssociationListType: { new(): meterPropertyAssociationListType };

/** A service type used for representing a meter */
interface _meterType extends BaseType {
	id: number;
  type: typeOfMeter;
  name: string;
  metered: boolean;
  unitOfMeasure: designUnitOfMeasure;
  firstBillDate: Date;
  inUse: boolean;
  inactiveDate: Date;
  otherDescription: string;
  accessLevel: shareLevelType;
  aggregateMeter: boolean;
  audit: logType;
}
export interface meterType extends _meterType { constructor: { new(): meterType }; }
export var meterType: { new(): meterType };

interface _metric extends BaseType {
	/** The data type of the value for the metric (i.e., string, numeric, date). */
	dataType: dataType;
	/** The name of the metric. */
	name: string;
	/** The unit of measure of the metric. */
	uom: string;
	/** The value of the Monthly metric. */
	monthlyMetric?: reportMetricValuesWs[];
	/** The value of the Non-Monthly metric. */
	value?: string;
}
export interface metric extends _metric { constructor: { new(): metric }; }
export var metric: { new(): metric };

interface _monthsInUseType extends _useAttributeBase {
	value?: number;
}
export interface monthsInUseType extends _monthsInUseType { constructor: { new(): monthsInUseType }; }
export var monthsInUseType: { new(): monthsInUseType };

type monthsInUseTypeValueType = number;
type _monthsInUseTypeValueType = Primitive._number;

interface _monthsSchoolInUseType extends _useAttributeBase {
	value?: number;
}
export interface monthsSchoolInUseType extends _monthsSchoolInUseType { constructor: { new(): monthsSchoolInUseType }; }
export var monthsSchoolInUseType: { new(): monthsSchoolInUseType };

type monthsSchoolInUseTypeValueType = number;
type _monthsSchoolInUseTypeValueType = Primitive._number;

interface _multifamilyHousingType extends BaseType {}
export interface multifamilyHousingType extends _multifamilyHousingType { constructor: { new(): multifamilyHousingType }; }
export var multifamilyHousingType: { new(): multifamilyHousingType };

export type noNegativePrecision = number;
type _noNegativePrecision = Primitive._number;

interface _nonRefrigeratedWarehouseType extends BaseType {}
export interface nonRefrigeratedWarehouseType extends _nonRefrigeratedWarehouseType { constructor: { new(): nonRefrigeratedWarehouseType }; }
export var nonRefrigeratedWarehouseType: { new(): nonRefrigeratedWarehouseType };

interface _notificationListType extends BaseType {
	notification?: notificationType[];
}
export interface notificationListType extends _notificationListType { constructor: { new(): notificationListType }; }
export var notificationListType: { new(): notificationListType };

interface _notificationType extends BaseType {
	/** The id number of the account to the corresponding notification. */
	accountId?: number;
	/** The description of the notification. */
	description: string;
	/** The id number of the meter to the corresponding notification. */
	meterId?: number;
	/** The account name of the user who created the corresponding notification. */
	notificationCreatedBy?: string;
	/** The account id of the user who created the corresponding notification. */
	notificationCreatedByAccountId?: string;
	notificationCreatedDate?: Date;
	/** The id number of the notification. */
	notificationId: number;
	/** The notification type code of the notification. */
	notificationTypeCode: string;
	/** The id number of the property to the corresponding notification. */
	propertyId?: number;
	/** The username of the Portfolio Manager Account to the corresponding notification. */
	username: string;
}
export interface notificationType extends _notificationType { constructor: { new(): notificationType }; }
export var notificationType: { new(): notificationType };

interface _numberOfWeekdaysType extends _useAttributeBase {
	value?: number;
}
export interface numberOfWeekdaysType extends _numberOfWeekdaysType { constructor: { new(): numberOfWeekdaysType }; }
export var numberOfWeekdaysType: { new(): numberOfWeekdaysType };

type numberOfWeekdaysTypeValueType = number;
type _numberOfWeekdaysTypeValueType = Primitive._number;

interface _numberOfWeeklyIceResurfacingType extends _useAttributeBase {
	value?: number;
}
export interface numberOfWeeklyIceResurfacingType extends _numberOfWeeklyIceResurfacingType { constructor: { new(): numberOfWeeklyIceResurfacingType }; }
export var numberOfWeeklyIceResurfacingType: { new(): numberOfWeeklyIceResurfacingType };

type numberOfWeeklyIceResurfacingTypeValueType = number;
type _numberOfWeeklyIceResurfacingTypeValueType = Primitive._number;

export type OccupancyType = (0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100);
interface _OccupancyType extends Primitive._number { content: OccupancyType; }

interface _officeType extends BaseType {}
export interface officeType extends _officeType { constructor: { new(): officeType }; }
export var officeType: { new(): officeType };

interface _onsiteLaundryType extends _useAttributeBase {
	value?: onsiteLaundryTypeValueType;
}
export interface onsiteLaundryType extends _onsiteLaundryType { constructor: { new(): onsiteLaundryType }; }
export var onsiteLaundryType: { new(): onsiteLaundryType };

type onsiteLaundryTypeValueType = ("Linens only" | "Terry only" | "Both linens and terry" | "No laundry facility");
interface _onsiteLaundryTypeValueType extends Primitive._string { content: onsiteLaundryTypeValueType; }

export type optionalCost = string;
type _optionalCost = Primitive._string;

export type optionalDemand = string;
type _optionalDemand = Primitive._string;

interface _optionalFloorAreaType extends _floorAreaTypeBase {
	value?: number;
}
export interface optionalFloorAreaType extends _optionalFloorAreaType { constructor: { new(): optionalFloorAreaType }; }
export var optionalFloorAreaType: { new(): optionalFloorAreaType };

export type optionalWasteCost = string;
type _optionalWasteCost = Primitive._string;

interface _organizationType extends BaseType {
	/** Your Organization's name. */
	name: string;
}
export interface organizationType extends _organizationType { constructor: { new(): organizationType }; }
export var organizationType: { new(): organizationType };

type organizationTypeNameType = string;
type _organizationTypeNameType = Primitive._string;

interface _otherStadiumType extends BaseType {}
export interface otherStadiumType extends _otherStadiumType { constructor: { new(): otherStadiumType }; }
export var otherStadiumType: { new(): otherStadiumType };

interface _otherType extends BaseType {}
export interface otherType extends _otherType { constructor: { new(): otherType }; }
export var otherType: { new(): otherType };

interface _ownedByType extends _useAttributeBase {
	value?: ownedByTypeValueType;
}
export interface ownedByType extends _ownedByType { constructor: { new(): ownedByType }; }
export var ownedByType: { new(): ownedByType };

type ownedByTypeValueType = ("For Profit" | "Non Profit" | "Governmental");
interface _ownedByTypeValueType extends Primitive._string { content: ownedByTypeValueType; }

interface _parkingType extends BaseType {}
export interface parkingType extends _parkingType { constructor: { new(): parkingType }; }
export var parkingType: { new(): parkingType };

interface _pendingAccountsType extends BaseType {
	/** The id of the Portfolio Manager Account requesting to connect with you. */
	accountId: number;
	accountInfo: AccountInfoType;
	connectionAudit?: logType;
	customFieldList?: CustomFieldListType;
	/** The username of the Portfolio Manager Account requesting to connect with you. */
	username: string;
}
export interface pendingAccountsType extends _pendingAccountsType { constructor: { new(): pendingAccountsType }; }
export var pendingAccountsType: { new(): pendingAccountsType };

interface _pendingListType extends BaseType {
	/** Indicates a pending connection request and detailed information. */
	account?: pendingAccountsType[];
	links?: linksType;
	/** Indicates a pending meter share request and detailed information */
	meter?: pendingMetersType[];
	/** Indicates a pending property share request and detailed information. */
	property?: pendingPropertiesType[];
}
export interface pendingListType extends _pendingListType { constructor: { new(): pendingListType }; }
export var pendingListType: { new(): pendingListType };

interface _pendingMetersType extends BaseType {
	/** The level of access for the meter share request:  Read or Read Write */
	accessLevel: shareLevelType;
	/** The id to the account requesting the meter share. */
	accountId: number;
	customFieldList?: CustomFieldListType;
	/** The id of the meter. */
	meterId: number;
	meterInfo?: meterType;
	/** The id of the corresponding property. */
	propertyId: number;
	propertyInfo: propertyType;
	shareAudit?: logType;
	/** The username of the Portfolio Manager Account requesting the meter share. */
	username: string;
	wasteMeterInfo?: typeOfWasteMeter;
}
export interface pendingMetersType extends _pendingMetersType { constructor: { new(): pendingMetersType }; }
export var pendingMetersType: { new(): pendingMetersType };

interface _pendingPropertiesType extends BaseType {
	/** The level of access for the property share request:  Read or Read Write. */
	accessLevel: shareLevelType;
	/** The id to the account requesting the property share. */
	accountId: number;
	customFieldList?: CustomFieldListType;
	/** The ID number of the property. */
	propertyId: number;
	propertyInfo: propertyType;
	shareAudit?: logType;
	/** The username of the Portfolio Manager Account requesting the property share. */
	username: string;
}
export interface pendingPropertiesType extends _pendingPropertiesType { constructor: { new(): pendingPropertiesType }; }
export var pendingPropertiesType: { new(): pendingPropertiesType };

interface _percentCooledType extends _useAttributeBase {
	value?: percentCooledTypeValueType;
}
export interface percentCooledType extends _percentCooledType { constructor: { new(): percentCooledType }; }
export var percentCooledType: { new(): percentCooledType };

type percentCooledTypeValueType = ("0" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100");
interface _percentCooledTypeValueType extends Primitive._string { content: percentCooledTypeValueType; }

interface _percentHeatedType extends _useAttributeBase {
	value?: percentHeatedTypeValueType;
}
export interface percentHeatedType extends _percentHeatedType { constructor: { new(): percentHeatedType }; }
export var percentHeatedType: { new(): percentHeatedType };

type percentHeatedTypeValueType = ("0" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100");
interface _percentHeatedTypeValueType extends Primitive._string { content: percentHeatedTypeValueType; }

interface _percentOfficeCooledType extends _useAttributeBase {
	value?: percentOfficeCooledTypeValueType;
}
export interface percentOfficeCooledType extends _percentOfficeCooledType { constructor: { new(): percentOfficeCooledType }; }
export var percentOfficeCooledType: { new(): percentOfficeCooledType };

type percentOfficeCooledTypeValueType = ("50% or more" | "Less than 50%" | "Not Air Conditioned");
interface _percentOfficeCooledTypeValueType extends Primitive._string { content: percentOfficeCooledTypeValueType; }

interface _percentOfficeHeatedType extends _useAttributeBase {
	value?: percentOfficeHeatedTypeValueType;
}
export interface percentOfficeHeatedType extends _percentOfficeHeatedType { constructor: { new(): percentOfficeHeatedType }; }
export var percentOfficeHeatedType: { new(): percentOfficeHeatedType };

type percentOfficeHeatedTypeValueType = ("50% or more" | "Less than 50%" | "Not Heated");
interface _percentOfficeHeatedTypeValueType extends Primitive._string { content: percentOfficeHeatedTypeValueType; }

interface _performanceTargetType extends BaseType {
	/** Target metric option */
	targetMetric: performanceTargetTypeTargetMetricType;
	/** Target metric value used for the selected target metric.  This is not required if a "No Target" metric is selected.  For target metric options of "Target % Better than Baseline" and "Target % Better than Median", the valid range is 0-100.  For "Target ENERGY STAR Score", the valid range is 1-100. */
	targetValue?: performanceTargetTypeTargetValueType;
}
export interface performanceTargetType extends _performanceTargetType { constructor: { new(): performanceTargetType }; }
export var performanceTargetType: { new(): performanceTargetType };

type performanceTargetTypeTargetMetricType = ("No Target" | "Target ENERGY STAR Score" | "Target % Better than Baseline" | "Target % Better than Median");
interface _performanceTargetTypeTargetMetricType extends Primitive._string { content: performanceTargetTypeTargetMetricType; }

type performanceTargetTypeTargetValueType = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100);
interface _performanceTargetTypeTargetValueType extends Primitive._number { content: performanceTargetTypeTargetValueType; }

interface _PgpListType extends BaseType {
	/** Power Generation Plant information */
	pgp?: PgpType[];
}
interface PgpListType extends _PgpListType { constructor: { new(): PgpListType }; }

interface _PgpType extends BaseType {
	/** The code of the eGrid Subregion that the PGP belongs to. */
	eGridCode?: string;
	/** The name of the eGrid Subregion that the PGP belongs to. */
	eGridName?: string;
	/** The name of PGP (power generation plant). */
	name?: string;
	/** The ORIS plant code. */
	plantCode: number;
	/** Whether the property is currently assigned to this PGP. */
	selected?: boolean;
}
interface PgpType extends _PgpType { constructor: { new(): PgpType }; }

interface _PlantDesignFlowRateType extends _useAttributeBase {
	units: PlantDesignFlowRateUnitsType;
	value: number;
}
export interface PlantDesignFlowRateType extends _PlantDesignFlowRateType { constructor: { new(): PlantDesignFlowRateType }; }
export var PlantDesignFlowRateType: { new(): PlantDesignFlowRateType };

export type PlantDesignFlowRateUnitsType = ("Million Gallons per Day" | "Cubic Meters per Day");
interface _PlantDesignFlowRateUnitsType extends Primitive._string { content: PlantDesignFlowRateUnitsType; }

interface _poolSizeType extends _useAttributeBase {
	value?: poolSizeTypeValueType;
}
export interface poolSizeType extends _poolSizeType { constructor: { new(): poolSizeType }; }
export var poolSizeType: { new(): poolSizeType };

type poolSizeTypeValueType = ("Recreational (20 yards x 15 yards)" | "Short Course (25 yards x 20 yards)" | "Olympic (50 meters x 25 meters)");
interface _poolSizeTypeValueType extends Primitive._string { content: poolSizeTypeValueType; }

interface _poolType extends _useAttributeBase {
	value?: poolTypeValueType;
}
export interface poolType extends _poolType { constructor: { new(): poolType }; }
export var poolType: { new(): poolType };

type poolTypeValueType = ("Indoor" | "Outdoor");
interface _poolTypeValueType extends Primitive._string { content: poolTypeValueType; }

export type primaryBusinessType = ("Architecture/Design Firm" | "Banking/Financial" | "Commercial Real Estate" | "Congregation/Faith-Based Organization" | "Data Center" | "Drinking Water Treatment/Distribution" | "Education" | "Energy Efficiency Program" | "Entertainment/Recreation" | "Food Service" | "Government: Local (U.S.)" | "Government: Outside U.S." | "Government: State (U.S.)" | "Government: Federal (U.S.)" | "Healthcare" | "Hospitality" | "Legal Services" | "Manufacturing/Industrial" | "Media" | "Multifamily Housing" | "Retail" | "Senior Care" | "Service and Product Provider/Consultant" | "Transportation" | "Utility" | "Wastewater Treatment" | "Other");
interface _primaryBusinessType extends Primitive._string { content: primaryBusinessType; }

export type primaryFunctionType = ("Adult Education" | "Ambulatory Surgical Center" | "Aquarium" | "Automobile Dealership" | "Bank Branch" | "Bar/Nightclub" | "Barracks" | "Bowling Alley" | "Casino" | "College/University" | "Convenience Store with Gas Station" | "Convenience Store without Gas Station" | "Convention Center" | "Courthouse" | "Data Center" | "Distribution Center" | "Drinking Water Treatment & Distribution" | "Enclosed Mall" | "Energy/Power Station" | "Fast Food Restaurant" | "Financial Office" | "Fire Station" | "Fitness Center/Health Club/Gym" | "Food Sales" | "Food Service" | "Hospital (General Medical & Surgical)" | "Hotel" | "Ice/Curling Rink" | "Indoor Arena" | "K-12 School" | "Laboratory" | "Library" | "Lifestyle Center" | "Mailing Center/Post Office" | "Manufacturing/Industrial Plant" | "Medical Office" | "Mixed Use Property" | "Movie Theater" | "Multifamily Housing" | "Museum" | "Non-Refrigerated Warehouse" | "Office" | "Other - Education" | "Other - Entertainment/Public Assembly" | "Other - Lodging/Residential" | "Other - Mall" | "Other - Public Services" | "Other - Recreation" | "Other - Restaurant/Bar" | "Other - Services" | "Other - Stadium" | "Other - Technology/Science" | "Other - Utility" | "Other" | "Other/Specialty Hospital" | "Outpatient Rehabilitation/Physical Therapy" | "Parking" | "Performing Arts" | "Personal Services (Health/Beauty, Dry Cleaning, etc)" | "Police Station" | "Pre-school/Daycare" | "Prison/Incarceration" | "Race Track" | "Refrigerated Warehouse" | "Repair Services (Vehicle, Shoe, Locksmith, etc)" | "Residence Hall/Dormitory" | "Residential Care Facility" | "Restaurant" | "Retail Store" | "Roller Rink" | "Self-Storage Facility" | "Senior Living Community" | "Single Family Home" | "Social/Meeting Hall" | "Stadium (Closed)" | "Stadium (Open)" | "Strip Mall" | "Supermarket/Grocery Store" | "Swimming Pool" | "Transportation Terminal/Station" | "Urgent Care/Clinic/Other Outpatient" | "Veterinary Office" | "Vocational School" | "Wastewater Treatment Plant" | "Wholesale Club/Supercenter" | "Worship Facility" | "Zoo");
interface _primaryFunctionType extends Primitive._string { content: primaryFunctionType; }

/** Represents a list of professional designations of the verifier. */
interface _ProfessionalDesignationListType extends BaseType {
	professionalDesignation: ProfessionalDesignationListTypeProfessionalDesignationType[];
}
interface ProfessionalDesignationListType extends _ProfessionalDesignationListType { constructor: { new(): ProfessionalDesignationListType }; }

/** Professional Designation of the verifier. Designations include Professional Engineer, Registered Architect, CEM, ASHRAE, Other and No Professional Designation. */
interface _ProfessionalDesignationListTypeProfessionalDesignationType extends BaseType {
	/** Designation Code */
	id: string;
	/** Designation code description */
	name?: string;
	licenseList?: LicenseListType;
}
interface ProfessionalDesignationListTypeProfessionalDesignationType extends _ProfessionalDesignationListTypeProfessionalDesignationType { constructor: { new(): ProfessionalDesignationListTypeProfessionalDesignationType }; }

interface _propertyDesignType extends BaseType {}
export interface propertyDesignType extends _propertyDesignType { constructor: { new(): propertyDesignType }; }
export var propertyDesignType: { new(): propertyDesignType };

interface _propertyMetricsList extends BaseType {
	/** All metrics reflect the 12 months ending on the given month and year. */
	propertyMetrics?: propertyMetricsType[];
}
export interface propertyMetricsList extends _propertyMetricsList { constructor: { new(): propertyMetricsList }; }
export var propertyMetricsList: { new(): propertyMetricsList };

interface _propertyMetricsType extends BaseType {
	/** The month of the period ending date for the set of metrics. */
	month: number;
	/** The id of the property. */
	propertyId: number;
	/** The year of the period ending date for the set of metrics. */
	year: number;
	metric?: metric[];
}
export interface propertyMetricsType extends _propertyMetricsType { constructor: { new(): propertyMetricsType }; }
export var propertyMetricsType: { new(): propertyMetricsType };

type propertyMetricsTypeMonthType = number;
type _propertyMetricsTypeMonthType = Primitive._number;

/** Indicates whether the whole facility energy consumption or only a portion of that total is represented by its meters. (Added 03/2011) */
interface _PropertyRepresentationType extends BaseType {}
interface PropertyRepresentationType extends _PropertyRepresentationType { constructor: { new(): PropertyRepresentationType }; }

interface _propertyType extends BaseType {
	name: string;
  constructionStatus: constructionStatusType;
  primaryFunction: primaryFunctionType;
  grossFloorArea: grossFloorAreaType;
  irrigatedArea: irrigationAreaType;
  yearBuilt: number;
  address: addressType;
  numberOfBuildings: number;
  isFederalProperty: boolean;
  federalOwner: countryList;
  agency: AgencyType;
  agencyDepartmentRegion: string;
  federalCampus: string;
  occupancyPercentage: OccupancyType;
  notes: string;
  isInstitutionalProperty: boolean;
  accessLevel: shareLevelType;
  audit: logType;
}
export interface propertyType extends _propertyType { constructor: { new(): propertyType }; }
export var propertyType: { new(): propertyType };

export type propertyUseNameType = string;
type _propertyUseNameType = Primitive._string;

interface _PropertyUseType extends BaseType {}
interface PropertyUseType extends _PropertyUseType { constructor: { new(): PropertyUseType }; }

interface _refrigeratedWarehouseType extends BaseType {}
export interface refrigeratedWarehouseType extends _refrigeratedWarehouseType { constructor: { new(): refrigeratedWarehouseType }; }
export var refrigeratedWarehouseType: { new(): refrigeratedWarehouseType };

interface _reportMetricValuesWs extends BaseType {
	/** The month of the period ending date for the set of metrics. */
	month: string;
	/** The year of the period ending date for the set of metrics. */
	year: string;
	/** The value of the Monthly metric. */
	value?: string[];
}
export interface reportMetricValuesWs extends _reportMetricValuesWs { constructor: { new(): reportMetricValuesWs }; }
export var reportMetricValuesWs: { new(): reportMetricValuesWs };

interface _residenceHallDormitoryType extends BaseType {}
export interface residenceHallDormitoryType extends _residenceHallDormitoryType { constructor: { new(): residenceHallDormitoryType }; }
export var residenceHallDormitoryType: { new(): residenceHallDormitoryType };

interface _residentialCareFacilityType extends BaseType {}
export interface residentialCareFacilityType extends _residentialCareFacilityType { constructor: { new(): residentialCareFacilityType }; }
export var residentialCareFacilityType: { new(): residentialCareFacilityType };

interface _residentPopulationType extends _useAttributeBase {
	value?: residentPopulationTypeValueType;
}
export interface residentPopulationType extends _residentPopulationType { constructor: { new(): residentPopulationType }; }
export var residentPopulationType: { new(): residentPopulationType };

type residentPopulationTypeValueType = ("No specific resident population" | "Dedicated Student" | "Dedicated Military" | "Dedicated Senior/Independent Living" | "Dedicated Special Accessibility Needs" | "Other dedicated housing");
interface _residentPopulationTypeValueType extends Primitive._string { content: residentPopulationTypeValueType; }

/** A response of the operation. */
interface _responseType extends BaseType {
	/** The status of the web service call.  Either Ok or Error. */
	status: statusType;
	errors?: errorsType;
	/** The id of the entity that you are trying to add or update. */
	id?: number;
	links?: linksType;
	warnings?: warningsType;
}
export interface responseType extends _responseType { constructor: { new(): responseType }; }
export var responseType: { new(): responseType };

interface _retailType extends BaseType {}
export interface retailType extends _retailType { constructor: { new(): retailType }; }
export var retailType: { new(): retailType };

interface _selfStorageFacilityType extends BaseType {}
export interface selfStorageFacilityType extends _selfStorageFacilityType { constructor: { new(): selfStorageFacilityType }; }
export var selfStorageFacilityType: { new(): selfStorageFacilityType };

interface _seniorLivingCommunityType extends BaseType {}
export interface seniorLivingCommunityType extends _seniorLivingCommunityType { constructor: { new(): seniorLivingCommunityType }; }
export var seniorLivingCommunityType: { new(): seniorLivingCommunityType };

/** The sharing level */
export type shareLevelType = ("Read" | "Read Write");
interface _shareLevelType extends Primitive._string { content: shareLevelType; }

interface _sharingResponseType extends BaseType {
	/** The action you want to take in response to the share request (either Accept or Reject). */
	action: acceptRejectType;
	/** The optional note that you can include with your accept/reject response. */
	note?: string;
}
export interface sharingResponseType extends _sharingResponseType { constructor: { new(): sharingResponseType }; }
export var sharingResponseType: { new(): sharingResponseType };

type sharingResponseTypeNoteType = string;
type _sharingResponseTypeNoteType = Primitive._string;

interface _singleFamilyHomeType extends BaseType {}
export interface singleFamilyHomeType extends _singleFamilyHomeType { constructor: { new(): singleFamilyHomeType }; }
export var singleFamilyHomeType: { new(): singleFamilyHomeType };

interface _stadiumClosedType extends BaseType {}
export interface stadiumClosedType extends _stadiumClosedType { constructor: { new(): stadiumClosedType }; }
export var stadiumClosedType: { new(): stadiumClosedType };

interface _stadiumOpenType extends BaseType {}
export interface stadiumOpenType extends _stadiumOpenType { constructor: { new(): stadiumOpenType }; }
export var stadiumOpenType: { new(): stadiumOpenType };

export type stateCode = ("AK" | "AL" | "AR" | "AS" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "GU" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MH" | "MI" | "MN" | "MO" | "MP" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NN" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "PI" | "PR" | "RI" | "SC" | "SD" | "TN" | "TT" | "TX" | "UM" | "UT" | "VA" | "VI" | "VT" | "WA" | "WI" | "WQ" | "WV" | "WY" | "AB" | "BC" | "MB" | "NB" | "NL" | "NS" | "NT" | "NU" | "ON" | "PE" | "QC" | "SK" | "YT");
interface _stateCode extends Primitive._string { content: stateCode; }

interface _StationType extends BaseType {
	/** The country code (ISO 3166) of the station. */
	country: string;
	/** The country name of the station. */
	countryName: string;
	/** The station WMO id. */
	id: number;
	/** The name of the station. */
	stationName: string;
}
interface StationType extends _StationType { constructor: { new(): StationType }; }

export type statusType = ("Ok" | "Error");
interface _statusType extends Primitive._string { content: statusType; }

interface _supermarketType extends BaseType {}
export interface supermarketType extends _supermarketType { constructor: { new(): supermarketType }; }
export var supermarketType: { new(): supermarketType };

interface _swimmingPoolType extends BaseType {}
export interface swimmingPoolType extends _swimmingPoolType { constructor: { new(): swimmingPoolType }; }
export var swimmingPoolType: { new(): swimmingPoolType };

interface _targetTypePercentageType extends BaseType {
	value: targetTypePercentageValuesType;
}
export interface targetTypePercentageType extends _targetTypePercentageType { constructor: { new(): targetTypePercentageType }; }
export var targetTypePercentageType: { new(): targetTypePercentageType };

export type targetTypePercentageValuesType = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100);
interface _targetTypePercentageValuesType extends Primitive._number { content: targetTypePercentageValuesType; }

interface _targetTypeScoreType extends BaseType {
	value: targetTypeScoreValuesType;
}
export interface targetTypeScoreType extends _targetTypeScoreType { constructor: { new(): targetTypeScoreType }; }
export var targetTypeScoreType: { new(): targetTypeScoreType };

export type targetTypeScoreValuesType = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100);
interface _targetTypeScoreValuesType extends Primitive._number { content: targetTypeScoreValuesType; }

/** Lists of energy uses for the Combination of Tenant and Common Area Consumption metering configuration. At least one must be selected. (Added 11/2011). */
export type tenantCommonAreaEnergyType = ("Tenant Heating" | "Tenant Cooling" | "Tenant Hot Water" | "Tenant Plug Load/Electricity" | "Common Area Heating" | "Common Area Cooling" | "Common Area Hot Water" | "Common Area Plug Load/Electricity");
interface _tenantCommonAreaEnergyType extends Primitive._string { content: tenantCommonAreaEnergyType; }

interface _tenantCommonAreaEnergyUseInformationType extends BaseType {
	/** Indicates the various energy uses if a "Combination of Tenant and Common Area Consumption" meter configuration type is selected. This is only required when a metering configuration type of "Combination of Tenant and Common Area Consumption" is specified. At least one of the 8 options must be selected. */
	energyUse: tenantCommonAreaEnergyType[];
}
export interface tenantCommonAreaEnergyUseInformationType extends _tenantCommonAreaEnergyUseInformationType { constructor: { new(): tenantCommonAreaEnergyUseInformationType }; }
export var tenantCommonAreaEnergyUseInformationType: { new(): tenantCommonAreaEnergyUseInformationType };

interface _terminateShareResponseType extends BaseType {
	/** The optional note that you can include with your termination request. */
	note?: string;
}
export interface terminateShareResponseType extends _terminateShareResponseType { constructor: { new(): terminateShareResponseType }; }
export var terminateShareResponseType: { new(): terminateShareResponseType };

type terminateShareResponseTypeNoteType = string;
type _terminateShareResponseTypeNoteType = Primitive._string;

export type typeOfEnergyStarPartner = ("Associations" | "Organizations that Own/Manage/Lease Buildings and Plants" | "Service and Product Providers" | "Small Businesses" | "Utilities and Energy Efficiency Program Sponsors" | "Other");
interface _typeOfEnergyStarPartner extends Primitive._string { content: typeOfEnergyStarPartner; }

export type typeOfMeter = ("Coal Anthracite" | "Coal Bituminous" | "Coke" | "Diesel" | "District Chilled Water - Absorption Chiller using Natural Gas" | "District Chilled Water - Electric-Driven Chiller" | "District Chilled Water - Engine-Driven Chiller using Natural Gas" | "District Chilled Water - Other" | "District Hot Water" | "District Steam" | "Electric" | "Electric on Site Solar" | "Electric on Site Wind" | "Fuel Oil No 1" | "Fuel Oil No 2" | "Fuel Oil No 4" | "Fuel Oil No 5 or 6" | "Kerosene" | "Natural Gas" | "Other (Energy)" | "Propane" | "Wood" | "IT Equipment Input Energy (meters on each piece of equipment)" | "Power Distribution Unit (PDU) Input Energy" | "Power Distribution Unit (PDU) Output Energy" | "Uninterruptible Power Supply (UPS) Output Energy" | "Municipally Supplied Potable Water - Mixed Indoor/Outdoor" | "Municipally Supplied Potable Water - Indoor" | "Municipally Supplied Potable Water - Outdoor" | "Municipally Supplied Reclaimed Water - Mixed Indoor/Outdoor" | "Municipally Supplied Reclaimed Water - Indoor" | "Municipally Supplied Reclaimed Water - Outdoor" | "Other - Mixed Indoor/Outdoor (Water)" | "Other - Outdoor" | "Other - Indoor" | "Average Influent Flow" | "Well Water - Mixed Indoor/Outdoor" | "Well Water - Indoor" | "Well Water - Outdoor");
interface _typeOfMeter extends Primitive._string { content: typeOfMeter; }

interface _typeOfWasteMeter extends BaseType {}
export interface typeOfWasteMeter extends _typeOfWasteMeter { constructor: { new(): typeOfWasteMeter }; }
export var typeOfWasteMeter: { new(): typeOfWasteMeter };

interface _unAuthDesignType extends BaseType {}
export interface unAuthDesignType extends _unAuthDesignType { constructor: { new(): unAuthDesignType }; }
export var unAuthDesignType: { new(): unAuthDesignType };

interface _upsSystemRedundancyType extends _useAttributeBase {
	value?: upsSystemRedundancyTypeValueType;
}
export interface upsSystemRedundancyType extends _upsSystemRedundancyType { constructor: { new(): upsSystemRedundancyType }; }
export var upsSystemRedundancyType: { new(): upsSystemRedundancyType };

type upsSystemRedundancyTypeValueType = ("N" | "N+1" | "N+2" | "2N" | "Greater than 2N" | "None of the Above");
interface _upsSystemRedundancyTypeValueType extends Primitive._string { content: upsSystemRedundancyTypeValueType; }

interface _useAttributeBase extends BaseType {
	/** The date that the characteristic is current as of. */
	currentAsOf?: Date;
	/** Indicates whether the value for this characteristic was calculated by the system
	  * using default values (Yes, No, or N/A). If the characteristic is required for benchmarking and the value is being defaulted then it is set to Yes otherwise No.  If the
	  * characteristic is not required for benchmarking then it is set to N/A. This attribute only applies to retrieving data.  It will be ignored if provided as input.
	  * Also note that even though gross floor area is required for benchmarking, it is set to No since the system never provides a value for that characteristic. */
	default?: useAttributeBaseDefaultType;
	id?: number;
	/** The characteristic is a temporary value (true/false) */
	temporary?: boolean;
	audit?: logType;
}
export interface useAttributeBase extends _useAttributeBase { constructor: { new(): useAttributeBase }; }
export var useAttributeBase: { new(): useAttributeBase };

type useAttributeBaseDefaultType = ("Yes" | "No" | "N/A");
interface _useAttributeBaseDefaultType extends Primitive._string { content: useAttributeBaseDefaultType; }

interface _useDecimalType extends _useAttributeBase {
	value?: number;
}
export interface useDecimalType extends _useDecimalType { constructor: { new(): useDecimalType }; }
export var useDecimalType: { new(): useDecimalType };

type useDecimalTypeValueType = number;
type _useDecimalTypeValueType = Primitive._number;

interface _UseDetailsType extends BaseType {
	/** Quantity of laundry processed at the property. */
	amountOfLaundryProcessedAnnually?: amountOfLaundryProcessedAnnuallyType[];
	/** Area of all walk-in refrigeration/freezer units - include only commercial type units that a person actually walks into to retrieve goods.  See numberOfWalkInRefrigerationUnits for more information. */
	areaOfAllWalkInRefrigerationUnits?: optionalFloorAreaType[];
	/** The concentration of effluent Biological Oxygen Demand (BOD5) at a wastewater treatment plant. */
	averageEffluentBiologicalOxygenDemand?: useDecimalType[];
	/** The concentration of influent Biological Oxygen Demand (BOD5) at a wastewater treatment plant. */
	averageInfluentBiologicalOxygenDemand?: useDecimalType[];
	/** Annual average number of residents at the property. */
	averageNumberOfResidents?: useDecimalType[];
	/** The distance measured from the floor to the lowest overhead obstruction for the majority of the warehouse space. */
	clearHeight?: clearHeightUnitsType[];
	/** Indicates presence of common entrance: Yes and No are 2 options and 1 or 0 is used. */
	commonEntrance?: useYesNoType[];
	/** Area of parking garage that is completely enclosed. */
	completelyEnclosedFootage?: grossFloorAreaType[];
	/** Whether there are Cooking Facilities. */
	cookingFacilities?: useYesNoType[];
	/** Level of redundancy for the cooling equipment in a Data Center. */
	coolingEquipmentRedundancy?: coolingEquipmentRedundancyType[];
	/** Total enclosed floor area at a Stadium/Arena. */
	enclosedFloorArea?: optionalFloorAreaType[];
	enrollment?: useDecimalType[];
	/** Whether Data Center IT energy estimates are applied. */
	estimatesApplied?: useYesNoType[];
	/** Whether there is an Exterior Entrance to the Public. */
	exteriorEntranceToThePublic?: useYesNoType[];
	/** Whether there is a Fixed Film Trickle Filtration Process. */
	fixedFilmTrickleFiltrationProcess?: useYesNoType[];
	/** Floor area associated with a Full Service Spa. */
	fullServiceSpaFloorArea?: optionalFloorAreaType[];
	/** Whether this is housing that is subsidized by the local, state, or Federal government. */
	governmentSubsidizedHousing?: useYesNoType[];
	grantDollars?: useDecimalType[];
	/** The Gross Floor Area that is Hotel Conference Space is the total size of all conference spaces. This will be a subset of Gross Floor Area for the property. */
	grossFloorAreaHotelConferenceSpace?: optionalFloorAreaType[];
	/** The Gross Floor Area Used for Food Preparation is the total size of all large/commercial kitchen areas used for the storage and preparation of food. This will be a subset of Gross Floor Area for the property. */
	grossFloorAreaUsedForFoodPreparation?: optionalFloorAreaType[];
	/** Floor area associated with a Gym/Fitness Center. */
	gymCenterFloorArea?: optionalFloorAreaType[];
	/** Floor area associated with a gymnasium at a K12 School. */
	gymnasiumFloorArea?: optionalFloorAreaType[];
	/** Whether there is a Computer Lab. */
	hasComputerLab?: useYesNoType[];
	/** Whether there is a Dining Hall. */
	hasDiningHall?: useYesNoType[];
	/** Presence of a laboratory (Yes/No). */
	hasLaboratory?: useYesNoType[];
	/** Number of hours per day a typical guest spends at the property (Less Than 15, 15 To 19, More Than 20) */
	hoursPerDayGuestsOnsite?: hoursPerDayGuestsOnsiteType[];
	/** Are there ice-related events such as Hockey, Skating, Ice Capades? */
	iceEvents?: useYesNoType[];
	/** Presence of a High School, as indicated by education of grades 10, 11, and/or 12 (Yes/No). */
	isHighSchool?: useYesNoType[];
	/** Presence of tertiary medical care, specialized care beyond a typical secondary level, such as Level 1 trauma centers, organ transplant, or prenatal intensive care units (Yes/No). */
	isTertiaryCare?: useYesNoType[];
	/** The IT Energy Configuration/location of IT Energy meters at a data center. */
	itEnergyMeterConfiguration?: itEnergyConfigurationType[];
	/** Type of laundry processed at the property (linens, Terry, Linens & Terry) */
	laundryFacility?: onsiteLaundryType[];
	/** Length of all open or closed Refrigeration or Freezer cases that are used for the sale or storage of perishable goods. Include display-type refrigerated open or closed cases and cabinets, as well as display-type freezer units. These are typically found on the sales floor.   See numberOfOpenClosedRefrigerationUnits for more information. */
	lengthOfAllOpenClosedRefrigerationUnits?: lengthOfAllOpenClosedRefrigerationUnitsType[];
	/** Licensed Bed Capacity is the total number of beds that your hospital is licensed to have in operation. This may be more than your Staffed Beds, which are those that are set up and ready for use. */
	licensedBedCapacity?: useDecimalType[];
	links?: linksType;
	/** Maximum number of floors in the tallest building at the property. */
	maximumNumberOfFloors?: useIntegerType[];
	/** Maximum capacity of residents, based on the design of the facility. */
	maximumResidentCapacity?: useDecimalType[];
	/** Number of months per year the property is in use. */
	monthsInUse?: monthsInUseType[];
	/** Number of months per year the property is in use. */
	monthsMainIndoorIceRinkInUse?: monthsInUseType[];
	/** Number of bedrooms. */
	numberOfBedrooms?: useDecimalType[];
	/** Number of cash registers. */
	numberOfCashRegisters?: useDecimalType[];
	/** Number of Commercial Refrigeration/Freezer cases, including any open or closed commercial type case, and including any walk-in units. */
	numberOfCommercialRefrigerationUnits?: useDecimalType[];
	/** Number of commercial-type washing machines.  (This does not include residential or coin-operated machines) */
	numberOfCommercialWashingMachines?: useDecimalType[];
	/** Number of computers and servers at the property. */
	numberOfComputers?: useDecimalType[];
	/** Number of concert/show events per year. */
	numberOfConcertShowEventsPerYear?: useIntegerType[];
	/** Number of cooking equipment units in a convenience store. */
	numberOfCookingEquipmentUnits?: useIntegerType[];
	/** Number of ice sheets specifically for the purpose of the game of curling. */
	numberOfCurlingSheets?: useIntegerType[];
	/** Number of full-time equivalent workers (total number of hours worked by all workers, divided by the standard hours in a full time shift). */
	numberOfFTEWorkers?: useDecimalType[];
	/** Total number of guest meals (also called meal covers) served each year. */
	numberOfGuestMealsServedPerYear?: useIntegerType[];
	/** Total number of rooms for a lodging type of property (hotel). */
	numberOfHotelRooms?: useDecimalType[];
	/** Number of indoor ice rinks used for indoor hockey, ringette, public or figure skating. This does not include curling sheets. */
	numberOfIndoorIceRinks?: useIntegerType[];
	/** The total number of laundry hookups in all individual living units (counting hookups, whether or not there is a machine). */
	numberOfLaundryHookupsInAllUnits?: useIntegerType[];
	/** The total number of laundry hookups in all common areas (counting hookups, whether or not there is a machine). */
	numberOfLaundryHookupsInCommonArea?: useIntegerType[];
	/** Number of MRI Machines. */
	numberOfMriMachines?: useDecimalType[];
	/** The Number of Open or Closed Refrigeration/Freezer Units is the count of open or closed cases that are used for the sale or storage of perishable goods. This includes display-type refrigerated open or closed cases and cabinets as well as display-type freezer units typically found on a sales floor. Each case or cabinet section, typically 4 to 12 feet in length, should be considered 1 unit. Include those cases located inside and immediately adjacent to the building. These units may be portable or permanent, and may have doors, plastic strips, or other flexible cover. This count should not include vending machines. If your property is in the design phase, use your best estimate for the intended conditions when the property is fully operational. */
	numberOfOpenClosedRefrigerationUnits?: useDecimalType[];
	/** Number of people living in the home. */
	numberOfPeople?: useIntegerType[];
	/** Number of residential electronic lift systems. */
	numberOfResidentialLiftSystems?: useDecimalType[];
	/** Total number of residential living units (apartments or condominiums) at the property. This value must equal the sum of the number of residential living units in a low-rise setting, mid-rise setting, and high-rise setting.  A 0.9 tolerance is allowed. */
	numberOfResidentialLivingUnits?: useDecimalType[];
	/** Number of units located in individual buildings that are 10 or more stories in height, as well as units located in wings/portions of buildings that fall in this range (e.g. if Wing A is 10 stories and Wing B is 5 stories, only units in Wing A would be counted here). */
	numberOfResidentialLivingUnitsHighRiseSetting?: useDecimalType[];
	/** Number of units located in individual buildings that are 1 to 4 stories in height, as well as units located wings/portions of larger buildings that fall in this height range (e.g. if Wing A is 6 stories and Wing B is 3 stories, only units in Wing B would be counted here). */
	numberOfResidentialLivingUnitsLowRiseSetting?: useDecimalType[];
	/** Number of units located in individual buildings that are 5 to 9 stories in height, as well as units located wings/portions of larger buildings that fall in this height range (e.g. if Wing A is 6 stories and Wing B is 3 stories, only units in Wing A would be counted here). */
	numberOfResidentialLivingUnitsMidRiseSetting?: useDecimalType[];
	/** Number of residential-type washing machines. */
	numberOfResidentialWashingMachines?: useDecimalType[];
	/** Total number of rooms for a lodging type of property (hotel, dormitory, etc). */
	numberOfRooms?: useDecimalType[];
	/** Number of special/other events per year at a stadium/arena (i.e. events that are neither concerts/shows nor athletic events). */
	numberOfSpecialOtherEventsPerYear?: useIntegerType[];
	/** Number of sporting/athletic events per year. */
	numberOfSportingEventsPerYear?: useIntegerType[];
	/** Number of beds set up and staffed for use at a hospital. */
	numberOfStaffedBeds?: useDecimalType[];
	/** Number of working autoclaves and sterilizers in the building. */
	numberOfSterilizationUnits?: useDecimalType[];
	/** Number of beds associated with surgical operation at a medial office/outpatient healthcare facility. */
	numberOfSurgicalOperatingBeds?: useDecimalType[];
	/** Number of walk-in refrigeration/freezer units - including only those commercial type units that you can completely enter to retrieve goods. */
	numberOfWalkInRefrigerationUnits?: useDecimalType[];
	/** Number of warming/heating equipment units in a convenience store. */
	numberOfWarmingHeatingEquipmentUnits?: useIntegerType[];
	/** Number of weekdays (Monday through Friday) the property is open.  This will be an number between 0 and 5. */
	numberOfWeekdaysOpen?: numberOfWeekdaysType[];
	/** Total number of floods in a week using ice resurfacing machines after typical ice rink use for all indoor hockey, ringette, public or figure skating ice rinks in the facility. This does not include curling sheet resurfacing or pebbling. For multiple rinks, sum the total number of weekly resurfacing for all rinks. */
	numberOfWeeklyIceResurfacingForAllRinks?: numberOfWeeklyIceResurfacingType[];
	/** The total number of workers during the primary (largest shift) - this is only a total number of people in the building at a single time. */
	numberOfWorkers?: useDecimalType[];
	/** Presence of a nutrient removal system at a wastewater treatment plant (Yes/No). */
	nutrientRemoval?: useYesNoType[];
	/** Presence of an on-site Laundry Facility (Yes/No). */
	onSiteLaundryFacility?: useYesNoType[];
	/** Total area of open parking lots/areas. */
	openFootage?: grossFloorAreaType[];
	/** Indication of regular activities that occur on either Saturday or Sunday (Yes/No). */
	openOnWeekends?: useYesNoType[];
	/** Indication of whether the property is owned by a private, not-for profit, or government organization. */
	ownedBy?: ownedByType[];
	/** Total area of all parking structures that are only partially enclosed (i.e. multi-level structures that only have partial walls). */
	partiallyEnclosedFootage?: grossFloorAreaType[];
	/** The percent of the property that can be cooled by mechanical cooling equipment. */
	percentCooled?: percentCooledType[];
	/** The percent of the property that can be heated by mechanical heating equipment. */
	percentHeated?: percentHeatedType[];
	percentOfficeCooled?: percentOfficeCooledType[];
	percentOfficeHeated?: percentOfficeHeatedType[];
	/** The percent of the Gross Floor Area that is common space (not individual tenant areas) */
	percentOfGrossFloorAreaThatIsCommonSpaceOnly?: useDecimalType[];
	/** The total percentage of your property that is enclosed insulated storage space intended for the cooling or freezing of goods, merchandise, raw materials, or manufactured products in buildings (or portions of buildings), at or less than 50 degrees F. */
	percentUsedForColdStorage?: useIntegerType[];
	/** The designed flow rate of a wastewater treatment plant (e.g. the capacity of the plant) in million gallons per day (MGD). */
	plantDesignFlowRate?: PlantDesignFlowRateType[];
	/** Indication of whether a pool is indoor or outdoor. */
	poolLocation?: poolType[];
	/** Approximate size of a swimming pool (Short Course, Recreational, Olympic). */
	poolSize?: poolSizeType[];
	/** An indication of the type of residents living at the property, if applicable (e.g. student, military, senior, etc). */
	residentPopulation?: residentPopulationType[];
	/** The school district in which the school is located. */
	schoolDistrict?: useStringType[];
	/** The seating capacity associated with the main areas of worship in a worship facility. */
	seatingCapacity?: useDecimalType[];
	/** Indication that a Retail Store is a single store (Yes/No). */
	singleStore?: useYesNoType[];
	/** The total size of electronic score boards at a stadium/arena. */
	sizeOfElectronicScoreBoards?: optionalFloorAreaType[];
	/** Number of ice sheets specifically for the purpose of the game of curling. */
	spectatorSeatingCapacity?: useDecimalType[];
	/** The number of students the school can accommodate (including portable classrooms). */
	studentSeatingCapacity?: useDecimalType[];
	/** Presence of supplemental heating systems in a parking garage (Yes/No). */
	supplementalHeating?: useYesNoType[];
	/** The area within a medical office or outpatient healthcare property devoted to surgery. */
	surgeryCenterFloorArea?: optionalFloorAreaType[];
	totalGrossFloorArea?: grossFloorAreaType[];
	/** The indoor ice rink surface area is the total area covered by ice of all the ice rinks used for indoor hockey, ringette, public or figure skating and can be estimated by multiplying the length of the ice surface with the width of the ice surface and adding together the calculated area for each ice rink in the facility. This surface area does not include curling sheets. */
	totalIceRinkSurfaceAreaForAllRinks?: optionalFloorAreaType[];
	/** Level of redundancy for the Uninterruptible Power Supply (UPS) system in a Data Center. */
	upsSystemRedundancy?: upsSystemRedundancyType[];
	/** The total number of hours per week that the property is occupied by the majority of the employees.  It does not include hours when the property is occupied only by maintenance, security, or other support personnel. */
	weeklyOperatingHours?: useDecimalType[];
}
interface UseDetailsType extends _UseDetailsType { constructor: { new(): UseDetailsType }; }

interface _useIntegerType extends _useAttributeBase {
	value?: number;
}
export interface useIntegerType extends _useIntegerType { constructor: { new(): useIntegerType }; }
export var useIntegerType: { new(): useIntegerType };

type useIntegerTypeValueType = number;
type _useIntegerTypeValueType = Primitive._number;

interface _useStringType extends _useAttributeBase {
	value?: string;
}
export interface useStringType extends _useStringType { constructor: { new(): useStringType }; }
export var useStringType: { new(): useStringType };

interface _useYesNoType extends _useAttributeBase {
	value?: yesNo;
}
export interface useYesNoType extends _useYesNoType { constructor: { new(): useYesNoType }; }
export var useYesNoType: { new(): useYesNoType };

/** Represents verifier info of the property. */
interface _VerificationType extends BaseType {}
interface VerificationType extends _VerificationType { constructor: { new(): VerificationType }; }

/** A list of warnings. */
interface _warningsType extends BaseType {
	/** The warning of the web service call. */
	warning?: warningType[];
}
export interface warningsType extends _warningsType { constructor: { new(): warningsType }; }
export var warningsType: { new(): warningsType };

interface _warningType extends BaseType {
	/** The description of the warning. */
	warningDescription: string;
	/** The number of the warning. */
	warningNumber: string;
}
export interface warningType extends _warningType { constructor: { new(): warningType }; }
export var warningType: { new(): warningType };

interface _wasteMeterAssocAndConfigType extends BaseType {}
export interface wasteMeterAssocAndConfigType extends _wasteMeterAssocAndConfigType { constructor: { new(): wasteMeterAssocAndConfigType }; }
export var wasteMeterAssocAndConfigType: { new(): wasteMeterAssocAndConfigType };

/** A service type used for getting and sending waste meter entry data. */
interface _wasteMeterDataType extends BaseType {
	links?: linksType;
	/** Waste data used for a waste meter that is set up to be metered. */
	wasteData?: wasteMeterEntryType[];
}
export interface wasteMeterDataType extends _wasteMeterDataType { constructor: { new(): wasteMeterDataType }; }
export var wasteMeterDataType: { new(): wasteMeterDataType };

/** A service type used for representing a single waste meter entry datum. */
interface _wasteMeterEntryType extends BaseType {
	/** Whether the meter entry is an estimated value. */
	estimatedValue: boolean;
}
export interface wasteMeterEntryType extends _wasteMeterEntryType { constructor: { new(): wasteMeterEntryType }; }
export var wasteMeterEntryType: { new(): wasteMeterEntryType };

export type wasteMeterType = ("Composted - Cardboard/Corrugated Containers" | "Composted - Compostable - Mixed/Other" | "Composted - Food/Food Scraps" | "Composted - Grass/Yard Trimmings" | "Composted - Other" | "Composted - Paper - Copy Paper" | "Disposed - Appliances" | "Disposed - Batteries" | "Disposed - Beverage Containers (aluminum, glass, plastic)" | "Disposed - Building Materials - Carpet/Carpet Padding" | "Disposed - Building Materials - Concrete" | "Disposed - Building Materials - Mixed/Other" | "Disposed - Building Materials - Steel" | "Disposed - Building Materials - Wood" | "Disposed - Cardboard/Corrugated Containers" | "Disposed - Compostable - Mixed/Other" | "Disposed - Electronics" | "Disposed - Fats/Oils/Grease" | "Disposed - Food/Food Scraps" | "Disposed - Furniture" | "Disposed - Glass" | "Disposed - Grass/Yard Trimmings" | "Disposed - Lamps/Light Bulbs" | "Disposed - Mixed Recyclables" | "Disposed - Office Supplies" | "Disposed - Other" | "Disposed - Pallets" | "Disposed - Paper - Books" | "Disposed - Paper - Copy Paper" | "Disposed - Paper - Mixed" | "Disposed - Plastics - Mixed" | "Disposed - Plastics - Wrap/Film" | "Disposed - Regulated Medical Waste" | "Disposed - Textiles/Clothing" | "Disposed - Trash" | "Donated/Reused - Appliances" | "Donated/Reused - Building Materials - Carpet/Carpet Padding" | "Donated/Reused - Building Materials - Concrete" | "Donated/Reused - Building Materials - Mixed/Other" | "Donated/Reused - Building Materials - Steel" | "Donated/Reused - Building Materials - Wood" | "Donated/Reused - Cardboard/Corrugated Containers" | "Donated/Reused - Electronics" | "Donated/Reused - Food/Food Scraps" | "Donated/Reused - Furniture" | "Donated/Reused - Glass" | "Donated/Reused - Office Supplies" | "Donated/Reused - Other" | "Donated/Reused - Pallets" | "Donated/Reused - Paper - Books" | "Donated/Reused - Textiles/Clothing" | "Recycled - Appliances" | "Recycled - Batteries" | "Recycled - Beverage Containers (aluminum, glass, plastic)" | "Recycled - Building Materials - Carpet/Carpet Padding" | "Recycled - Building Materials - Concrete" | "Recycled - Building Materials - Mixed/Other" | "Recycled - Building Materials - Steel" | "Recycled - Building Materials - Wood" | "Recycled - Cardboard/Corrugated Containers" | "Recycled - Electronics" | "Recycled - Fats/Oils/Grease" | "Recycled - Glass" | "Recycled - Lamps/Light Bulbs" | "Recycled - Mixed Recyclables" | "Recycled - Other" | "Recycled - Pallets" | "Recycled - Paper - Books" | "Recycled - Paper - Copy Paper" | "Recycled - Paper - Mixed" | "Recycled - Plastics - Mixed" | "Recycled - Plastics - Wrap/Film" | "Recycled - Textiles/Clothing");
interface _wasteMeterType extends Primitive._string { content: wasteMeterType; }

interface _wastewaterTreatmentPlantType extends BaseType {}
export interface wastewaterTreatmentPlantType extends _wastewaterTreatmentPlantType { constructor: { new(): wastewaterTreatmentPlantType }; }
export var wastewaterTreatmentPlantType: { new(): wastewaterTreatmentPlantType };

interface _waterMeterAssocAndConfigType extends BaseType {}
export interface waterMeterAssocAndConfigType extends _waterMeterAssocAndConfigType { constructor: { new(): waterMeterAssocAndConfigType }; }
export var waterMeterAssocAndConfigType: { new(): waterMeterAssocAndConfigType };

interface _wholesaleClubSupercenterType extends BaseType {}
export interface wholesaleClubSupercenterType extends _wholesaleClubSupercenterType { constructor: { new(): wholesaleClubSupercenterType }; }
export var wholesaleClubSupercenterType: { new(): wholesaleClubSupercenterType };

interface _worshipFacilityType extends BaseType {}
export interface worshipFacilityType extends _worshipFacilityType { constructor: { new(): worshipFacilityType }; }
export var worshipFacilityType: { new(): worshipFacilityType };

export type yesNo = ("Yes" | "No");
interface _yesNo extends Primitive._string { content: yesNo; }

export interface document extends BaseType {
	/** Contains information for a Portfolio Manager account. */
	account: accountType;
	accountInfo: AccountInfoType;
	/** The values associated to the additional property/meter identifier for a given property.  This is used when you provide the values (update or add) to an additional property identifier for a specific property. */
	additionalIdentifier: AdditionalIdentifierType;
	additionalIdentifiers: AdditionalIdentifiersType;
	/** The additional property identifier that EPA has approved for use.  This is used when you just want to get the complete static list of additional property identifiers.  This set includes the unique identifier #1, #2, and #3 and the set that EPA is maintaining/approved. */
	additionalIdentifierType: AdditionalIdentifierTypeType;
	additionalIdentifierTypes: AdditionalIdentifierTypesType;
	/** Buildings used primarily for providing adult students with continuing education, workforce development, or professional development outside of the college or university setting. */
	adultEducation: otherType;
	/** All alerts that explain why the property cannot receive an ENERGY STAR score for the period ending date provided. */
	alerts: alertsType;
	/** Health care facilities that provide same-day surgical care, including diagnostic and preventive procedures. */
	ambulatorySurgicalCenter: otherType;
	/** Quantity of laundry processed at the property. */
	amountOfLaundryProcessedAnnually: amountOfLaundryProcessedAnnuallyType;
	/** Buildings used to provide aquatic habitat primarily to live animals and which may include public or private viewing areas and  educational programs. */
	aquarium: otherType;
	/** Area of all walk-in refrigeration/freezer units - include only commercial type units that a person actually walks into to retrieve goods.  See numberOfWalkInRefrigerationUnits for more information. */
	areaOfAllWalkInRefrigerationUnits: optionalFloorAreaType;
	/** Buildings used for the sale of new or used cars and light trucks. */
	automobileDealership: otherType;
	/** The concentration of effluent Biological Oxygen Demand (BOD5) at a wastewater treatment plant. */
	averageEffluentBiologicalOxygenDemand: useDecimalType;
	/** The concentration of influent Biological Oxygen Demand (BOD5) at a wastewater treatment plant. */
	averageInfluentBiologicalOxygenDemand: useDecimalType;
	/** Annual average number of residents at the property. */
	averageNumberOfResidents: useDecimalType;
	/** A commercial banking outlet that offers banking services to walk-in customers. */
	bankBranch: bankBranchType;
	/** Buildings used primarily for social/entertainment purposes, and is characterized by most of the revenue being generated from the sale of beverages instead of food. */
	barNightclub: otherType;
	/** Residential buildings associated with military facilities or educational institutions which offer multiple accommodations for long-term residents. */
	barracks: barracksType;
	/** Baseline dates and performance target settings can be updated for your property. */
	baselineAndTarget: baselineAndTargetType;
	billboardMetrics: billboardMetricsType;
	/** Settings to your billboard metric */
	billboardMetricSetting: BillboardMetricSettingType;
	/** Buildings used for public or private, recreational or professional bowling. */
	bowlingAlley: otherType;
	building: propertyType;
	/** Buildings primarily used to conduct gambling activities including both electronic and live table games. */
	casino: otherType;
	/** The distance measured from the floor to the lowest overhead obstruction for the majority of the warehouse space. */
	clearHeight: clearHeightUnitsType;
	/** Buildings used for the purpose of higher education. */
	collegeUniversity: collegeUniversityType;
	/** Indicates presence of common entrance: Yes and No are 2 options and 1 or 0 is used. */
	commonEntrance: useYesNoType;
	/** Area of parking garage that is completely enclosed. */
	completelyEnclosedFootage: grossFloorAreaType;
	/** Buildings that are co-located with gas stations and are used for the sale of a limited range of items such as groceries, toiletries, newspapers, soft drinks, tobacco products, and other everyday items. */
	convenienceStoreWithGasStation: convenienceStoreWithGasStationType;
	/** Buildings used for the sale of a limited range of items such as groceries, toiletries, newspapers, soft drinks, tobacco products, and other everyday items, which are not co-located with a gas station. */
	convenienceStoreWithoutGasStation: convenienceStoreWithoutGasStationType;
	/** Buildings used primarily for large conferences, exhibitions, and similar events. */
	conventionCenter: otherType;
	/** Whether there are Cooking Facilities. */
	cookingFacilities: useYesNoType;
	/** Level of redundancy for the cooling equipment in a Data Center. */
	coolingEquipmentRedundancy: coolingEquipmentRedundancyType;
	/** Buildings used for federal, state, or local courts, and associated administrative office space. */
	courthouse: courthouseType;
	/** Contains information for a Portfolio Manager account. */
	customer: CustomerType;
	/** Additional field (outside of Portfolio Manager) that you can prompt a user to provide data through the connection/share process. */
	customField: CustomFieldType;
	customFieldList: CustomFieldListType;
	/** Buildings specifically designed and equipped to meet the needs of high density computing equipment, such as server racks, used for data storage and processing. */
	dataCenter: dataCenterType;
	dataExchangeSettings: DataExchangeSettingsType;
	/** The property design characteristics. */
	design: designBaseType;
	/** Unrefrigerated Buildings that are used for the temporary storage and redistribution of goods, manufactured products, merchandise or raw materials. */
	distributionCenter: distributionCenterType;
	/** Facilities designed to pump and distribute drinking water through a network of pipes. */
	drinkingWaterTreatmentAndDistribution: drinkingWaterTreatmentAndDistributionType;
	/** Electric Distribution Utility Information */
	edu: EduType;
	eduList: EduListType;
	/** Electric Distribution Utility Information */
	eGridSubregion: EGridSubregionType;
	eGridSubregionList: EGridSubregionListType;
	/** Total enclosed floor area at a Stadium/Arena. */
	enclosedFloorArea: optionalFloorAreaType;
	/** Buildings that house multiple stores, often “anchored” by one or more department stores, and with interior walkways. */
	enclosedMall: otherType;
	energyPerformanceProject: energyPerformanceProjectType;
	/** Buildings containing machinery and/or associated equipment for generating electricity or district heat (steam, hot water, or chilled water) from a raw fuel, including fossil fuel power plants, traditional district heat power plants, combined heat and power plants,  nuclear reactors, hydroelectric dams, or facilities associated with a solar or wind farm. */
	energyPowerStation: otherType;
	enrollment: useDecimalType;
	/** Whether Data Center IT energy estimates are applied. */
	estimatesApplied: useYesNoType;
	/** Whether there is an Exterior Entrance to the Public. */
	exteriorEntranceToThePublic: useYesNoType;
	/** Buildings used for the preparation and sale of ready-to-eat food. Also known as Quick Service Restaurant. */
	fastFoodRestaurant: otherType;
	federalAgencies: FederalAgenciesType;
	/** Buildings used for financial services such as bank headquarters and securities and brokerage firms. */
	financialOffice: financialOfficeType;
	/** Buildings used to provide emergency response services associated with fires. */
	fireStation: otherType;
	/** Buildings used for recreational or professional athletic training and related activities. */
	fitnessCenterHealthClubGym: otherType;
	/** Whether there is a Fixed Film Trickle Filtration Process. */
	fixedFilmTrickleFiltrationProcess: useYesNoType;
	/** Buildings used for the sales of food on either a retail or wholesale basis, but which do not meet the definition of Supermarket/Grocery Store, Convenience Store, or Convenience Store with Gas Station. */
	foodSales: foodSalesType;
	/** Buildings used for preparation and sale of food and beverages, but which do not meet the definition of Restaurant, Cafeteria, or Bar/Nightclub. */
	foodService: otherType;
	/** Floor area associated with a Full Service Spa. */
	fullServiceSpaFloorArea: optionalFloorAreaType;
	/** Whether this is housing that is subsidized by the local, state, or Federal government. */
	governmentSubsidizedHousing: useYesNoType;
	grantDollars: useDecimalType;
	/** The Gross Floor Area that is Hotel Conference Space is the total size of all conference spaces. This will be a subset of Gross Floor Area for the property. */
	grossFloorAreaHotelConferenceSpace: optionalFloorAreaType;
	/** The Gross Floor Area Used for Food Preparation is the total size of all large/commercial kitchen areas used for the storage and preparation of food. This will be a subset of Gross Floor Area for the property. */
	grossFloorAreaUsedForFoodPreparation: optionalFloorAreaType;
	/** Floor area associated with a Gym/Fitness Center. */
	gymCenterFloorArea: optionalFloorAreaType;
	/** Floor area associated with a gymnasium at a K12 School. */
	gymnasiumFloorArea: optionalFloorAreaType;
	/** Whether there is a Computer Lab. */
	hasComputerLab: useYesNoType;
	/** Whether there is a Dining Hall. */
	hasDiningHall: useYesNoType;
	/** Presence of a laboratory (Yes/No). */
	hasLaboratory: useYesNoType;
	hey: heyType;
	/** Contains the identifiers of the entities that are above a particular entity in the Portfolio Manager hierarchy */
	hierarchy: hierarchyType;
	/** A general medical and surgical hospital (including critical access hospitals and children’s hospitals). These facilities provide acute care services intended to treat patients for short periods of time, including emergency medical care, physician's office services, diagnostic care, ambulatory care, surgical care, and limited specialty services such as rehabilitation and cancer care. */
	hospital: hospitalType;
	/** Buildings that sell overnight accommodations on a room/suite and nightly basis, and typically include a bath/shower and other facilities in guest rooms. */
	hotel: hotelType;
	/** Number of hours per day a typical guest spends at the property (Less Than 15, 15 To 19, More Than 20) */
	hoursPerDayGuestsOnsite: hoursPerDayGuestsOnsiteType;
	/** Buildings that include one or more indoor ice sheets used for public or private, recreational or professional skating, hockey, or ringette. Buildings that are exclusively used for curling are not currently eligible to earn an ENERGY STAR score but can be benchmarked using this property use. Gross Floor Area should include all space within the building(s), including ice area, spectator areas, concession stands, restaurants, retail areas, locker rooms, administrative/office areas, employee break rooms, mechanical rooms, and storage areas.Larger facilities primarily serving professional or collegiate functions and with significant spectator seating (usually above 5,000 seats) should review the definition for Indoor Arena to determine the best classification */
	iceCurlingRink: iceCurlingRinkType;
	/** Are there ice-related events such as Hockey, Skating, Ice Capades? */
	iceEvents: useYesNoType;
	individualMeter: IndividualMeterType;
	/** Enclosed structures used for professional or collegiate sports and entertainment events. (typically with a capacity of at least 5,000 seats) */
	indoorArena: indoorArenaType;
	internationalWeatherStationList: InternationalWeatherStationListType;
	/** Presence of a High School, as indicated by education of grades 10, 11, and/or 12 (Yes/No). */
	isHighSchool: useYesNoType;
	/** Presence of tertiary medical care, specialized care beyond a typical secondary level, such as Level 1 trauma centers, organ transplant, or prenatal intensive care units (Yes/No). */
	isTertiaryCare: useYesNoType;
	/** The IT Energy Configuration/location of IT Energy meters at a data center. */
	itEnergyMeterConfiguration: itEnergyConfigurationType;
	/** Buildings or campuses used as a school for Kindergarten through 12th grade students. */
	k12School: k12SchoolType;
	/** Buildings that provide controlled conditions in which scientific research, measurement, and experiments are performed or practical science is taught. */
	laboratory: otherType;
	/** Type of laundry processed at the property (linens, Terry, Linens & Terry) */
	laundryFacility: onsiteLaundryType;
	/** Length of all open or closed Refrigeration or Freezer cases that are used for the sale or storage of perishable goods. Include display-type refrigerated open or closed cases and cabinets, as well as display-type freezer units. These are typically found on the sales floor.   See numberOfOpenClosedRefrigerationUnits for more information. */
	lengthOfAllOpenClosedRefrigerationUnits: lengthOfAllOpenClosedRefrigerationUnitsType;
	/** Buildings used to store and manage collections of literary and artistic materials such as books, periodicals, newspapers, films, etc. that can be used for reference or lending. */
	library: otherType;
	license: LicenseType;
	/** Licensed Bed Capacity is the total number of beds that your hospital is licensed to have in operation. This may be more than your Staffed Beds, which are those that are set up and ready for use. */
	licensedBedCapacity: useDecimalType;
	licenseList: LicenseListType;
	/** A mixed use commercial development that includes retail stores and leisure amenities, where individual retail stores typically contain an entrance accessible from the outside and are not connected by internal walkways. */
	lifestyleCenter: otherType;
	log: logType;
	/** Buildings used as retail establishments dedicated to mail and mailing supplies. */
	mailingCenterPostOffice: otherType;
	/** Buildings used for manufacturing or assembling goods. */
	manufacturingIndustrialPlant: otherType;
	mapping: mappingType;
	/** Maximum number of floors in the tallest building at the property. */
	maximumNumberOfFloors: useIntegerType;
	/** Maximum capacity of residents, based on the design of the facility. */
	maximumResidentCapacity: useDecimalType;
	/** Medical Office Buildings used to provide diagnosis and treatment for medical, dental, or psychiatric outpatient care. */
	medicalOffice: medicalOfficeType;
	meter: meterType;
	/** Consumption data used for a meter that is set up to be metered. */
	meterConsumption: meterConsumptionType;
	meterData: meterDataType;
	meterDelivery: meterDeliveryType;
	/** Indicates the association you want to create for a set of meters and a specific property. */
	meterPropertyAssociationList: meterPropertyAssociationListType;
	/** Indicates the association you want to create for a set of meters and a specific property use. */
	meterPropertyUseAssociationList: meterListType;
	/** Number of months per year the property is in use. */
	monthsInUse: monthsInUseType;
	/** Number of months per year the property is in use. */
	monthsMainIndoorIceRinkInUse: monthsInUseType;
	/** Buildings used for public or private film screenings. */
	movieTheater: otherType;
	/** Residential Buildings that contain more than two residential living units. */
	multifamilyHousing: multifamilyHousingType;
	/** Buildings that display collections to outside visitors for public viewing and enjoyment and for informational/educational purposes. */
	museum: otherType;
	/** Unrefrigerated Buildings that are used to store goods, manufactured products, merchandise or raw materials. */
	nonRefrigeratedWarehouse: nonRefrigeratedWarehouseType;
	/** Contains the list of notifications that indicate an account, property, or meter is no longer accessible. */
	notificationList: notificationListType;
	/** Number of bedrooms. */
	numberOfBedrooms: useDecimalType;
	/** Number of cash registers. */
	numberOfCashRegisters: useDecimalType;
	/** Number of Commercial Refrigeration/Freezer cases, including any open or closed commercial type case, and including any walk-in units. */
	numberOfCommercialRefrigerationUnits: useDecimalType;
	/** Number of commercial-type washing machines.  (This does not include residential or coin-operated machines) */
	numberOfCommercialWashingMachines: useDecimalType;
	/** Number of computers and servers at the property. */
	numberOfComputers: useDecimalType;
	/** Number of concert/show events per year. */
	numberOfConcertShowEventsPerYear: useIntegerType;
	/** Number of cooking equipment units in a convenience store. */
	numberOfCookingEquipmentUnits: useIntegerType;
	/** Number of ice sheets specifically for the purpose of the game of curling. */
	numberOfCurlingSheets: useIntegerType;
	/** Number of full-time equivalent workers (total number of hours worked by all workers, divided by the standard hours in a full time shift). */
	numberOfFTEWorkers: useDecimalType;
	/** Total number of guest meals (also called meal covers) served each year. */
	numberOfGuestMealsServedPerYear: useIntegerType;
	/** Total number of rooms for a lodging type of property (hotel). */
	numberOfHotelRooms: useDecimalType;
	/** Number of indoor ice rinks used for indoor hockey, ringette, public or figure skating. This does not include curling sheets. */
	numberOfIndoorIceRinks: useIntegerType;
	/** The total number of laundry hookups in all individual living units (counting hookups, whether or not there is a machine). */
	numberOfLaundryHookupsInAllUnits: useIntegerType;
	/** The total number of laundry hookups in all common areas (counting hookups, whether or not there is a machine). */
	numberOfLaundryHookupsInCommonArea: useIntegerType;
	/** Number of MRI Machines. */
	numberOfMriMachines: useDecimalType;
	/** The Number of Open or Closed Refrigeration/Freezer Units is the count of open or closed cases that are used for the sale or storage of perishable goods. This includes display-type refrigerated open or closed cases and cabinets as well as display-type freezer units typically found on a sales floor. Each case or cabinet section, typically 4 to 12 feet in length, should be considered 1 unit. Include those cases located inside and immediately adjacent to the building. These units may be portable or permanent, and may have doors, plastic strips, or other flexible cover. This count should not include vending machines. If your property is in the design phase, use your best estimate for the intended conditions when the property is fully operational. */
	numberOfOpenClosedRefrigerationUnits: useDecimalType;
	/** Number of people living in the home. */
	numberOfPeople: useIntegerType;
	/** Number of residential electronic lift systems. */
	numberOfResidentialLiftSystems: useDecimalType;
	/** Total number of residential living units (apartments or condominiums) at the property. This value must equal the sum of the number of residential living units in a low-rise setting, mid-rise setting, and high-rise setting.  A 0.9 tolerance is allowed. */
	numberOfResidentialLivingUnits: useDecimalType;
	/** Number of units located in individual buildings that are 10 or more stories in height, as well as units located in wings/portions of buildings that fall in this range (e.g. if Wing A is 10 stories and Wing B is 5 stories, only units in Wing A would be counted here). */
	numberOfResidentialLivingUnitsHighRiseSetting: useDecimalType;
	/** Number of units located in individual buildings that are 1 to 4 stories in height, as well as units located wings/portions of larger buildings that fall in this height range (e.g. if Wing A is 6 stories and Wing B is 3 stories, only units in Wing B would be counted here). */
	numberOfResidentialLivingUnitsLowRiseSetting: useDecimalType;
	/** Number of units located in individual buildings that are 5 to 9 stories in height, as well as units located wings/portions of larger buildings that fall in this height range (e.g. if Wing A is 6 stories and Wing B is 3 stories, only units in Wing A would be counted here). */
	numberOfResidentialLivingUnitsMidRiseSetting: useDecimalType;
	/** Number of residential-type washing machines. */
	numberOfResidentialWashingMachines: useDecimalType;
	/** Total number of rooms for a lodging type of property (hotel, dormitory, etc). */
	numberOfRooms: useDecimalType;
	/** Number of special/other events per year at a stadium/arena (i.e. events that are neither concerts/shows nor athletic events). */
	numberOfSpecialOtherEventsPerYear: useIntegerType;
	/** Number of sporting/athletic events per year. */
	numberOfSportingEventsPerYear: useIntegerType;
	/** Number of beds set up and staffed for use at a hospital. */
	numberOfStaffedBeds: useDecimalType;
	/** Number of working autoclaves and sterilizers in the building. */
	numberOfSterilizationUnits: useDecimalType;
	/** Number of beds associated with surgical operation at a medial office/outpatient healthcare facility. */
	numberOfSurgicalOperatingBeds: useDecimalType;
	/** Number of walk-in refrigeration/freezer units - including only those commercial type units that you can completely enter to retrieve goods. */
	numberOfWalkInRefrigerationUnits: useDecimalType;
	/** Number of warming/heating equipment units in a convenience store. */
	numberOfWarmingHeatingEquipmentUnits: useIntegerType;
	/** Number of weekdays (Monday through Friday) the property is open.  This will be an number between 0 and 5. */
	numberOfWeekdaysOpen: numberOfWeekdaysType;
	/** Total number of floods in a week using ice resurfacing machines after typical ice rink use for all indoor hockey, ringette, public or figure skating ice rinks in the facility. This does not include curling sheet resurfacing or pebbling. For multiple rinks, sum the total number of weekly resurfacing for all rinks. */
	numberOfWeeklyIceResurfacingForAllRinks: numberOfWeeklyIceResurfacingType;
	/** The total number of workers during the primary (largest shift) - this is only a total number of people in the building at a single time. */
	numberOfWorkers: useDecimalType;
	/** Presence of a nutrient removal system at a wastewater treatment plant (Yes/No). */
	nutrientRemoval: useYesNoType;
	/** Buildings used for the conduct of commercial or governmental business activities. */
	office: officeType;
	/** Presence of an on-site Laundry Facility (Yes/No). */
	onSiteLaundryFacility: useYesNoType;
	/** Total area of open parking lots/areas. */
	openFootage: grossFloorAreaType;
	/** Indication of regular activities that occur on either Saturday or Sunday (Yes/No). */
	openOnWeekends: useYesNoType;
	/** Buildings that do not fall within any of the available property use categories in Portfolio Manager. */
	other: otherType;
	/** Buildings used for religious, community, or other educational purposes not described in the available property uses in Portfolio Manager (i.e. educational purposes other than adult education, college/university, K-12 school, pre-school/daycare and vocational schools). */
	otherEducation: otherType;
	/** Buildings whose primary use is for entertainment or public gatherings and that do not meet the definition of any other property use defined in Portfolio Manager. */
	otherEntertainmentPublicAssembly: otherType;
	/** Buildings used for residential  purposes other than those described in the available property uses in Portfolio Manager (i.e. residential other than multifamily residential, single family home, senior care community, residence hall/dormitory, barracks, prison/incarceration, or hotel). */
	otherLodgingResidential: otherType;
	/** Buildings containing a collection of stores whose purpose is the sale of goods, but which do not fit into the enclosed mall, lifestyle center, or strip mall property types. */
	otherMall: otherType;
	/** Buildings used by public-sector organizations to provide public services other than those described in the available property uses in Portfolio Manager (i.e. services other than offices, courthouses, drinking water treatment and distribution plants, fire stations, libraries, mailing centers or post offices, police stations, prisons or incarceration facilities, social or meeting halls, transportation terminals or stations, or wastewater treatment plants). */
	otherPublicServices: otherType;
	/** Buildings primarily used for recreation that do not meet the definition of any other property use defined in Portfolio Manager. */
	otherRecreation: otherType;
	/** Buildings used for preparation and sale of ready-to-eat food and beverages, but which does not fit into the fast food restaurant, restaurant, or bar/nightclub property types. */
	otherRestaurantBar: otherType;
	/** Buildings in which primarily services are offered, but which does not fit into the Personal Services or Repair Services property types. */
	otherServices: otherType;
	/** Long-term acute care hospitals, inpatient rehabilitation facilities, including Cancer Centers and Psychiatric and Substance Abuse Hospitals/Facilities. */
	otherSpecialityHospital: otherType;
	/** Buildings primarily used for sporting events that do not meet the definition of any other property use defined in Portfolio Manager. */
	otherStadium: otherStadiumType;
	/** Buildings used for science and technology related services other than Laboratories and Data Centers. */
	otherTechnologyScience: otherType;
	/** Buildings used by a utility for some purpose other than general office or energy/power generation. */
	otherUtility: otherType;
	/** Buildings used to provide diagnosis and treatment for rehabilitation and physical therapy. */
	outpatientRehabilitationPhysicalTherapy: otherType;
	/** Indication of whether the property is owned by a private, not-for profit, or government organization. */
	ownedBy: ownedByType;
	/** Buildings and lots used for parking vehicles. */
	parking: parkingType;
	/** Total area of all parking structures that are only partially enclosed (i.e. multi-level structures that only have partial walls). */
	partiallyEnclosedFootage: grossFloorAreaType;
	/** Contains the list of pending connection and share requests. */
	pendingList: pendingListType;
	/** The percent of the property that can be cooled by mechanical cooling equipment. */
	percentCooled: percentCooledType;
	/** The percent of the property that can be heated by mechanical heating equipment. */
	percentHeated: percentHeatedType;
	percentOfficeCooled: percentOfficeCooledType;
	percentOfficeHeated: percentOfficeHeatedType;
	/** The percent of the Gross Floor Area that is common space (not individual tenant areas) */
	percentOfGrossFloorAreaThatIsCommonSpaceOnly: useDecimalType;
	/** The total percentage of your property that is enclosed insulated storage space intended for the cooling or freezing of goods, merchandise, raw materials, or manufactured products in buildings (or portions of buildings), at or less than 50 degrees F. */
	percentUsedForColdStorage: useIntegerType;
	/** Buildings used for public or private artistic or musical performances. */
	performingArts: otherType;
	/** Buildings used to sell services rather than physical goods.  Examples include dry cleaners, salons, spas, etc. */
	personalServices: otherType;
	/** Power Generation Plant information */
	pgp: PgpType;
	pgpList: PgpListType;
	/** The designed flow rate of a wastewater treatment plant (e.g. the capacity of the plant) in million gallons per day (MGD). */
	plantDesignFlowRate: PlantDesignFlowRateType;
	/** Buildings used for federal, state, or local police forces and their associated office space. */
	policeStation: otherType;
	/** Indication of whether a pool is indoor or outdoor. */
	poolLocation: poolType;
	/** Approximate size of a swimming pool (Short Course, Recreational, Olympic). */
	poolSize: poolSizeType;
	/** Buildings used for educational programs or daytime supervision/recreation for young children before they attend Kindergarten. */
	preschoolDaycare: otherType;
	/** Prison/Incarceration federal, state, local, or private-sector Buildings used for the detention of persons awaiting trial or convicted of crimes. */
	prison: otherType;
	professionalDesignationList: ProfessionalDesignationListType;
	property: propertyType;
	/** All metrics reflect the 12 months ending on the given month and year. */
	propertyMetrics: propertyMetricsType;
	propertyMetricsList: propertyMetricsList;
	/** Indication of what energy is covered by the energy meters you associate together for calculations */
	propertyRepresentation: PropertyRepresentationType;
	/** This is used to update property use name only. */
	propertyUse: PropertyUseType;
	/** Buildings used primarily to hold racing events such as vehicle races, track/field races, horse races, and/or dog-races. */
	raceTrack: otherType;
	/** Refrigerated buildings that are used to store perishable goods or merchandise under refrigeration at temperatures below 50 degrees Fahrenheit. */
	refrigeratedWarehouse: refrigeratedWarehouseType;
	/** Buildings in which some type of repair service is provided.  Examples include vehicle service or repair shops, shoe repair, jewelry repair, locksmiths, etc. */
	repairServices: otherType;
	/** Buildings associated with educational institutions or military facilities which offer multiple accommodations for long-term residents. */
	residenceHallDormitory: residenceHallDormitoryType;
	/** Buildings that house and provide care and assistance for elderly residents. */
	residentialCareFacility: residentialCareFacilityType;
	/** An indication of the type of residents living at the property, if applicable (e.g. student, military, senior, etc). */
	residentPopulation: residentPopulationType;
	response: responseType;
	/** Buildings used for preparation and sale of ready-to-eat food and beverages, but which do not fit in the fast food property type.  (Fast casual, casual, and fine dining restaurants). */
	restaurant: otherType;
	/** Individual stores used to conduct the retail sale of non-food consumer goods such as clothing, books, toys, sporting goods, office supplies, hardware, and electronics. */
	retail: retailType;
	/** Buildings used primarily for roller-skating, inline skating/rollerblading, or skateboarding. */
	rollerRink: otherType;
	/** The school district in which the school is located. */
	schoolDistrict: useStringType;
	/** The seating capacity associated with the main areas of worship in a worship facility. */
	seatingCapacity: useDecimalType;
	/** Refers to buildings that are used for private storage. */
	selfStorageFacility: selfStorageFacilityType;
	/** Buildings that house and provide care and assistance for elderly residents. */
	seniorLivingCommunity: seniorLivingCommunityType;
	/** Contains the information when responding to an accept/reject connection or share request. */
	sharingResponse: sharingResponseType;
	/** A standalone building with its own lot that provides living space for one household or family. */
	singleFamilyHome: singleFamilyHomeType;
	/** Indication that a Retail Store is a single store (Yes/No). */
	singleStore: useYesNoType;
	/** The total size of electronic score boards at a stadium/arena. */
	sizeOfElectronicScoreBoards: optionalFloorAreaType;
	/** Buildings primarily used for public or private gatherings. */
	socialMeetingHall: otherType;
	/** Number of ice sheets specifically for the purpose of the game of curling. */
	spectatorSeatingCapacity: useDecimalType;
	/** structures with a permanent or retractable roof which are used primarily for professional or collegiate sports and entertainment events.  (Typically with a capacity of 25,000 seats or more). */
	stadiumClosed: stadiumClosedType;
	/** structures used primarily for professional or collegiate sports and entertainment events in which the playing field is. (Typically with a capacity of 5,000 seats or more) */
	stadiumOpen: stadiumOpenType;
	/** International Weather Station information */
	station: StationType;
	/** Buildings comprising more than one retail store, restaurant, or other business, in an open-air configuration where each establishment has an exterior entrance to the public and there are no internal walkways. */
	stripMall: otherType;
	/** The number of students the school can accommodate (including portable classrooms). */
	studentSeatingCapacity: useDecimalType;
	/** Buildings used for the retail sale of primarily food and beverage products, and which may include small amounts of preparation and sale of ready-to-eat food. */
	supermarket: supermarketType;
	/** Presence of supplemental heating systems in a parking garage (Yes/No). */
	supplementalHeating: useYesNoType;
	/** The area within a medical office or outpatient healthcare property devoted to surgery. */
	surgeryCenterFloorArea: optionalFloorAreaType;
	/** Any heated swimming pools located either inside or outside. */
	swimmingPool: swimmingPoolType;
	targetFinder: unAuthDesignType;
	/** Contains the information when terminating an existing connection or share. */
	terminateSharingResponse: terminateShareResponseType;
	totalGrossFloorArea: grossFloorAreaType;
	/** The indoor ice rink surface area is the total area covered by ice of all the ice rinks used for indoor hockey, ringette, public or figure skating and can be estimated by multiplying the length of the ice surface with the width of the ice surface and adding together the calculated area for each ice rink in the facility. This surface area does not include curling sheets. */
	totalIceRinkSurfaceAreaForAllRinks: optionalFloorAreaType;
	/** Buildings used primarily for accessing public or private transportation. */
	transportationTerminalStation: otherType;
	/** Level of redundancy for the Uninterruptible Power Supply (UPS) system in a Data Center. */
	upsSystemRedundancy: upsSystemRedundancyType;
	/** Buildings used to treat patients, usually on an unscheduled, walk-in basis, who have an injury or illness that requires immediate care but is not serious enough to warrant a visit to an emergency department. */
	urgentCareClinicOtherOutpatient: otherType;
	useDetails: UseDetailsType;
	verification: VerificationType;
	/** Buildings used for the medical care and treatment of animals. */
	veterinaryOffice: otherType;
	/** Vocational School Buildings primarily designed to teach skilled trades to students, including trade and technical schools. */
	vocationalSchool: otherType;
	/** Waste data used for a waste meter that is set up to be metered. */
	wasteData: wasteMeterEntryType;
	wasteDataList: wasteMeterDataType;
	wasteMeter: typeOfWasteMeter;
	/** Facilities designed to treat municipal wastewater. */
	wastewaterTreatmentPlant: wastewaterTreatmentPlantType;
	/** The total number of hours per week that the property is occupied by the majority of the employees.  It does not include hours when the property is occupied only by maintenance, security, or other support personnel. */
	weeklyOperatingHours: useDecimalType;
	/** Buildings used to conduct the retail sale of a wide variety of merchandise, typically in bulk quantities. */
	wholesaleClubSupercenter: wholesaleClubSupercenterType;
	/** Buildings used as places of worship. This includes churches, temples, mosques, synagogues, meetinghouses, or any other Buildings that primarily function as a place of religious worship. */
	worshipFacility: worshipFacilityType;
	/** Buildings used primarily to provide habitat to live animals and which may include public or private viewing and educational programs. */
	zoo: otherType;
}
export var document: document;
