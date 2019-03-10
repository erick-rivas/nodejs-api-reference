import Generator from "@util/Generator";
import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";
import { MType } from "@lt/models/helpers/Const";
import { getEnum } from "@util/Const";

class Mocks
{
  static Match()
  {
    return [
      new Match(1301123).build(new Date("Sat Mar 09 2019 04:33:42 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[14], this.Team()[8], [this.Score()[7], this.Score()[13]]),
      new Match(1170890).build(new Date("Sat Mar 09 2019 10:47:36 GMT-0600 (Central Standard Time)"), MType.LEAGUE,this.Team()[15], this.Team()[9], [this.Score()[3]]),
      new Match(7981845).build(new Date("Sat Mar 09 2019 23:21:45 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[13], this.Team()[1], [this.Score()[12], this.Score()[14]]),
      new Match(4669384).build(new Date("Sat Mar 09 2019 18:14:53 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[4], this.Team()[0], [this.Score()[1]]),
      new Match(6888289).build(new Date("Sat Mar 09 2019 06:40:22 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[4], this.Team()[8], [this.Score()[3], this.Score()[8]]),
      new Match(7017493).build(new Date("Sun Mar 10 2019 00:08:49 GMT-0600 (Central Standard Time)"), MType.LEAGUE,this.Team()[8], this.Team()[13], [this.Score()[1]]),
      new Match(6456477).build(new Date("Sat Mar 09 2019 23:27:05 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[10], this.Team()[13], [this.Score()[10]]),
      new Match(4100007).build(new Date("Sat Mar 09 2019 06:44:51 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[13], this.Team()[6], [this.Score()[10]]),
      new Match(6563947).build(new Date("Sat Mar 09 2019 15:29:03 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[8], this.Team()[14], [this.Score()[11]]),
      new Match(9028217).build(new Date("Sat Mar 09 2019 17:34:37 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[15], this.Team()[10], [this.Score()[12]]),
      new Match(8979556).build(new Date("Sat Mar 09 2019 18:15:30 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[2], this.Team()[3], [this.Score()[4], this.Score()[8]]),
      new Match(4819321).build(new Date("Sat Mar 09 2019 02:43:38 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[6], this.Team()[12], [this.Score()[13], this.Score()[8]]),
      new Match(4857368).build(new Date("Sat Mar 09 2019 22:20:24 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[13], this.Team()[11], [this.Score()[7]]),
      new Match(1256668).build(new Date("Sat Mar 09 2019 06:19:00 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[11], this.Team()[15], [this.Score()[10]]),
      new Match(450265).build(new Date("Sat Mar 09 2019 19:45:34 GMT-0600 (Central Standard Time)"), MType. CUP,this.Team()[14], this.Team()[12], [this.Score()[8], this.Score()[11]]),
      new Match(3324504).build(new Date("Sat Mar 09 2019 19:19:48 GMT-0600 (Central Standard Time)"), MType. FRIENDLY,this.Team()[3], this.Team()[9], [this.Score()[14]])
    ];
  }

  static Player()
  {
    return [
      new Player(8916623).build("Kade Thiel Sr.", "http://lorempixel.com/640/480", 72),
      new Player(633976).build("Brice Beer", "http://lorempixel.com/640/480", 60),
      new Player(8952671).build("Dejon Fay", "http://lorempixel.com/640/480", 18),
      new Player(3155348).build("Josefa Wuckert", "http://lorempixel.com/640/480", 53),
      new Player(6705350).build("Lou McKenzie", "http://lorempixel.com/640/480", 23),
      new Player(3326628).build("Samantha Hessel", "http://lorempixel.com/640/480", 46),
      new Player(260556).build("Dr. Libbie Ernser", "http://lorempixel.com/640/480", 69),
      new Player(409962).build("Wilson Hettinger", "http://lorempixel.com/640/480", 28),
      new Player(3350835).build("Anais Hackett", "http://lorempixel.com/640/480", 60),
      new Player(1304103).build("Kristina Jenkins", "http://lorempixel.com/640/480", 22),
      new Player(1101093).build("Garfield Weissnat", "http://lorempixel.com/640/480", 46),
      new Player(3231047).build("Kiera Schneider", "http://lorempixel.com/640/480", 63),
      new Player(8078320).build("Marilyne Anderson", "http://lorempixel.com/640/480", 12),
      new Player(1554851).build("Coby Corwin", "http://lorempixel.com/640/480", 88),
      new Player(746097).build("Theron Kautzer", "http://lorempixel.com/640/480", 79),
      new Player(229084).build("Gonzalo Langosh", "http://lorempixel.com/640/480", 23)
    ];
  }

  static Score()
  {
    return [
      new Score(1085925).build(29, 29, this.Player()[5]),
      new Score(3908934).build(32, 0, this.Player()[12]),
      new Score(6911961).build(65, 48, this.Player()[6]),
      new Score(258228).build(99, 29, this.Player()[0]),
      new Score(7258925).build(14, 96, this.Player()[10]),
      new Score(2491449).build(66, 1, this.Player()[5]),
      new Score(9566074).build(11, 97, this.Player()[3]),
      new Score(8213801).build(45, 84, this.Player()[8]),
      new Score(3538963).build(65, 36, this.Player()[14]),
      new Score(6312047).build(16, 91, this.Player()[11]),
      new Score(117919).build(68, 10, this.Player()[13]),
      new Score(8506284).build(96, 11, this.Player()[14]),
      new Score(8504869).build(5, 63, this.Player()[0]),
      new Score(5132677).build(95, 97, this.Player()[11]),
      new Score(1751766).build(35, 99, this.Player()[7]),
      new Score(8496390).build(67, 38, this.Player()[1])
    ];
  }

  static Team()
  {
    return [
      new Team(863776).build("Douglas Borer", "http://lorempixel.com/640/480", [this.Player()[14]]),
      new Team(8755061).build("Sandra Marks", "http://lorempixel.com/640/480", [this.Player()[12], this.Player()[12]]),
      new Team(3779544).build("Estel Rippin", "http://lorempixel.com/640/480", [this.Player()[13], this.Player()[3]]),
      new Team(934487).build("Christelle Boehm MD", "http://lorempixel.com/640/480", [this.Player()[4]]),
      new Team(8283219).build("Hallie Reilly", "http://lorempixel.com/640/480", [this.Player()[13]]),
      new Team(6359499).build("Icie Schaden", "http://lorempixel.com/640/480", [this.Player()[15]]),
      new Team(9042676).build("Sallie O'Conner PhD", "http://lorempixel.com/640/480", [this.Player()[8]]),
      new Team(8406713).build("Enoch Spinka", "http://lorempixel.com/640/480", [this.Player()[15]]),
      new Team(9309719).build("Johann Ullrich", "http://lorempixel.com/640/480", [this.Player()[12]]),
      new Team(677309).build("Eusebio Purdy", "http://lorempixel.com/640/480", [this.Player()[7]]),
      new Team(6589528).build("Miss Misty Corwin", "http://lorempixel.com/640/480", [this.Player()[0]]),
      new Team(9349051).build("Dr. Stephen Hane", "http://lorempixel.com/640/480", [this.Player()[3]]),
      new Team(5786801).build("Ransom Koelpin", "http://lorempixel.com/640/480", [this.Player()[6], this.Player()[8]]),
      new Team(7552883).build("Rosalyn Schuster", "http://lorempixel.com/640/480", [this.Player()[1]]),
      new Team(7144385).build("Leon Gusikowski", "http://lorempixel.com/640/480", [this.Player()[2]]),
      new Team(2283989).build("Nikolas Trantow", "http://lorempixel.com/640/480", [this.Player()[9]])
    ];
  }

  static User()
  {
    return [
      new User(395552).build("Eladio_Shields@hotmail.com", "ut"),
      new User(8911365).build("Thelma13@hotmail.com", "aut"),
      new User(9251439).build("Andreane13@hotmail.com", "perspiciatis"),
      new User(5663187).build("Florine_White@hotmail.com", "quam"),
      new User(9497620).build("Flossie49@yahoo.com", "sapiente"),
      new User(9569075).build("Darrin_Dietrich@gmail.com", "est"),
      new User(147992).build("Adella.Leuschke@gmail.com", "omnis"),
      new User(1164895).build("Lamar66@hotmail.com", "unde"),
      new User(9171529).build("Meda_Volkman@gmail.com", "in"),
      new User(2590207).build("Kayleigh_Jerde26@hotmail.com", "excepturi"),
      new User(4415183).build("Blanca.Rice@yahoo.com", "quibusdam"),
      new User(1190169).build("Fredy10@hotmail.com", "voluptas"),
      new User(4930298).build("Carolyne58@gmail.com", "voluptas"),
      new User(8199923).build("Clement.Fisher14@gmail.com", "blanditiis"),
      new User(4990782).build("Lina61@yahoo.com", "aut"),
      new User(1965375).build("Allison5@yahoo.com", "nostrum")
    ];
  }
}
export default Mocks;