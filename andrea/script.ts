class Person{ 
    fname : string; 
   location:string;
    salary: number; 
    jobTitle: string; 
    age:number;
    constructor(fname: string, location: string, salary: number, jobTitle:string, age:number) { 
        this.fname = fname;
        this.location = location;
        this.salary = salary;
        this.jobTitle=jobTitle;
        this.age=age;
    }
    printFunctions() { 
        return `Hi my name is ${this.fname} living in  ${this.location}, working as a ${this.jobTitle}. I have a salary every month ${this.salary}. I am ${this.age} old.`; 
      
       
    }
    
   
  }
  let worker = new Person ("Mark", "Vienna", 2000, "Junior Game Developer", 28);
  console.log(worker.printFunctions());
 
         