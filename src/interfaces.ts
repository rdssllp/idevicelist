export type IMobile = "iPhone";
export type ITablet = "iPad" | "iPad Air" | "iPad Pro" | "iPad mini";
export type ILaptop = "MacBook Pro" | "MacBook Air";
export type IDesktop = "iMac" | "Mac mini" | "Mac Studio" | "Mac Pro";
export type IWatch = "Apple Watch";
export type ITelevision = "Apple TV";
export type IAudio = "AirPods" | "HomePod";
export type IAccessory =
  | "AirTag"
  | "Siri Remote"
  | "iPod touch"
  | "Apple Pencil"
  | "Smart Keyboard";

export type IDeviceType =
  | IMobile
  | ITablet
  | ILaptop
  | IDesktop
  | IWatch
  | ITelevision
  | IAudio
  | IAccessory;

export interface IANumberDetails {
  ANumber: string;
  description?: string;
}

export interface IWatchModelDetails {
  models: string[];
  caseMaterial: string;
  caseSize: string;
  finish: string;
}

export interface IAirPodsModelDetails {
  models: string[];
  color: string;
}

export interface IAirTagModelDetails {
  models: string[];
  packSize: string;
}

export interface IAppleTVModelDetails {
  models: string[];
  storage: string;
  color: string;
}

export interface ISiriRemoteModelDetails {
  models: string[];
}

export interface IHomePodModelDetails {
  models: string[];
  color: string;
}

export interface IPadModelDetails {
  models: string[];
  color: string;
  storage: string;
}

export interface IPadAirModelDetails extends IPadModelDetails {}
export interface IPadProModelDetails extends IPadModelDetails {}
export interface IPadMiniModelDetails extends IPadModelDetails {}

export interface IPhoneModelDetails extends IPadModelDetails {}
export interface IPodTouchModelDetails extends IPadModelDetails {}

export interface IMacModelDetails {
  models: string[];
  color: string;
  storage: string;
}

export interface IMacMiniModelDetails extends IMacModelDetails {}
export interface IMacStudioModelDetails extends IMacModelDetails {}
export interface IMacProModelDetails extends IMacModelDetails {}
export interface IMacBookAirModelDetails extends IMacModelDetails {}
export interface IMacBookProModelDetails extends IMacModelDetails {}
export interface IMacMiniModelDetails extends IMacModelDetails {}

export interface IApplePencilModelDetails {
  models: string[];
}

export interface ISmartKeyboardModelDetails {
  models: string[];
  ipadCompatibility: string[];
}

export type IModelDetails =
  | IWatchModelDetails
  | IAirPodsModelDetails
  | IAirTagModelDetails
  | IAppleTVModelDetails
  | ISiriRemoteModelDetails
  | IHomePodModelDetails
  | IPadModelDetails
  | IPadAirModelDetails
  | IPadProModelDetails
  | IPadMiniModelDetails
  | IPhoneModelDetails
  | IPodTouchModelDetails
  | IMacModelDetails
  | IMacMiniModelDetails
  | IMacStudioModelDetails
  | IMacProModelDetails
  | IMacBookAirModelDetails
  | IMacBookProModelDetails
  | IMacMiniModelDetails
  | IApplePencilModelDetails
  | ISmartKeyboardModelDetails;

export interface IDevice {
  type: IDeviceType;
  ANumbers?: string[];
  FCCIDs?: string[];
  internalName: string;
  identifiers?: string[];
  color?: string;
  models?: string[];
  modelDetails?: IModelDetails[];
  boootrom?: string;
  generation?: string;
}
