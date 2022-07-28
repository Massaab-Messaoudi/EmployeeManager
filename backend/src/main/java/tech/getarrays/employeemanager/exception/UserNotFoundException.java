package tech.getarrays.employeemanager.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message){
        // call the constructor of the super class with message as param
        super(message);

    }
}
