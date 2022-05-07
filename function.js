/**
 * GPA CALCULATION for all student.
 */

const getGPA = (marks) => {
    let gpa = '' ;

    if (marks < 33) {
        gpa = 0
    } else if (marks >= 33 && marks <40){
        gpa = 1
    }
     else if (marks >= 40 && marks <50){
        gpa = 2
    }
     else if (marks >= 50 && marks <60){
        gpa = 3
    }
     else if (marks >= 60 && marks <70){
        gpa = 3.5
    }
     else if (marks >= 70 && marks <80){
        gpa = 4
    }else if (marks >= 80 && marks <= 100){
        gpa = 5
    }else{
        gpa = 'invalid your result'
    }
    
    return  gpa;


}


/**
 * Gread CALCULATION for all student.
 */


const getGread = (marks) => {
    let gread = '' ;

    if (marks < 33) {
        gread = 'F'
    } else if (marks >= 33 && marks <40){
        gread = 'D'
    }
     else if (marks >= 40 && marks <50){
        gread = 'C'
    }
     else if (marks >= 50 && marks <60){
        gread = 'B'
    }
     else if (marks >= 60 && marks <70){
        gread = 'A-'
    }
     else if (marks >= 70 && marks <80){
        gread = 'A'
    } else if (marks >= 80 && marks <= 100){
        gread = 'A+'
    }else{
        gread = 'invalid your result'
    }
    
    return  gread;


}


