
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
