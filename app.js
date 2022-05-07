
allstudentdb.map((data, index) => {

    
 // if student get more than or equal of 33 in all subjet then they will pass otherwise failed .
 
let result ;
 data.bn >= 33 && data.en >= 33 && data.math >= 33 && data.sci >= 33 && data.ss >= 33 && data.rel >= 33 ? result = 'passed' : result ='Failed'

// get sum of all subject's  gpa then divide by 6. (there is 6 subjects)

let cgpa = getGPA(data.bn) + getGPA(data.en) + getGPA(data.math) + getGPA(data.sci) + getGPA(data.ss) + getGPA(data.rel);
cgpa = cgpa/6
 
// if result got faild then cgpa will be 0

result == 'Failed' ? cgpa = 0: '';


console.log(`

    Name :       ${data.name}
    Roll :       ${data.roll}
    Department : ${data.departmente}
    -------------------------------------------------------------------------------------------------------------------------->>

    Subject                 Marks                   GPA                            Gread                   Result & CGPA
    Bangla                  ${data.bn}                       ${getGPA (data.bn)}                                ${getGread(data.bn)}                       ${result}
    English                 ${data.en}                       ${getGPA (data.en)}                                ${getGread(data.en)}                        ${cgpa.toFixed(2)}
    Math                    ${data.math}                       ${getGPA (data.math)}                                ${getGread(data.math)}        
    sciale                  ${data.sci}                     ${getGPA (data.sci)}                                ${getGread(data.sci)}        
    Social Since            ${data.ss}                       ${getGPA (data.ss)}                                ${getGread(data.ss)}        
    Relagion                ${data.rel}                       ${getGPA (data.rel)}                                ${getGread(data.rel)}        
`);


})





