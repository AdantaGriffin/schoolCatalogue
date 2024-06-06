class School{
    constructor(name, level, numOfStudents){
      this._name = name;
      this._level = level;
      this._numOfStudents = numOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numOfStudents(){
      return this._numOfStudents;
    }
    set numOfStudents(newNumOfStudents){
      if(typeof newNumOfStudents === 'number'){
        this._numOfStudents = newNumOfStudents;
      } else{
        console.log('Invalid input: numOfStudents must be set to a Number,');
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      let randomTeacher = Math.floor(Math.random() * substituteTeachers.length - 1)
      return randomTeacher
    }
  }
  class PrimarySchool extends School{
    constructor(name, numOfStudents, pickUpPolicy){
      super(name, 'primary', numOfStudents)
      this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
      return this._pickUpPolicy;
    }
  }
  class HighSchool extends School{
    constructor(name, numOfStudents, sportsTeams){
      super(name, 'high', numOfStudents)
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Student must be picked up by a parent, guardian, or a family member over the age of 13.');
  //console.log(lorraineHansbury)
  //lorraineHansbury.quickFacts();
  
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  //console.log(alSmith.sportsTeams);
  
  class MiddleSchool extends School{
    constructor(name, averageTestScores, schoolOverview){
      super(name, 'middle', numOfStudents)
      this._averageTestScores = averageTestScores;
    }
    get averageTestScores(){
      
    }
  }