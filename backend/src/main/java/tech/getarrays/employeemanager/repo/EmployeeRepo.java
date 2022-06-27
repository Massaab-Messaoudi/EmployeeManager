package tech.getarrays.employeemanager.repo;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.employeemanager.model.Employee;
/**
 * this repository allow us to add and get employees from the db
 * <Employee,Long> Employee = the type of the repository and Long = the type of his primary key
 */
public interface EmployeeRepo extends JpaRepository<Employee,Long> {  
    void deleteEmployeeById(Long id);// spring will define implement automaticlly the methode , because of the 2 keyword (delete....Id)
    Optional<Employee> findEmployeeById(Long id); // spring will define implement automaticlly the methode , because of the 2 keyword (find....Id)  
}
