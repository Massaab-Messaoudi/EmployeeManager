package tech.getarrays.employeemanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.services.EmployeeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private final EmployeeService employeeService;
    
    public EmployeeController(EmployeeService employeeService){
        this.employeeService=employeeService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){  // ResponseEntity to specify that the response will be http response
        List<Employee> employees=employeeService.findAllEmployee();
        return new ResponseEntity<>(employees,HttpStatus.OK);
    } 

    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id){  // ResponseEntity to specify that the response will be http response
        Employee employees=employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employees,HttpStatus.OK);
    } 

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee newemployee = employeeService.addEmployee(employee);
        return new ResponseEntity<Employee>(newemployee, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        Employee updatedemployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<Employee>(updatedemployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable("id") Long id){  // ResponseEntity to specify that the response will be http response
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    } 
}
