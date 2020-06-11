const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

describe("hobbits model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert the provided hobbit into the DB", async () => {
      await Hobbits.insert({ name: "Swimming" });
      await Hobbits.insert({ name: "Racing" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });

    it("should return what was inserted", async () => {
      const hobbit = await Hobbits.insert({ name: "Biking" });

      expect(hobbit.name).toBe("Biking");
    });
  });
});
