import { getAllDevices, searchByModel, searchByType } from "../src/index";

describe("Data functions", () => {
  test("getAllData should return all devices", () => {
    const data = getAllDevices();
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
  });

  test("searchByModel should return devices with the matching model - iPhone", () => {
    const items = searchByModel("MLQG3");
    expect(items).toEqual({
      type: "iPhone",
      generation: "iPhone 13",
      models: ["MLQG3", "MLN83", "MLEC3", "MLNT3"],
      aNumbers: ["A2482", "A2631", "A2634", "A2635", "A2633"],
      fccIds: ["?"],
      internalName: "D17AP",
      identifier: "iPhone14,5",
      color: "Blue",
      storage: "512 GB",
      bootrom: "Bootrom 6338.0.0.200.19",
      modelsSearchable: "MLQG3,MLN83,MLEC3,MLNT3",
    });
  });

  test("searchByModel should return devices with the matching model - iPad Air", () => {
    const items = searchByModel("MM9P3");
    expect(items).toEqual({
        "type": "iPad Air",
        "generation": "iPad Air (5th generation)",
        "models": [
            "MM9P3"
        ],
        "aNumbers": [
            "A2588"
        ],
        "fccIds": [
            "?"
        ],
        "internalName": "J407AP",
        "identifier": "iPad13,16",
        "color": "Starlight",
        "storage": "256 GB",
        "bootrom": "?",
        "modelsSearchable": "MM9P3"
    });
  });
});
