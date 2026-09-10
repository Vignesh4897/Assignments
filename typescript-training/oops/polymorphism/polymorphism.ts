class Employee {

    empName: string = "Vignesh";

    work() {
        console.log("Employee is working");
    }
}

class SDET extends Employee {

    automation() {
        console.log("SDET is doing automation");
    }
}