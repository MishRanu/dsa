var person = {
  firstName: "Kelly",
  isInstructor: function() {
    console.log(this.role);
    return this.role === "INSTRUCTOR";
  },
  role: "INSTRUCTOR",
  favouriteNumber: 5
}