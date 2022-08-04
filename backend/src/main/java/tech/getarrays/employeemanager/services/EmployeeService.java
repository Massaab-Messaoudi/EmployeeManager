package tech.getarrays.employeemanager.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repo.EmployeeRepo;
import tech.getarrays.employeemanager.exception.UserNotFoundException;
@Service  // this anotation allow us to inject this class ass a service in other classes
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    
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
    
	public void deleteEmployee(Long id) {
		Employee employee=new Employee();
		employee.setId(id);
		this.employeeRepo.delete(employee);
		
	}

}
