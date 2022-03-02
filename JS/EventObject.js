console.clear();

// const input = document.querySelector("input[name = name]");
// input.addEventListener("change", EventHandler);

// function EventHandler(event){
//     //console.log("Change event called");
//     //console.log(event);
//     //console.log(event.type);
//     //console.log(event.target);
//     //console.log(event.target.className);
//     //console.log(event.target.id);
//     console.log(event.target.value);


// }

const programs = document.querySelectorAll("input[name = program]");
console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandaler)
})

function programHandaler(event){
    if(event.target.checked)
    {
        console.log(event.target.value);
    }
}

const departments = document.querySelector("#department-id");
//console.log(departments);

departments.addEventListener("change", DepartmentHandaler);

function DepartmentHandaler(event){
    console.log(event.target.value);
}
