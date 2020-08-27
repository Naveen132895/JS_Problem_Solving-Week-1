describe("Test Case 1", function() {
    it("should determine 7 is the X co-ordinates", function() {
        expect(find_X_Vertices(3,4,12,15,6,8)).toEqual(7);;
      });

      it("should determine 9 is the Y co-ordinates", function() {
        expect(find_Y_Vertices(2,4,10,15,5,8)).toEqual(9);;
      });
});

describe("Test Case 2", function() {
    it("should determine 10 is the X co-ordinates", function() {
        expect(find_X_Vertices(3,6,15,15,12,12)).toEqual(10);;
      });

      it("should determine 11 is the Y co-ordinates", function() {
        expect(find_Y_Vertices(3,6,15,15,12,12)).toEqual(11);
      });
});

describe("Test Case 3", function() {
    it("should determine 9 is the X co-ordinates", function() {
        expect(find_X_Vertices(4,4,15,15,8,8)).toEqual(9);;
      });

      it("should determine 19 is the Y co-ordinates", function() {
        expect(find_Y_Vertices(4,21,15,27,8,9)).toEqual(19);;
      });
});

describe("Test Case 4", function() {
    it("should determine 9 is the X co-ordinates", function() {
        expect(find_X_Vertices(3,6,9,12,15,18)).toEqual(9);;
      });

      it("should determine 12 is the Y co-ordinates", function() {
        expect(find_Y_Vertices(3,6,9,12,15,18)).toEqual(12);;
      });
});

describe("Test Case 5", function() {
    it("should determine 5.7 is the X co-ordinates", function() {
        expect(find_X_Vertices(3,3,3,9,9,9)).toEqual(5);;
      });

      it("should determine 9 is the Y co-ordinates", function() {
        expect(find_Y_Vertices(3,3,3,9,9,9)).toEqual(7);;
      });
});
