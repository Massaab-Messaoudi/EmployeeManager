package tech.getarrays.employeemanager.services;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repo.EmployeeRepo;
import tech.getarrays.employeemanager.exception.UserNotFoundException;

public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    
    @Autowired // this anotation allow us to inject this class ass a service in other classes
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        // generate a code for this employee
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployee(){
       return employeeRepo.findAll(); 
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }
    
    public Employee findEmployeeById(Long id){
         // in the case if we send a request for inexisting employee then throw the exception that we just created
        return employeeRepo.findEmployeeById(id)
        .orElseThrow(()->new UserNotFoundException("User by id "+id+" was not found"));
    }
/*
    public Optional<Employee> findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id); // optional in the case if we send a request for inexisting employee
   }
   */
    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }
}
