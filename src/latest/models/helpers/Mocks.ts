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
      new Match(4966061).build(new Date("Sat Mar 09 2019 08:36:30 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[31], this.Team()[18], [this.Score()[25]]),
      new Match(9053288).build(new Date("Sat Mar 09 2019 19:23:41 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[23], this.Team()[9], [this.Score()[2], this.Score()[6]]),
      new Match(6213925).build(new Date("Sat Mar 09 2019 08:26:40 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[16], this.Team()[31], [this.Score()[4], this.Score()[31]]),
      new Match(5532027).build(new Date("Sat Mar 09 2019 15:44:36 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[16], this.Team()[20], [this.Score()[22], this.Score()[10]]),
      new Match(9982892).build(new Date("Sat Mar 09 2019 04:56:59 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[17], this.Team()[9], [this.Score()[1]]),
      new Match(239934).build(new Date("Sat Mar 09 2019 07:45:26 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[10], this.Team()[2], [this.Score()[31], this.Score()[23]]),
      new Match(5021225).build(new Date("Sat Mar 09 2019 13:05:22 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[4], this.Team()[13], [this.Score()[0], this.Score()[21]]),
      new Match(2289171).build(new Date("Sat Mar 09 2019 08:11:46 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[18], this.Team()[25], [this.Score()[13]]),
      new Match(9909268).build(new Date("Sat Mar 09 2019 12:59:58 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[26], this.Team()[23], [this.Score()[10], this.Score()[1]]),
      new Match(506172).build(new Date("Sat Mar 09 2019 08:37:24 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[20], this.Team()[19], [this.Score()[14]]),
      new Match(2552598).build(new Date("Sat Mar 09 2019 18:51:55 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[29], this.Team()[18], [this.Score()[7], this.Score()[25]]),
      new Match(6943432).build(new Date("Sat Mar 09 2019 03:44:44 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[27], this.Team()[5], [this.Score()[0]]),
      new Match(9343832).build(new Date("Sat Mar 09 2019 08:59:15 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[21], this.Team()[29], [this.Score()[23], this.Score()[2]]),
      new Match(9921600).build(new Date("Sat Mar 09 2019 07:14:20 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[22], this.Team()[26], [this.Score()[1], this.Score()[5]]),
      new Match(3386367).build(new Date("Sat Mar 09 2019 23:10:44 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[18], this.Team()[21], [this.Score()[17]]),
      new Match(3168135).build(new Date("Sun Mar 10 2019 00:53:49 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[25], this.Team()[4], [this.Score()[16]]),
      new Match(5429417).build(new Date("Sat Mar 09 2019 09:10:37 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[2], this.Team()[4], [this.Score()[23], this.Score()[25]]),
      new Match(6674201).build(new Date("Sat Mar 09 2019 22:11:23 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[2], this.Team()[31], [this.Score()[8], this.Score()[1]]),
      new Match(3826260).build(new Date("Sat Mar 09 2019 03:08:47 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[0], this.Team()[3], [this.Score()[12], this.Score()[22]]),
      new Match(4075531).build(new Date("Sat Mar 09 2019 17:20:33 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[16], this.Team()[31], [this.Score()[22], this.Score()[1]]),
      new Match(9831099).build(new Date("Sat Mar 09 2019 23:19:08 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[15], this.Team()[28], [this.Score()[17], this.Score()[19]]),
      new Match(6637891).build(new Date("Sat Mar 09 2019 03:36:54 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[29], this.Team()[24], [this.Score()[10], this.Score()[20]]),
      new Match(4554985).build(new Date("Sat Mar 09 2019 19:34:21 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[31], this.Team()[24], [this.Score()[28], this.Score()[27]]),
      new Match(224440).build(new Date("Sat Mar 09 2019 11:18:48 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[12], this.Team()[9], [this.Score()[29], this.Score()[0]]),
      new Match(4377900).build(new Date("Sat Mar 09 2019 13:10:30 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[21], this.Team()[28], [this.Score()[27]]),
      new Match(5287033).build(new Date("Sat Mar 09 2019 04:51:13 GMT-0600 (Central Standard Time)"), MType.CUP, this.Team()[13], this.Team()[21], [this.Score()[25]]),
      new Match(3656288).build(new Date("Sat Mar 09 2019 23:12:32 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[0], this.Team()[1], [this.Score()[18]]),
      new Match(9662565).build(new Date("Sat Mar 09 2019 08:57:07 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[31], this.Team()[10], [this.Score()[6], this.Score()[9]]),
      new Match(6664337).build(new Date("Sat Mar 09 2019 11:20:33 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[8], this.Team()[24], [this.Score()[27]]),
      new Match(9210158).build(new Date("Sat Mar 09 2019 11:35:06 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[5], this.Team()[3], [this.Score()[28]]),
      new Match(8543238).build(new Date("Sat Mar 09 2019 22:20:56 GMT-0600 (Central Standard Time)"), MType.FRIENDLY, this.Team()[6], this.Team()[26], [this.Score()[12]]),
      new Match(996709).build(new Date("Sat Mar 09 2019 19:44:18 GMT-0600 (Central Standard Time)"), MType.LEAGUE, this.Team()[11], this.Team()[24], [this.Score()[13], this.Score()[21]])
    ];
  }

  static Player()
  {
    return [
      new Player(9223415).build("Jasmin Doyle Sr.", "http://lorempixel.com/640/480", 94),
      new Player(1316000).build("Cleora Lehner", "http://lorempixel.com/640/480", 34),
      new Player(3799030).build("Miss Lonzo Schmeler", "http://lorempixel.com/640/480", 94),
      new Player(6000534).build("Gaston Koelpin", "http://lorempixel.com/640/480", 33),
      new Player(1049202).build("Bradley Hansen", "http://lorempixel.com/640/480", 12),
      new Player(8398759).build("Kylee Beahan", "http://lorempixel.com/640/480", 32),
      new Player(3772172).build("Miss Ava Hamill", "http://lorempixel.com/640/480", 42),
      new Player(92074).build("Ms. Henriette Corwin", "http://lorempixel.com/640/480", 39),
      new Player(2353409).build("Glen Tromp", "http://lorempixel.com/640/480", 42),
      new Player(8638675).build("Chase Schroeder Jr.", "http://lorempixel.com/640/480", 40),
      new Player(2101806).build("Obie Kemmer PhD", "http://lorempixel.com/640/480", 5),
      new Player(1001601).build("Armani Armstrong", "http://lorempixel.com/640/480", 46),
      new Player(9882766).build("Mr. Tatyana Moore", "http://lorempixel.com/640/480", 88),
      new Player(2019102).build("Jeramy Blanda", "http://lorempixel.com/640/480", 73),
      new Player(3824847).build("Mrs. Amos Gulgowski", "http://lorempixel.com/640/480", 40),
      new Player(9987423).build("Elliot Bergstrom", "http://lorempixel.com/640/480", 21),
      new Player(9016776).build("Miss Nellie Effertz", "http://lorempixel.com/640/480", 6),
      new Player(6763757).build("Chase Ernser", "http://lorempixel.com/640/480", 19),
      new Player(9092696).build("Noble Hackett", "http://lorempixel.com/640/480", 60),
      new Player(9067347).build("Mr. Alfreda Fahey", "http://lorempixel.com/640/480", 87),
      new Player(5158217).build("Mrs. Trevion Turner", "http://lorempixel.com/640/480", 97),
      new Player(6094323).build("Selena Little", "http://lorempixel.com/640/480", 25),
      new Player(7761974).build("Athena Ondricka", "http://lorempixel.com/640/480", 19),
      new Player(1189981).build("Simeon Becker", "http://lorempixel.com/640/480", 37),
      new Player(9088361).build("Richmond Erdman Jr.", "http://lorempixel.com/640/480", 98),
      new Player(8462702).build("Anabelle Dooley I", "http://lorempixel.com/640/480", 51),
      new Player(5192105).build("Mittie Dare II", "http://lorempixel.com/640/480", 66),
      new Player(2185129).build("Mr. Dandre Reilly", "http://lorempixel.com/640/480", 90),
      new Player(9668236).build("Nina Kiehn PhD", "http://lorempixel.com/640/480", 29),
      new Player(1784067).build("Danika Zemlak", "http://lorempixel.com/640/480", 31),
      new Player(677923).build("Leland Fay I", "http://lorempixel.com/640/480", 32),
      new Player(2066174).build("Jaeden Pfeffer", "http://lorempixel.com/640/480", 67)
    ];
  }

  static Score()
  {
    return [
      new Score(777661).build(62, this.Player()[20]),
      new Score(1016714).build(64, this.Player()[25]),
      new Score(8631032).build(75, this.Player()[2]),
      new Score(6941383).build(53, this.Player()[13]),
      new Score(1435750).build(73, this.Player()[17]),
      new Score(4634628).build(85, this.Player()[30]),
      new Score(8670300).build(48, this.Player()[19]),
      new Score(3956401).build(78, this.Player()[25]),
      new Score(9467500).build(27, this.Player()[26]),
      new Score(2439964).build(50, this.Player()[31]),
      new Score(6573918).build(78, this.Player()[10]),
      new Score(8441363).build(83, this.Player()[7]),
      new Score(5828499).build(10, this.Player()[20]),
      new Score(8971557).build(17, this.Player()[8]),
      new Score(9270759).build(2, this.Player()[7]),
      new Score(7843008).build(31, this.Player()[18]),
      new Score(9138692).build(16, this.Player()[3]),
      new Score(925689).build(30, this.Player()[14]),
      new Score(8071017).build(37, this.Player()[17]),
      new Score(7959001).build(75, this.Player()[28]),
      new Score(5684919).build(59, this.Player()[1]),
      new Score(2240607).build(11, this.Player()[19]),
      new Score(8605125).build(37, this.Player()[0]),
      new Score(324282).build(51, this.Player()[18]),
      new Score(7133450).build(71, this.Player()[31]),
      new Score(8598170).build(9, this.Player()[26]),
      new Score(3707539).build(60, this.Player()[2]),
      new Score(7999712).build(30, this.Player()[17]),
      new Score(8289726).build(41, this.Player()[6]),
      new Score(3003360).build(88, this.Player()[17]),
      new Score(7615368).build(51, this.Player()[5]),
      new Score(3357874).build(87, this.Player()[13])
    ];
  }

  static Team()
  {
    return [
      new Team(2761895).build("Chad Johns", "http://lorempixel.com/640/480", [this.Player()[9]]),
      new Team(3127478).build("Kira Weissnat", "http://lorempixel.com/640/480", [this.Player()[17]]),
      new Team(9509141).build("Deontae Bartoletti", "http://lorempixel.com/640/480", [this.Player()[12]]),
      new Team(200448).build("Taya Little", "http://lorempixel.com/640/480", [this.Player()[9], this.Player()[2]]),
      new Team(1965118).build("Mr. Rita Dicki", "http://lorempixel.com/640/480", [this.Player()[28]]),
      new Team(3845940).build("Mrs. Donnie Feeney", "http://lorempixel.com/640/480", [this.Player()[25]]),
      new Team(9456716).build("Iliana Crist", "http://lorempixel.com/640/480", [this.Player()[8], this.Player()[24]]),
      new Team(3309525).build("Twila Kris", "http://lorempixel.com/640/480", [this.Player()[22]]),
      new Team(9279592).build("Elroy Larkin", "http://lorempixel.com/640/480", [this.Player()[13], this.Player()[7]]),
      new Team(4241336).build("Ian Maggio", "http://lorempixel.com/640/480", [this.Player()[14]]),
      new Team(4946106).build("Garnett Abbott", "http://lorempixel.com/640/480", [this.Player()[23], this.Player()[31]]),
      new Team(2447142).build("Dr. Geovany Toy", "http://lorempixel.com/640/480", [this.Player()[9]]),
      new Team(888552).build("Monroe Pacocha", "http://lorempixel.com/640/480", [this.Player()[17]]),
      new Team(849494).build("Kay McKenzie", "http://lorempixel.com/640/480", [this.Player()[24]]),
      new Team(5988176).build("Cleora Feeney", "http://lorempixel.com/640/480", [this.Player()[27]]),
      new Team(343993).build("Otilia Stracke", "http://lorempixel.com/640/480", [this.Player()[0]]),
      new Team(5943684).build("Annie Borer", "http://lorempixel.com/640/480", [this.Player()[13]]),
      new Team(1895274).build("Mr. Johanna Kautzer", "http://lorempixel.com/640/480", [this.Player()[29], this.Player()[14]]),
      new Team(459385).build("Ocie Yundt", "http://lorempixel.com/640/480", [this.Player()[10], this.Player()[4]]),
      new Team(9530526).build("Ms. Bart Schimmel", "http://lorempixel.com/640/480", [this.Player()[27]]),
      new Team(6825996).build("Ansel Stiedemann", "http://lorempixel.com/640/480", [this.Player()[10]]),
      new Team(8479894).build("Dr. Giuseppe Leuschke", "http://lorempixel.com/640/480", [this.Player()[1], this.Player()[28]]),
      new Team(8175557).build("Jazmyne Kirlin Sr.", "http://lorempixel.com/640/480", [this.Player()[14], this.Player()[10]]),
      new Team(6897058).build("Presley Kreiger", "http://lorempixel.com/640/480", [this.Player()[9]]),
      new Team(2331142).build("Russ Buckridge", "http://lorempixel.com/640/480", [this.Player()[3]]),
      new Team(4464446).build("Mckayla Greenfelder", "http://lorempixel.com/640/480", [this.Player()[0], this.Player()[14]]),
      new Team(9360164).build("Erling Herman", "http://lorempixel.com/640/480", [this.Player()[10]]),
      new Team(4106867).build("Bridie Reynolds", "http://lorempixel.com/640/480", [this.Player()[3], this.Player()[16]]),
      new Team(7886248).build("Amely Gottlieb", "http://lorempixel.com/640/480", [this.Player()[6], this.Player()[31]]),
      new Team(2888334).build("Chet Gutmann", "http://lorempixel.com/640/480", [this.Player()[18]]),
      new Team(4640638).build("Abelardo Nicolas", "http://lorempixel.com/640/480", [this.Player()[13], this.Player()[20]]),
      new Team(4580521).build("Wilmer Braun", "http://lorempixel.com/640/480", [this.Player()[1], this.Player()[20]])
    ];
  }

  static User()
  {
    return [
      new User(1787245).build("Lolita4@gmail.com", "perspiciatis"),
      new User(7619832).build("Perry.OKon67@yahoo.com", "reprehenderit"),
      new User(7274419).build("Eli_Reinger40@hotmail.com", "veritatis"),
      new User(2983190).build("Cheyanne_Reynolds@yahoo.com", "voluptates"),
      new User(7830643).build("Adrian_Feeney95@yahoo.com", "ea"),
      new User(3841204).build("Vella16@hotmail.com", "eos"),
      new User(2119380).build("Jordyn15@gmail.com", "facere"),
      new User(4282179).build("Wade.Lesch@gmail.com", "nihil"),
      new User(5728591).build("Antonette_Zemlak@yahoo.com", "neque"),
      new User(8800085).build("Adalberto_Conn@hotmail.com", "voluptas"),
      new User(9837890).build("Emmanuel68@yahoo.com", "corrupti"),
      new User(8572217).build("Shannon59@hotmail.com", "enim"),
      new User(1888461).build("Rosalind.Shields@yahoo.com", "enim"),
      new User(3999037).build("Garnett.Skiles@hotmail.com", "ad"),
      new User(5819046).build("Ubaldo_Dietrich30@hotmail.com", "deleniti"),
      new User(7012589).build("Cloyd_Gutmann@yahoo.com", "vitae"),
      new User(3399485).build("Greyson_Krajcik17@hotmail.com", "qui"),
      new User(5532082).build("Donnie21@hotmail.com", "ut"),
      new User(5351250).build("Myrna97@gmail.com", "aut"),
      new User(5745428).build("Laura_Waelchi@hotmail.com", "maxime"),
      new User(241534).build("Ted_Williamson@hotmail.com", "qui"),
      new User(6328815).build("Athena_Fritsch@gmail.com", "et"),
      new User(4939767).build("Jacinthe85@yahoo.com", "distinctio"),
      new User(8483332).build("Clare.Johnson22@hotmail.com", "cum"),
      new User(8851358).build("Carole_Flatley37@yahoo.com", "pariatur"),
      new User(9639576).build("Wilfredo_VonRueden@hotmail.com", "et"),
      new User(2846694).build("Merle27@hotmail.com", "quia"),
      new User(8595672).build("Alverta_Miller18@gmail.com", "eum"),
      new User(511197).build("Elroy.Davis68@gmail.com", "cumque"),
      new User(3976261).build("Katelynn_Kris@hotmail.com", "ipsam"),
      new User(516724).build("Timothy_Reilly22@yahoo.com", "dolorem"),
      new User(8461089).build("Ova.Rohan@yahoo.com", "illo")
    ];
  }
}
export default Mocks;