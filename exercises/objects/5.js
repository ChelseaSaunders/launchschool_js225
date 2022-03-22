"use strict"

// Create a school object. The school object uses the student object from the
// previous exercise. It has methods that use and update information about the
// student. Be sure to check out the previous exercise for the other arguments
// that might be needed by the school object. Implement the following methods
// for the school object:

// addStudent: Adds a student by creating a new student and adding the student
// to a collection of students. The method adds a constraint that the year can
// only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
// Returns a student object if year is valid otherwise it logs "Invalid Year".

// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course
// has no grade, it uses "In progress" as the grade.

// courseReport: Logs the grades of all students for a given course name. Only
//  student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the getReportCard
// and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are
// not shown here for brevity.
// The following are only showing the properties that aren't methods for the
// three objects

function createStudent(name, year, courses = []) {
  return {
    name,
    year,
    courses,
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    listCourses() {
      console.log(this.courses);
    },

    findCourse(courseCode) {
      let courseIndex;
      this.courses.forEach((courseObj, idx) => {
        if (courseObj.code === courseCode) courseIndex = idx;
      });

      return courseIndex;
    },

    addNote(courseCode, courseNote) {
      let courseIndex = this.findCourse(courseCode);
      let course = this.courses[courseIndex];
      course.note ? course.note.push(courseNote) : course.note = [courseNote];
    },

    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note.join('; ')}`);
        }
      })
    },

    updateNote(courseCode, courseNote) {
      let courseIndex = this.findCourse(courseCode);
      let course = this.courses[courseIndex];
      course.note = [courseNote];
    }
  };
}

let school = {
  students: [],
  addStudent(student) {
    let newStudent;
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(student.year)) {
      console.log('Invalid Year');
      return;
    } else
      newStudent = createStudent(student.name, student.year, student.courses);
      this.students.push(newStudent);
      return newStudent;
  },

  findStudent(student) {
    let studentName = student.name;
    let index =  this.students.findIndex((currentStudent) => {
      return currentStudent.name === studentName;
    });

    return this.students[index];
  },

  enrollStudent(studentName, courseObj) {
    let student = this.findStudent(studentName);
    student.courses.push(courseObj);
  },

  findCourse(student, courseName) {
    let index = student.courses.findIndex((course) => {
      return course.name === courseName;
    });
    return student.courses[index];
  },

  addGrade(studentName, courseName, grade) {
    let student = findStudent(studentName);
    let course = findCourse(student, courseName);
    course.grade = grade;
  },

  getReportCard(studentName) {
    let student = this.findStudent(studentName);
    let grades = '';
    student.courses.forEach((course) => {
      grades += `${course.name}: ${course.grade || 'In progress'}\n`;
    });
    console.log(grades);
  }

}

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// school.courseReport('Physics');
// = undefined