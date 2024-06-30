/** @format */

export const logger = {
  log: (data) => {
    console.log("================================");
    console.dir(data, { depth: null });
    console.log("================================");
  },
};
