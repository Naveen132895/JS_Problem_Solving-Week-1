describe("Test Case 1", function() {
    it("should determine the Number of students", function() {
        expect(find_No_of_Students(60,8)).toEqual(7);;
      });

      it("should determine the left out students", function() {
        expect(find_left_out(60,8)).toEqual(4);;
      });
});

describe("Test Case 2", function() {
    it("should determine the Number of students", function() {
        expect(find_No_of_Students(50,5)).toEqual(10);;
      });

      it("should determine the left out students", function() {
        expect(find_left_out(50,5)).toEqual(0);;
      });
});

describe("Test Case 3", function() {
    it("should determine the Number of students", function() {
        expect(find_No_of_Students(1,1)).toEqual(1);;
      });

      it("should determine the left out students", function() {
        expect(find_left_out(1,1)).toEqual(0);;
      });
});

describe("Test Case 4", function() {
    it("should determine the Number of students", function() {
        expect(find_No_of_Students(45,6)).toEqual(7);;
      });

      it("should determine the left out students", function() {
        expect(find_left_out(45,6)).toEqual(3);;
      });
});

describe("Test Case 5", function() {
    it("should determine the Number of students", function() {
        expect(find_No_of_Students(100,8)).toEqual(12);;
      });

      it("should determine the left out students", function() {
        expect(find_left_out(100,8)).toEqual(4);;
      });
});