describe("Test Case 1", function() {
    it("should determine the answer M1", function() {
        expect(find_MidPoint_M1(2,4,10,15)).toEqual(6);
      });

      it("should determine the answer M2", function() {
        expect(find_MidPoint_M2(2,4,10,15)).toEqual(9.5);
      });
});

describe("Test Case 2", function() {
    it("should determine the answer M1", function() {
        expect(find_MidPoint_M1(2,4,6,8)).toEqual(4);
      });

      it("should determine the answer M2", function() {
        expect(find_MidPoint_M2(2,4,6,8)).toEqual(6);
      });
});

describe("Test Case 3", function() {
    it("should determine the answer M1", function() {
        expect(find_MidPoint_M1(4,8,16,32)).toEqual(10);
      });

      it("should determine the answer M2", function() {
        expect(find_MidPoint_M2(4,8,16,32)).toEqual(20);
      });
});

