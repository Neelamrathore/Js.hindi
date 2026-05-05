const course = {
    title: "JavaScript - The Complete Guide",
    rating: 5,
    students: 30000,
    courseInstructor: "Hitesh chai and code ",
    courseInstructorDetails: {
        name: "Hitesh Choudhary",
        experience: "10 years",
        courses: ["JavaScript", "React", "Node.js"]
    }
};
// course.courseInstructor = "Hitesh Choudhary"; // This will change the courseInstructor 
    //  property
console.log(course.courseInstructor); // Output: 'Hitesh Choudhary'