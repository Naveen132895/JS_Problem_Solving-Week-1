describe("Test Case 1", function() {
    it("should determine the Profit", function() {
        expect(find_Profit(1000,2,1)).toEqual(900);;
      });
});
describe("Test Case 2", function() {
  it("should determine the Profit", function() {
      expect(find_Profit(1000,4,1)).toEqual(2900);;
    });
});
describe("Test Case 3", function() {
  it("should determine the Profit", function() {
      expect(find_Profit(1000,2,1.5)).toEqual(400);;
    });
});
describe("Test Case 4", function() {
  it("should determine the Profit", function() {
      expect(find_Profit(1000,3,1.5)).toEqual(1400);;
    });
});
describe("Test Case 5", function() {
  it("should determine the Profit", function() {
      expect(find_Profit(999,3,1)).toEqual(1898);;
    });
});


