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
      new Match(8177539).build({ date: new Date("Sun Mar 10 2019 17:21:17 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[5], local: this.Team()[9], scores: [this.Score()[1]] }),
      new Match(6277577).build({ date: new Date("Sun Mar 10 2019 01:03:22 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[4], local: this.Team()[1], scores: [this.Score()[11], this.Score()[14]] }),
      new Match(9110491).build({ date: new Date("Sun Mar 10 2019 12:24:43 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[10], local: this.Team()[0], scores: [this.Score()[4]] }),
      new Match(1337586).build({ date: new Date("Sun Mar 10 2019 02:12:34 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[9], local: this.Team()[2], scores: [this.Score()[6], this.Score()[5]] }),
      new Match(6960122).build({ date: new Date("Sun Mar 10 2019 18:21:33 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[13], local: this.Team()[6], scores: [this.Score()[15], this.Score()[1]] }),
      new Match(9480793).build({ date: new Date("Sun Mar 10 2019 19:32:35 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[11], local: this.Team()[1], scores: [this.Score()[9]] }),
      new Match(1950749).build({ date: new Date("Sun Mar 10 2019 20:59:27 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[13], local: this.Team()[13], scores: [this.Score()[9], this.Score()[10]] }),
      new Match(1732112).build({ date: new Date("Sun Mar 10 2019 08:40:37 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[6], local: this.Team()[8], scores: [this.Score()[14]] }),
      new Match(7199503).build({ date: new Date("Sun Mar 10 2019 19:01:27 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[1], local: this.Team()[9], scores: [this.Score()[15], this.Score()[6]] }),
      new Match(6140901).build({ date: new Date("Sun Mar 10 2019 21:16:46 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[13], local: this.Team()[7], scores: [this.Score()[7]] }),
      new Match(1105531).build({ date: new Date("Sun Mar 10 2019 01:31:17 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[9], local: this.Team()[9], scores: [this.Score()[1], this.Score()[7]] }),
      new Match(7232188).build({ date: new Date("Sun Mar 10 2019 22:17:18 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[4], local: this.Team()[6], scores: [this.Score()[8]] }),
      new Match(1619693).build({ date: new Date("Sun Mar 10 2019 01:00:38 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[13], local: this.Team()[3], scores: [this.Score()[9]] }),
      new Match(5703726).build({ date: new Date("Sun Mar 10 2019 11:26:47 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[5], local: this.Team()[14], scores: [this.Score()[9]] }),
      new Match(9916244).build({ date: new Date("Sun Mar 10 2019 08:32:24 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[14], local: this.Team()[12], scores: [this.Score()[12]] }),
      new Match(4280230).build({ date: new Date("Sun Mar 10 2019 15:12:59 GMT-0600 (Central Standard Time)"), type: MType.FRIENDLY, visitor: this.Team()[5], local: this.Team()[14], scores: [this.Score()[14], this.Score()[2]] })
    ];
  }

  static Player()
  {
    return [
      new Player(1419258).build({ name: "Derrick Cassin", photoUrl: "http://lorempixel.com/640/480", teamId: 9 }),
      new Player(7881197).build({ name: "Dr. Albin Schulist", photoUrl: "http://lorempixel.com/640/480", teamId: 86 }),
      new Player(40290).build({ name: "Elsa Sanford", photoUrl: "http://lorempixel.com/640/480", teamId: 99 }),
      new Player(5439859).build({ name: "Manley Kautzer", photoUrl: "http://lorempixel.com/640/480", teamId: 96 }),
      new Player(9081328).build({ name: "Hulda Kertzmann", photoUrl: "http://lorempixel.com/640/480", teamId: 38 }),
      new Player(6634079).build({ name: "Mrs. Collin Jenkins", photoUrl: "http://lorempixel.com/640/480", teamId: 53 }),
      new Player(867235).build({ name: "Kayla Grimes IV", photoUrl: "http://lorempixel.com/640/480", teamId: 77 }),
      new Player(5355055).build({ name: "Mr. Amparo Effertz", photoUrl: "http://lorempixel.com/640/480", teamId: 64 }),
      new Player(8469144).build({ name: "Karlee Ziemann", photoUrl: "http://lorempixel.com/640/480", teamId: 89 }),
      new Player(8284809).build({ name: "Bella Klein DDS", photoUrl: "http://lorempixel.com/640/480", teamId: 85 }),
      new Player(6653953).build({ name: "Joany Schuppe", photoUrl: "http://lorempixel.com/640/480", teamId: 66 }),
      new Player(7217409).build({ name: "Agustin Powlowski", photoUrl: "http://lorempixel.com/640/480", teamId: 55 }),
      new Player(7367038).build({ name: "Miss Jewell Lubowitz", photoUrl: "http://lorempixel.com/640/480", teamId: 92 }),
      new Player(3522584).build({ name: "Eileen Hermiston II", photoUrl: "http://lorempixel.com/640/480", teamId: 55 }),
      new Player(3746969).build({ name: "Kris Bauch", photoUrl: "http://lorempixel.com/640/480", teamId: 80 }),
      new Player(7083266).build({ name: "Miller Pollich", photoUrl: "http://lorempixel.com/640/480", teamId: 28 })
    ];
  }

  static Score()
  {
    return [
      new Score(584925).build({ min: 26, matchId: 93, player: this.Player()[8] }),
      new Score(2971155).build({ min: 62, matchId: 32, player: this.Player()[2] }),
      new Score(4175627).build({ min: 75, matchId: 7, player: this.Player()[4] }),
      new Score(897816).build({ min: 54, matchId: 62, player: this.Player()[7] }),
      new Score(9960920).build({ min: 20, matchId: 45, player: this.Player()[2] }),
      new Score(4345514).build({ min: 82, matchId: 86, player: this.Player()[12] }),
      new Score(1892643).build({ min: 8, matchId: 21, player: this.Player()[7] }),
      new Score(4863936).build({ min: 50, matchId: 65, player: this.Player()[4] }),
      new Score(9710325).build({ min: 71, matchId: 0, player: this.Player()[13] }),
      new Score(1361840).build({ min: 42, matchId: 64, player: this.Player()[2] }),
      new Score(1125445).build({ min: 15, matchId: 69, player: this.Player()[6] }),
      new Score(3939918).build({ min: 4, matchId: 7, player: this.Player()[4] }),
      new Score(6194620).build({ min: 71, matchId: 35, player: this.Player()[2] }),
      new Score(136724).build({ min: 73, matchId: 20, player: this.Player()[10] }),
      new Score(2838811).build({ min: 94, matchId: 27, player: this.Player()[6] }),
      new Score(3313942).build({ min: 63, matchId: 16, player: this.Player()[13] })
    ];
  }

  static Team()
  {
    return [
      new Team(8822048).build({ name: "Jewell Haag", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[9]] }),
      new Team(2782412).build({ name: "Miller Padberg", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[5], this.Player()[15]] }),
      new Team(4195077).build({ name: "Litzy Kilback MD", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[3]] }),
      new Team(1590106).build({ name: "Mallory Tremblay", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[8], this.Player()[12]] }),
      new Team(5682326).build({ name: "Quinten Dickinson", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[5], this.Player()[3]] }),
      new Team(5059450).build({ name: "Forrest Kutch", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[5], this.Player()[13]] }),
      new Team(6552730).build({ name: "Shanie Kemmer", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[3], this.Player()[4]] }),
      new Team(5214470).build({ name: "Stanton Mosciski", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[1]] }),
      new Team(8088017).build({ name: "Dr. Monroe Cormier", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[1], this.Player()[2]] }),
      new Team(2797931).build({ name: "Miss Santina Cremin", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[6], this.Player()[10]] }),
      new Team(9400339).build({ name: "Mrs. Margaret Konopelski", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[3], this.Player()[8]] }),
      new Team(5003297).build({ name: "Whitney Barrows", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[8]] }),
      new Team(9963735).build({ name: "Sabrina Shanahan", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[9], this.Player()[15]] }),
      new Team(1919433).build({ name: "Eldora Lindgren", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[10]] }),
      new Team(9683173).build({ name: "Mrs. Ulices Conn", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[10], this.Player()[7]] }),
      new Team(8786871).build({ name: "Piper Lubowitz", logoUrl: "http://lorempixel.com/640/480", players: [this.Player()[13], this.Player()[3]] })
    ];
  }

  static User()
  {
    return [
      new User(4864640).build({ email: "Wallace.Herzog32@hotmail.com", password: "minus" }),
      new User(9336101).build({ email: "Virginia18@yahoo.com", password: "modi" }),
      new User(6381172).build({ email: "Estelle_Kerluke@yahoo.com", password: "officia" }),
      new User(4863997).build({ email: "Kolby_Hills@hotmail.com", password: "dolorum" }),
      new User(1938238).build({ email: "Diamond69@gmail.com", password: "accusamus" }),
      new User(6555057).build({ email: "Sincere.Rohan64@yahoo.com", password: "nostrum" }),
      new User(1274495).build({ email: "Polly.Jacobson31@hotmail.com", password: "voluptate" }),
      new User(6601885).build({ email: "Ebba.Welch82@gmail.com", password: "et" }),
      new User(8657151).build({ email: "Helena_Kunde60@hotmail.com", password: "eum" }),
      new User(6998553).build({ email: "Gerald13@hotmail.com", password: "quam" }),
      new User(571414).build({ email: "Lyric_Hessel@hotmail.com", password: "ratione" }),
      new User(590412).build({ email: "Maida_Howe1@gmail.com", password: "vitae" }),
      new User(2372478).build({ email: "Meda_Sawayn@yahoo.com", password: "blanditiis" }),
      new User(9384251).build({ email: "Lilyan_Casper41@yahoo.com", password: "non" }),
      new User(6700886).build({ email: "Lou_Konopelski@gmail.com", password: "perspiciatis" }),
      new User(3118639).build({ email: "Prince47@hotmail.com", password: "magnam" })
    ];
  }
}
export default Mocks;