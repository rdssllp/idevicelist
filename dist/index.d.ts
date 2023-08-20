export type IMobile = "iPhone";
export type ITablet = "iPad" | "iPad Air" | "iPad Pro" | "iPad mini";
export type ILaptop = "MacBook Pro" | "MacBook Air";
export type IDesktop = "iMac" | "Mac mini" | "Mac Studio" | "Mac Pro";
export type IWatch = "Apple Watch";
export type ITelevision = "Apple TV";
export type IAudio = "AirPods" | "HomePod";
export type IAccessory = "AirTag" | "Siri Remote" | "iPod touch" | "Apple Pencil" | "Smart Keyboard";
export type IDeviceType = IMobile | ITablet | ILaptop | IDesktop | IWatch | ITelevision | IAudio | IAccessory;
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
export declare const getAllDevices: () => IDevice[];
/**
 * Searches for device by their model.
 * @param {string} model - The model to search for.
 * @returns {IDevice} - The device that matches the provided model.
 */
export declare const searchByModel: (model: string) => IDevice | null;
/**
 * Searches for devices by their type.
 * @param {string} type - The type to search for.
 * @returns {IDevice[]} - An array of IDevice that match the provided type.
 */
export declare const searchByType: (type: IDeviceType) => IDevice[];
