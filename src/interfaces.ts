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

export interface IDevice {
  type: IDeviceType;
  generation: string;
  models: string[];
  aNumbers: string[];
  fccIds: string[];
  internalName: string;
  identifier: string;
  color: string;
  storage: string;
  bootrom: string;
  modelsSearchable: string;
}
