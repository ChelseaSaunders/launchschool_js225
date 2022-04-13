/* eslint-disable max-lines-per-function */
/* eslint-disable indent */
"use strict";

// In an earlier exercise, we created a school object. It works, however, it can
// still be improved. The following are improvements for you to implement in the
// solution provided:

    // Make the list students private. Right now, anyone can gain access to it
    //   and manipulate it.
    // Make the constraint for allowed values for years a private variable. As a
    //   private variable it avoids an unnecessary statement in the addStudent
    //   method and at the same time makes the code more declarative.
    // Make the getCourse function accessible in the addGrade method also. As it
    //   is, only the courseReport method has access.

// eslint-disable-next-line max-lines-per-function

let school =  (function() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent(name, year) {
      if (validYears.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade(student, courseName, grade) {
      const course = this.getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },

    getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    },

    courseReport(courseName) {

      const courseStudents = this.students.map(student => {
        const course = this.getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  };
})();