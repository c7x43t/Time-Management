# Introduction
The purpose of this document is to build an online system to manage the work time of employees with a centralized data store.
Functional Requirements:

# Views Employee:
scope: can see himself
## Vacations
[Request Vacation]
Fields: Days
[View Vacations]
List
[Cancel Vacations]
delete open and approved vacations
## Work Time
[Submit Work Time per Month]
Columns: Date | Weekday | Begin | End | Break | Absence (Travel, Flex) (Sick, Vacation by HR from DB) note: sick, vacation days are auto-filled from DB
[Statistics: Access the submitted months]
- List view of Submitted months
- List view of pending months (rejected with reason months -> edit)
## Dashboard (statistics)
- Flex Time account (range: -100, +100)
- Vacation (open, planned, taken) (target 30 days/year)


# Views Supervisor:
scope: can see supervised employees
## Vacation
[Approve open Vacations]
List view of open Vacations (approve|reject)
-> on approve: Inform Employee & HR
-> on reject: Inform Employee  with reason
## Work Time
[View Work Time submissions]
List of Work Time submissions (approve|reject with reason)
-> on approve: Calculate new Flex Time balance
## Dashboard
•	Statistics: (Flex Time,)


# Views HR:
scope: can see all
## Sickness
[Register Sickness]
Fields: Employee, Days
-> Email Supervisor of Employee 
## Dashboard
- [List of employees]
- Statistics: (Flex Time,)


 
Non-functional Requirements:
-	Access to corporate network via VPN. 
-	Date is stored on central server.
-	Infrastructure/OS: Should be platform independent.
-	Technology: Desktop-application or Browser-App.
-	Present working demo until 10/12/2020.
-	Obey break law and implement it.
-	Use Git
