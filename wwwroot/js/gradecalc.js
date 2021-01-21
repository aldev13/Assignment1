//Program calculates the percentage entered in by the user
//Which then gives an alert to the total percentage and letter grade earned


//Connects to submit button
var submit = document.getElementById("submitButton");

//Event handler to start program
submit.addEventListener("click", function () {

    //Assign Variables
    var assign, project, quiz, exam, intex, total, grade;
    assign = parseInt(document.getElementById("assign").value);
    project = parseInt(document.getElementById("project").value);
    quiz = parseInt(document.getElementById("quiz").value);
    exam = parseInt(document.getElementById("exam").value);
    intex = parseInt(document.getElementById("intex").value);

    //Calculate total percentage
    total = assign + project + quiz + exam + intex

    //Determine letter grade and alert result
    if (total >= 101)
    {
        alert("This is not a real grade");
    }
    else if (total >= 94)
    {
        grade = "A";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if (total >= 90)
    {
        grade = "A-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 87)
    {
        grade = "B+";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 84)
    {
        grade = "B";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 94)
    {
        grade = "A";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 80)
    {
        grade = "B-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 77)
    {
        grade = "C+";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 74)
    {
        grade = "C";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 70)
    {
        grade = "C-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 67)
    {
        grade = "D+"
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 64)
    {
        grade = "D";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else if(total >= 60)
    {
        grade = "D-";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade);
    }
    else
    {
        grade = "E";
        alert("Your total percentage is " + total + "%! And your letter grade is " + grade + ", sorry...");
    }
});