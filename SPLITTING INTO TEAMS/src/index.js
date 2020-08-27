// During the Physical Education hour, PT sir has decided to conduct some team games. 
// He wants to split the students in the class into equal sized teams. 
// In some cases, there may be some students who are left out from teams and 
// he wanted to use the left out students to assist him in conducting the team games.

// For instance, if there are 50 students in the class and 
// if the class has to be divided into 7 equal sized teams, 7 students will be there in each team and 1 student will be left out.
// PT sir asks your help to automate this team splitting task.

// Can you please help them by writing a function to find the number of students in each team  and the left out student?


// Write the function to find the number of students in each team.
function find_No_of_Students(tot_no_of_students,tot_no_of_teams){
    return Math.floor(tot_no_of_students/tot_no_of_teams);
}

// Write the function to find the left out student.
function find_left_out(tot_no_of_students,tot_no_of_teams){
    return tot_no_of_students%tot_no_of_teams
}

//Use SpecRunner to check the Test Cases.

// Use console.log() to check the output