describe("Test Case 1", function() {
    it("should determine 20 is the answer", function() {
        expect(find_SellingPrice(1400,15)).toEqual(1190);;
      });
});

describe("Test Case 2", function() {
    it("should determine 5810 is the answer", function() {
        expect(find_SellingPrice(7000,17)).toEqual(5810);;
      });
});

describe("Test Case 3", function() {
    it("should determine 1275 is the answer", function() {
        expect(find_SellingPrice(1500,15)).toEqual(1275);;
      });
});

describe("Test Case 3", function() {
    it("should determine 850 is the answer", function() {
        expect(find_SellingPrice(1000,15)).toEqual(850);;
      });
});

describe("Test Case 4", function() {
    it("should determine 9199 is the answer", function() {
        expect(find_SellingPrice(9999,8)).toEqual(9199);;
      });
});

describe("Test Case 5", function() {
    it("should determine 543 is the answer", function() {
        expect(find_SellingPrice(1234,56)).toEqual(543);;
      });
});