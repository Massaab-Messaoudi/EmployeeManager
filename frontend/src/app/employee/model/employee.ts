export interface Employee{
    id:number;
    name :string;
    email:string;
    jobTitle:string;
    phone:string;
    imageUrl:string;
    employeeCode:string;// in the back end side we generte this code randomly by UUID (look addEmployee function in EmployeeService class)
}