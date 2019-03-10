import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";
import Generator from "@util/Generator";

class Mocks
{
  static Match()
  {
    return [
      new Match(6053956).build(new Date("Sat Mar 09 2019 07:53:30 GMT-0600 (Central Standard Time)"), this.Team()[31], this.Team()[21], [this.Score()[5], this.Score()[11]]),
      new Match(4712250).build(new Date("Sat Mar 09 2019 12:15:25 GMT-0600 (Central Standard Time)"), this.Team()[18], this.Team()[25], [this.Score()[18], this.Score()[16]]),
      new Match(3059637).build(new Date("Sat Mar 09 2019 11:30:04 GMT-0600 (Central Standard Time)"), this.Team()[17], this.Team()[27], [this.Score()[19], this.Score()[3]]),
      new Match(217802).build(new Date("Sat Mar 09 2019 20:24:01 GMT-0600 (Central Standard Time)"), this.Team()[2], this.Team()[17], [this.Score()[10], this.Score()[14]]),
      new Match(401108).build(new Date("Sat Mar 09 2019 15:16:10 GMT-0600 (Central Standard Time)"), this.Team()[2], this.Team()[28], [this.Score()[9], this.Score()[9]]),
      new Match(2398062).build(new Date("Sat Mar 09 2019 23:31:13 GMT-0600 (Central Standard Time)"), this.Team()[30], this.Team()[24], [this.Score()[3], this.Score()[18]]),
      new Match(8901494).build(new Date("Sat Mar 09 2019 18:28:10 GMT-0600 (Central Standard Time)"), this.Team()[23], this.Team()[25], [this.Score()[23]]),
      new Match(8529383).build(new Date("Sat Mar 09 2019 10:55:08 GMT-0600 (Central Standard Time)"), this.Team()[4], this.Team()[4], [this.Score()[15], this.Score()[13]]),
      new Match(5562840).build(new Date("Sat Mar 09 2019 09:10:05 GMT-0600 (Central Standard Time)"), this.Team()[17], this.Team()[30], [this.Score()[16]]),
      new Match(3009537).build(new Date("Sat Mar 09 2019 14:27:28 GMT-0600 (Central Standard Time)"), this.Team()[24], this.Team()[12], [this.Score()[11], this.Score()[22]]),
      new Match(4963778).build(new Date("Sat Mar 09 2019 21:42:56 GMT-0600 (Central Standard Time)"), this.Team()[31], this.Team()[27], [this.Score()[2], this.Score()[3]]),
      new Match(1004616).build(new Date("Sat Mar 09 2019 22:11:25 GMT-0600 (Central Standard Time)"), this.Team()[26], this.Team()[3], [this.Score()[11]]),
      new Match(9490651).build(new Date("Sat Mar 09 2019 21:02:44 GMT-0600 (Central Standard Time)"), this.Team()[0], this.Team()[13], [this.Score()[19]]),
      new Match(6286556).build(new Date("Sat Mar 09 2019 02:14:43 GMT-0600 (Central Standard Time)"), this.Team()[4], this.Team()[2], [this.Score()[27]]),
      new Match(803919).build(new Date("Sat Mar 09 2019 07:43:06 GMT-0600 (Central Standard Time)"), this.Team()[22], this.Team()[21], [this.Score()[28], this.Score()[3]]),
      new Match(6751867).build(new Date("Sat Mar 09 2019 05:08:27 GMT-0600 (Central Standard Time)"), this.Team()[1], this.Team()[30], [this.Score()[7]]),
      new Match(4787483).build(new Date("Sat Mar 09 2019 23:03:39 GMT-0600 (Central Standard Time)"), this.Team()[30], this.Team()[28], [this.Score()[12]]),
      new Match(2046779).build(new Date("Fri Mar 08 2019 23:47:37 GMT-0600 (Central Standard Time)"), this.Team()[9], this.Team()[18], [this.Score()[9], this.Score()[0]]),
      new Match(5928673).build(new Date("Sat Mar 09 2019 07:16:04 GMT-0600 (Central Standard Time)"), this.Team()[17], this.Team()[2], [this.Score()[19], this.Score()[6]]),
      new Match(6961277).build(new Date("Sat Mar 09 2019 20:39:48 GMT-0600 (Central Standard Time)"), this.Team()[29], this.Team()[2], [this.Score()[12]]),
      new Match(1600558).build(new Date("Sat Mar 09 2019 02:00:58 GMT-0600 (Central Standard Time)"), this.Team()[1], this.Team()[5], [this.Score()[17]]),
      new Match(7671406).build(new Date("Sat Mar 09 2019 01:41:33 GMT-0600 (Central Standard Time)"), this.Team()[25], this.Team()[29], [this.Score()[17], this.Score()[24]]),
      new Match(1869946).build(new Date("Sat Mar 09 2019 17:44:52 GMT-0600 (Central Standard Time)"), this.Team()[6], this.Team()[27], [this.Score()[11], this.Score()[1]]),
      new Match(8388368).build(new Date("Sat Mar 09 2019 23:25:52 GMT-0600 (Central Standard Time)"), this.Team()[14], this.Team()[5], [this.Score()[14], this.Score()[23]]),
      new Match(1083216).build(new Date("Sat Mar 09 2019 21:42:35 GMT-0600 (Central Standard Time)"), this.Team()[22], this.Team()[6], [this.Score()[17]]),
      new Match(6696805).build(new Date("Sat Mar 09 2019 23:26:56 GMT-0600 (Central Standard Time)"), this.Team()[3], this.Team()[28], [this.Score()[4], this.Score()[0]]),
      new Match(3990675).build(new Date("Sat Mar 09 2019 03:56:48 GMT-0600 (Central Standard Time)"), this.Team()[27], this.Team()[15], [this.Score()[4]]),
      new Match(1315222).build(new Date("Sat Mar 09 2019 17:15:14 GMT-0600 (Central Standard Time)"), this.Team()[23], this.Team()[9], [this.Score()[4], this.Score()[26]]),
      new Match(361662).build(new Date("Sat Mar 09 2019 06:25:30 GMT-0600 (Central Standard Time)"), this.Team()[21], this.Team()[4], [this.Score()[25], this.Score()[17]]),
      new Match(2837516).build(new Date("Sat Mar 09 2019 23:04:47 GMT-0600 (Central Standard Time)"), this.Team()[17], this.Team()[28], [this.Score()[29]]),
      new Match(5523840).build(new Date("Sat Mar 09 2019 17:28:10 GMT-0600 (Central Standard Time)"), this.Team()[16], this.Team()[19], [this.Score()[22]]),
      new Match(9721398).build(new Date("Sat Mar 09 2019 20:12:38 GMT-0600 (Central Standard Time)"), this.Team()[22], this.Team()[0], [this.Score()[0], this.Score()[7]])
    ];
  }

  static Player()
  {
    return [
      new Player(9515014).build("Lindsey Grant", "http://lorempixel.com/640/480", 97),
      new Player(3478350).build("Citlalli Medhurst", "http://lorempixel.com/640/480", 85),
      new Player(3357841).build("Tabitha Wunsch", "http://lorempixel.com/640/480", 37),
      new Player(3043333).build("Miss Annamarie Beer", "http://lorempixel.com/640/480", 63),
      new Player(7035210).build("Noemy Grant", "http://lorempixel.com/640/480", 49),
      new Player(1740738).build("Madelyn Beatty", "http://lorempixel.com/640/480", 36),
      new Player(5967865).build("Junius Prosacco", "http://lorempixel.com/640/480", 19),
      new Player(6121384).build("Caleb Hayes", "http://lorempixel.com/640/480", 74),
      new Player(2819292).build("Enos Hahn Jr.", "http://lorempixel.com/640/480", 70),
      new Player(4976423).build("Raegan Rosenbaum", "http://lorempixel.com/640/480", 10),
      new Player(1111680).build("Elmore Schaden", "http://lorempixel.com/640/480", 20),
      new Player(5839965).build("Evalyn Wolf", "http://lorempixel.com/640/480", 50),
      new Player(6550279).build("Lavern Casper", "http://lorempixel.com/640/480", 77),
      new Player(2765566).build("Lloyd Kilback", "http://lorempixel.com/640/480", 69),
      new Player(508437).build("Emelie Gerhold", "http://lorempixel.com/640/480", 4),
      new Player(5616063).build("Vance Walker", "http://lorempixel.com/640/480", 84),
      new Player(989918).build("Ms. Leo Greenholt", "http://lorempixel.com/640/480", 93),
      new Player(5987904).build("Deja Rohan", "http://lorempixel.com/640/480", 12),
      new Player(4341481).build("Brennon Little", "http://lorempixel.com/640/480", 46),
      new Player(7326928).build("Coty Dooley", "http://lorempixel.com/640/480", 63),
      new Player(6820854).build("Ms. Garrick Thompson", "http://lorempixel.com/640/480", 32),
      new Player(5336649).build("Jamison Bergnaum V", "http://lorempixel.com/640/480", 71),
      new Player(7004623).build("Van Hessel", "http://lorempixel.com/640/480", 94),
      new Player(5901900).build("Braulio Jacobson V", "http://lorempixel.com/640/480", 97),
      new Player(7975118).build("Arlie Hahn", "http://lorempixel.com/640/480", 30),
      new Player(6648453).build("Chester Rowe", "http://lorempixel.com/640/480", 60),
      new Player(1474499).build("Dexter Douglas", "http://lorempixel.com/640/480", 32),
      new Player(6590911).build("Pansy MacGyver", "http://lorempixel.com/640/480", 42),
      new Player(650275).build("Ibrahim Goyette", "http://lorempixel.com/640/480", 37),
      new Player(1802431).build("Sunny Ward", "http://lorempixel.com/640/480", 17),
      new Player(4668949).build("Yolanda Herzog", "http://lorempixel.com/640/480", 24),
      new Player(3146565).build("Mrs. Ned Dach", "http://lorempixel.com/640/480", 31)
    ];
  }

  static Score()
  {
    return [
      new Score(8087193).build(28, this.Player()[0]),
      new Score(9555452).build(64, this.Player()[13]),
      new Score(7702007).build(41, this.Player()[15]),
      new Score(2118076).build(76, this.Player()[25]),
      new Score(2950732).build(91, this.Player()[30]),
      new Score(5393873).build(43, this.Player()[31]),
      new Score(3168262).build(43, this.Player()[6]),
      new Score(1373603).build(50, this.Player()[19]),
      new Score(5659462).build(10, this.Player()[1]),
      new Score(8387229).build(17, this.Player()[10]),
      new Score(2569706).build(93, this.Player()[22]),
      new Score(9006498).build(77, this.Player()[22]),
      new Score(3185308).build(36, this.Player()[28]),
      new Score(6207091).build(22, this.Player()[31]),
      new Score(8093238).build(84, this.Player()[7]),
      new Score(4742130).build(24, this.Player()[13]),
      new Score(1596973).build(41, this.Player()[24]),
      new Score(3094245).build(30, this.Player()[14]),
      new Score(1789255).build(35, this.Player()[21]),
      new Score(868157).build(72, this.Player()[0]),
      new Score(3025724).build(97, this.Player()[19]),
      new Score(3312884).build(49, this.Player()[7]),
      new Score(3271067).build(10, this.Player()[24]),
      new Score(2564398).build(71, this.Player()[18]),
      new Score(7385702).build(39, this.Player()[30]),
      new Score(8073503).build(18, this.Player()[16]),
      new Score(6839532).build(47, this.Player()[6]),
      new Score(1069425).build(16, this.Player()[28]),
      new Score(4643164).build(56, this.Player()[5]),
      new Score(8765790).build(88, this.Player()[28]),
      new Score(7669417).build(40, this.Player()[5]),
      new Score(1603479).build(48, this.Player()[9])
    ];
  }

  static Team()
  {
    return [
      new Team(7091275).build("Mrs. Alexandro Dare", "http://lorempixel.com/640/480", [this.Player()[21]]),
      new Team(4863512).build("Marjolaine Emmerich", "http://lorempixel.com/640/480", [this.Player()[28], this.Player()[6]]),
      new Team(1674621).build("Augustine Goldner", "http://lorempixel.com/640/480", [this.Player()[20], this.Player()[25]]),
      new Team(7307545).build("Sam Collins", "http://lorempixel.com/640/480", [this.Player()[10], this.Player()[8]]),
      new Team(3968056).build("Abe Welch", "http://lorempixel.com/640/480", [this.Player()[11]]),
      new Team(4600835).build("Spencer Connelly DDS", "http://lorempixel.com/640/480", [this.Player()[26], this.Player()[23]]),
      new Team(3195611).build("Dakota Friesen", "http://lorempixel.com/640/480", [this.Player()[10], this.Player()[28]]),
      new Team(6706213).build("Cory Von", "http://lorempixel.com/640/480", [this.Player()[21]]),
      new Team(5578048).build("Mr. Martin Schmitt", "http://lorempixel.com/640/480", [this.Player()[2]]),
      new Team(11814).build("Pearline Brakus", "http://lorempixel.com/640/480", [this.Player()[0], this.Player()[15]]),
      new Team(7153323).build("Lamar Hintz", "http://lorempixel.com/640/480", [this.Player()[29]]),
      new Team(2507205).build("Sylvia Hagenes V", "http://lorempixel.com/640/480", [this.Player()[12]]),
      new Team(9550919).build("Cale Heathcote", "http://lorempixel.com/640/480", [this.Player()[24], this.Player()[5]]),
      new Team(4995576).build("Norene Trantow", "http://lorempixel.com/640/480", [this.Player()[5]]),
      new Team(6254647).build("Darby Larson", "http://lorempixel.com/640/480", [this.Player()[24]]),
      new Team(5929372).build("Roel Cole", "http://lorempixel.com/640/480", [this.Player()[27], this.Player()[29]]),
      new Team(7141891).build("Pink Dare", "http://lorempixel.com/640/480", [this.Player()[4]]),
      new Team(4146022).build("Esther Murazik", "http://lorempixel.com/640/480", [this.Player()[12]]),
      new Team(6091760).build("Mercedes Gutkowski", "http://lorempixel.com/640/480", [this.Player()[10]]),
      new Team(4369373).build("Philip Bahringer", "http://lorempixel.com/640/480", [this.Player()[8]]),
      new Team(2757929).build("Dwight O'Connell", "http://lorempixel.com/640/480", [this.Player()[26], this.Player()[25]]),
      new Team(7186790).build("Arlene White", "http://lorempixel.com/640/480", [this.Player()[12], this.Player()[22]]),
      new Team(1377876).build("Hilma Hauck IV", "http://lorempixel.com/640/480", [this.Player()[18]]),
      new Team(295462).build("Jessica Dibbert", "http://lorempixel.com/640/480", [this.Player()[9]]),
      new Team(2758665).build("Genoveva Wyman", "http://lorempixel.com/640/480", [this.Player()[7], this.Player()[30]]),
      new Team(639586).build("Enola Schneider", "http://lorempixel.com/640/480", [this.Player()[10], this.Player()[21]]),
      new Team(302968).build("Griffin Walker", "http://lorempixel.com/640/480", [this.Player()[9]]),
      new Team(7789190).build("Kamryn Dickens", "http://lorempixel.com/640/480", [this.Player()[14], this.Player()[10]]),
      new Team(7435075).build("Darion Hagenes", "http://lorempixel.com/640/480", [this.Player()[17]]),
      new Team(4330256).build("Winnifred Green", "http://lorempixel.com/640/480", [this.Player()[5], this.Player()[11]]),
      new Team(3415173).build("Cayla Kulas", "http://lorempixel.com/640/480", [this.Player()[5], this.Player()[17]]),
      new Team(7575966).build("Mrs. Princess Hodkiewicz", "http://lorempixel.com/640/480", [this.Player()[11], this.Player()[21]])
    ];
  }

  static User()
  {
    return [
      new User(8299803).build("Rene.Kemmer@gmail.com", "voluptatibus"),
      new User(2060975).build("Rhea.Kerluke86@yahoo.com", "quia"),
      new User(1955189).build("Jolie52@yahoo.com", "est"),
      new User(9014612).build("Marianna_Zemlak39@hotmail.com", "ut"),
      new User(1423197).build("Guy58@hotmail.com", "cumque"),
      new User(9236162).build("Aurelie.Stehr48@hotmail.com", "et"),
      new User(5945374).build("Scarlett32@gmail.com", "et"),
      new User(6653426).build("Marielle.Kreiger@hotmail.com", "sapiente"),
      new User(2143330).build("Ebba.McLaughlin36@gmail.com", "mollitia"),
      new User(7886490).build("Anthony.Kunze77@hotmail.com", "et"),
      new User(3143363).build("Anne_Hoppe82@yahoo.com", "aut"),
      new User(2650442).build("Otilia_Osinski@yahoo.com", "qui"),
      new User(9084515).build("Lacy45@yahoo.com", "officiis"),
      new User(6402540).build("Rocio95@yahoo.com", "quo"),
      new User(2800378).build("Pedro_Labadie8@yahoo.com", "sit"),
      new User(1046191).build("Darion44@hotmail.com", "ratione"),
      new User(7562564).build("Luisa.Murazik@yahoo.com", "molestias"),
      new User(400516).build("Rey_Jones@gmail.com", "harum"),
      new User(4283283).build("Jaqueline.West@gmail.com", "odit"),
      new User(9227341).build("Fletcher_Parker@gmail.com", "et"),
      new User(5661448).build("Loren90@yahoo.com", "ea"),
      new User(636076).build("Alvera30@yahoo.com", "deleniti"),
      new User(6431747).build("Fanny_Davis@yahoo.com", "saepe"),
      new User(6156009).build("Ila98@gmail.com", "totam"),
      new User(3479812).build("Alaina_Russel@yahoo.com", "repellat"),
      new User(3681086).build("Mercedes.Mraz@hotmail.com", "incidunt"),
      new User(2062511).build("Jerrold_Nienow@hotmail.com", "hic"),
      new User(1903855).build("Verner.Boyer17@gmail.com", "quibusdam"),
      new User(732542).build("Caleigh.Fisher@gmail.com", "possimus"),
      new User(2527037).build("Anastasia.Homenick52@gmail.com", "dolor"),
      new User(8403972).build("Irma_Nienow@hotmail.com", "dicta"),
      new User(8165602).build("Micheal.Watsica20@gmail.com", "est")
    ];
  }
}
export default Mocks;