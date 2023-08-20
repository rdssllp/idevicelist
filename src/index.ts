import airpods from "./data/airpods.json";
import appleWatches from './data/apple-watches.json';
import ipads from './data/ipads.json';
import iphones from "./data/iphones.json";
import ipods from "./data/ipods.json";

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

/**
 * Retrieves all devices from the dataset.
 * @returns {IDevice[]} - An array of all devices.
 */
export const getAllDevices = (): IDevice[] => {
  return [...airpods, ...appleWatches, ...ipads, ...iphones, ...ipods] as IDevice[];
};

/**
 * Searches for device by their model.
 * @param {string} model - The model to search for.
 * @returns {IDevice} - The device that matches the provided model.
 */
export const searchByModel = (model: string): IDevice | null => {
  const device = getAllDevices().find((device) =>
    device.modelsSearchable.includes(model)
  ) as IDevice;
  return device || null;
};

/**
 * Searches for devices by their type.
 * @param {string} type - The type to search for.
 * @returns {IDevice[]} - An array of IDevice that match the provided type.
 */
export const searchByType = (type: IDeviceType): IDevice[] => {
  return getAllDevices().filter((device) => device.type === type);
};
