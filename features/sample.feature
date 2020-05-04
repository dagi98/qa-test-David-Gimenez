Feature: sample request program
  In order to execute my tasks
  As a patient
  I want to be able to interact with a program
    
  Scenario: POST program
    When the dialog api is requested to create a program with id 1
    Then the response has HTTP status 200
		And the response represents the program with id 1
    
  Scenario: GET program
    Given a program with id 2
    When the dialog api is requested to obtain all programs
    Then the response has HTTP status 200
		And the response contains a program with id 2
 
  Scenario: DELETE program
    Given the system has programs
    And the number of programs is n
    When the dialog api is requested to delete a program
    Then the response has HTTP status 200
		And the response contains n-1 programs
