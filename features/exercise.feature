Feature: sample request program
  In order to execute my tasks
  As a patient
  I want to be able to interact with a program

    Scenario: GET program structure
        Given the system has programs
        When the dialog api is requested to obtain all programs
        Then the response has HTTP status 200
        And the response is an array of programs
        And each program has the following properties with values of type
            |property|type|
            |id|number|
            |title|string|
            |category|string|
            |updated|date|
            |created|date|
            |device|object|
            |tasks|array|
        And tasks contains objects where each object has the following properties with values of type
            |property|type|
            |title|string|
            |questions|array|
            |measurements|array|
        And questions contains objects where each object has the following properties with values of type
            |property|type|
            |_id|string|
            |text|string|
            |answer|number|
        And measurements contains objects where each object has the following properties with values of type
            |property|type|
            |_id|string|
            |indicator|string|
            |measure|number|
