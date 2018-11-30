function Trainer(name) {
  this.name = name;
  this.doTeach = function (sub) {
    console.log(this.name + " teaching " + sub);
    let that = this;
    let notes = ".js-notes";
    let doLearn = function () {
      console.log(
        this.name + " learning " + sub + " with " + notes + " from " + that.name
      );
    };
    console.log("teaching ends");
    return doLearn;
  };
}

function Employee(name) {
  this.name = name;
}

const tnr = new Trainer("Subraminim");
const e1 = new Employee("e1");
const e2 = new Employee("e2");
const doLearn = tnr.doTeach("..js");
doLearn.call(e1);
const e2LearnFunc = doLearn.bind(e2);
//console.log(e2LearnFunc());

const video = {
  genre: "Sci Fi",
  list: ["a", "b", "c"],
  findMovies() {
    var self = this;
    this.list.forEach((movie, index) => {
      console.log(self.genre, movie);
    });
  }
};
video.findMovies();