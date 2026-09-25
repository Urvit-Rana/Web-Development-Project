//array of employees object
let employees = [
  {
    name: "Urvit Rana",
    department: "Backend Developer",
    salary: 60000,
  },
  {
    name: "Ved Mistry",
    department: "frontend developer",
    salary: 50000,
  },
  {
    name: "Tirth Mathukiya",
    department: "Cloud Engineer",
    salary: 55000,
  },
  {
    name: "Santosh Prajapati",
    department: "Devops",
    salary: 45000,
  },
  {
    name: "Vedant Asniyavala",
    department: "FullStack Developer",
    salary: 65000,
  },
];
//showing output of employee detail by loop

//changed this function from only employee display to general display function, you can call it to display your array
function showEmployee(array) {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    output += `
    <div>
        
        <h3>Name:${array[i].name}</h3>
        <p>Deprtment:${array[i].department}</p>
        <p>Salary:${array[i].salary}</p>

    </div>`;
  }
  return output;
}

document.getElementById("employeeList").innerHTML = showEmployee(employees);

//practicing event listner by click event
//---------------------------------------------------
const demoButton = document.getElementById("btn2");
const demopara = document.getElementById("demo para");
demoButton.addEventListener("click", myfunction);

function myfunction() {
  demopara.innerHTML = "Clicked!";
}
//----------------------------------------------------

//practicing how to show time by click event

//----------------------------------------------------
// function displayTime(){
//     document.getElementById("demo").innerHTML=Date()
// }
// const displayarea=document.getElementById("employeeList")
// displayarea.innerHTML=employee
//-----------------------------------------------------

//Searching matching employees
const searchbutton = document.getElementById("searchEmployee");

searchbutton.addEventListener("click", searchFunc);

function searchFunc() {
  const searchedText = document.getElementById("findEmployee").value;
  let flag = false;
  let searchOutput = "";
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.toLowerCase().includes(searchedText.toLowerCase())) {
      searchOutput += `<h3>${employees[i].name}</h3>
       <p> ${employees[i].department}</p>
       <p> ${employees[i].salary}</p>
      `;
      flag = true;
    }
  }
  //if flag is false
  if (!flag) {
    alert("No Employee Data Found!");
  }
  //this line will show searchOutput on the place of id->employeeList
  document.getElementById("employeeList").innerHTML = searchOutput;
}

//Searching employees using dropdown
let searchDepartment = document.getElementById("select_department");
searchDepartment.addEventListener("change", filterDept);

function filterDept() {
  //it gives value of option(from dropdown)
  let searchedOption = searchDepartment.value;
  if (searchedOption.includes("default")) {
    document.getElementById("employeeList").innerHTML = showEmployee(employees);
  } else {
    let filteredResult = employees.filter((employees) =>
      employees.department.toLowerCase().includes(searchedOption.toLowerCase()),
    );
    // console.log(filteredResult);

    // console.log(filteredResult)
    // let output = "";
    // for (let i = 0; i < filteredResult.length; i++) {
    //   output += ` <h3>${filteredResult[i].name}</h3>
    //           <p>${filteredResult[i].department}</p>
    //           <p>${filteredResult[i].salary}</p>`;
    // }
    // console.log(output);
    //updated from repeating code to using generlized function
    document.getElementById("employeeList").innerHTML =
      showEmployee(filteredResult);
  }
}

//sorting employee by their salary
let sortoption = document.getElementById("sortBySalary");
sortoption.addEventListener("change", sortSalary);

function sortSalary() {
  //accessed value of dropdown
  let selectedsort = document.getElementById("sortBySalary").value;
  //copied employee array so we can manipulate copied array instead of original
  let unsortedArray = [...employees];

  if (selectedsort ==="increasing") {
    unsortedArray.sort((a, b) => a.salary - b.salary);
    document.getElementById("employeeList").innerHTML = showEmployee(unsortedArray);
  } 
  else if (selectedsort ==="decreasing") {
    unsortedArray.sort((a, b) => b.salary - a.salary);
    document.getElementById("employeeList").innerHTML = showEmployee(unsortedArray);
  }
  else if(selectedsort ==="default"){
    console.log(employees)
    document.getElementById("employeeList").innerHTML =showEmployee(employees)
  }
}
console.log(employees)

//add employee


  let input_name=document.getElementById("nameInput").value
  let input_dept=document.getElementById("deptInput").value
  let input_salary=document.getElementById("salaryInput").value
  let add_emp_btn=document.getElementById("employeeInputbtn")

  add_emp_btn.addEventListener("click",addEmployee)

  function addEmployee(){
    //I have three variables.Now i have to combine it to one object

  }
