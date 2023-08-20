import data from './data.json';

type IMobile = 'iPhone';
type ITablet = 'iPad' | 'iPad Air' | 'iPad Pro' | 'iPad mini';
type ILaptop = 'MacBook Pro' | 'MacBook Air';
type IDesktop = 'iMac' | 'Mac mini' | 'Mac Studio' | 'Mac Pro';
type IWatch = 'Apple Watch';
type ITelevision = 'Apple TV';
type IAudio = 'AirPods' | 'HomePod';
type IAccessory = 'AirTag' | 'Siri Remote' | 'iPod touch' | 'Apple Pencil' | 'Smart Keyboard';

type IDeviceType = IMobile | ITablet | ILaptop | IDesktop | IWatch | ITelevision | IAudio | IAccessory;

interface IANumberDetails {
  ANumber: string;
  description?: string;
}

interface IWatchModelDetails {
  models: string[];
  caseMaterial: string;
  caseSize: string;
  finish: string;
}

interface IAirPodsModelDetails {
  models: string[];
  color: string;
}

interface IAirTagModelDetails {
  models: string[];
  packSize: string;
}

interface IAppleTVModelDetails {
  models: string[];
  storage: string;
  color: string;
}

interface ISiriRemoteModelDetails {
  models: string[];
}

interface IHomePodModelDetails {
  models: string[];
  color: string;
}

interface IPadModelDetails {
  models: string[];
  color: string;
  storage: string;
}

interface IPadAirModelDetails extends IPadModelDetails {}
interface IPadProModelDetails extends IPadModelDetails {}
interface IPadMiniModelDetails extends IPadModelDetails {}

interface IPhoneModelDetails extends IPadModelDetails {}
interface IPodTouchModelDetails extends IPadModelDetails {}

interface IMacModelDetails {
  models: string[];
  color: string;
  storage: string;
}

interface IMacMiniModelDetails extends IMacModelDetails {}
interface IMacStudioModelDetails extends IMacModelDetails {}
interface IMacProModelDetails extends IMacModelDetails {}
interface IMacBookAirModelDetails extends IMacModelDetails {}
interface IMacBookProModelDetails extends IMacModelDetails {}
interface IMacMiniModelDetails extends IMacModelDetails {}


interface IApplePencilModelDetails {
  models: string[];
}

interface ISmartKeyboardModelDetails {
  models: string[];
  ipadCompatibility: string[];
}

type IModelDetails = IWatchModelDetails | IAirPodsModelDetails | IAirTagModelDetails | IAppleTVModelDetails | ISiriRemoteModelDetails | IHomePodModelDetails | IPadModelDetails | IPadAirModelDetails | IPadProModelDetails | IPadMiniModelDetails | IPhoneModelDetails | IPodTouchModelDetails | IMacModelDetails | IMacMiniModelDetails | IMacStudioModelDetails | IMacProModelDetails | IMacBookAirModelDetails | IMacBookProModelDetails | IMacMiniModelDetails | IApplePencilModelDetails | ISmartKeyboardModelDetails;

interface IDevice {
  type: IDeviceType;
  ANumber: string;
  ANumbers?: string[];
  ANumbersDetails?: IANumberDetails[];
  FCCID: string;
  FCCIDs?: string[];
  internalName: string;
  identifier: string;
  identifiers?: string[];
  color?: string;
  model: string;
  models?: string[];
  modelDetails?: IModelDetails[];
  boootrom?: string;
}

/**
 * Retrieves all items from the dataset.
 * @returns {Item[]} - An array of all items.
 */
export const getAllData = (): Item[] => {
  return data;
};

/**
 * Searches for items by their model.
 * @param {string} model - The model to search for.
 * @returns {Item[]} - An array of items that match the provided model.
 */
export const searchByModel = (model: string): Item[] => {
  return data.filter((item) => item.model === model);
};

/**
 * Searches for items by their code.
 * @param {string} code - The code to search for.
 * @returns {Item[]} - An array of items that match the provided code.
 */
export const searchByCode = (code: string): Item[] => {
  return data.filter((item) => item.code === code);
};
