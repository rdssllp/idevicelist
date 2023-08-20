import { getAllData, searchByCode, searchByModel } from "../src/index";

describe("Data functions", () => {
  test("getAllData should return all items", () => {
    const data = getAllData();
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
  });

  test("searchByModel should return items with the matching model", () => {
    const items = searchByModel("xyz123");
    expect(items).toEqual([
      { model: "xyz123", name: "MyAwesomeItem", code: "123" },
    ]);
  });

  test("searchByCode should return items with the matching code", () => {
    const items = searchByCode("123");
    expect(items).toEqual([
      { model: "xyz123", name: "MyAwesomeItem", code: "123" },
    ]);
  });
});
