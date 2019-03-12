import Util from "@support/gens/Util"
import ExecutorP from "@support/gens/Executor"

abstract class Executor extends ExecutorP
{
  protected genFile = "route-generator.csv";
  protected resources = [];
  protected classes = [];
  protected endpoints = [];
  protected params = [];
  protected queries = [];
  protected queriesAllGet = true;

  async extract()
  {
    this.queries["GET"] = [];
    for (let data of this.dataSet) {

      //ENDPOINTS

      let resource = `${data.name.split("/")[1]}`;
      let endpoint = `${data.name}|${data.method}`;
      let className = Util.camelToSnake(Util.iniToLower(data.class));

      if (this.resources.indexOf(resource) == -1) {
        this.resources.push(resource);
        this.classes[resource] = className;
        this.endpoints[resource] = [];
      }

      if (this.endpoints[resource].indexOf(endpoint) == -1) {
        this.endpoints[resource].push(endpoint);
        if (data.params.indexOf("\t") == -1)
          this.params[endpoint] = data.params.split(",");
        else
          this.params[endpoint] = data.params.split("\t");
        for (let p in this.params[endpoint])
          this.params[endpoint][p] = this.params[endpoint][p].trim();
      }

      //QUERIES

      let queryType = data.method;
      let args = data.name.split("/")[2];
      if (args && args != ":id")
        queryType = null;
      else if (!args && queryType == "GET")
        queryType = "GET_LIST";

      if (queryType) {
        if (!this.queries[queryType])
          this.queries[queryType] = [];
        let params = [];
        if (data.params) params = data.params.split("\t");
        this.queries[queryType][className] = params;
        if (this.queriesAllGet) {
          if (this.queries["GET"].indexOf(className) == -1)
            this.queries["GET"][className] = params;
        }
      }
    }

    //SORT ENDPOINTS

    for (let r of this.resources) {
      let temp = [];
      for (let e of this.endpoints[r]) {
        let endpoint = e.split("|")[0];
        let method = e.split("|")[1];
        let args = endpoint.split("/")[2];
        let value = 1000;
        if (method == "POST") value = 100;
        if (method == "PUT") value = 10;
        if (method == "DELETE") value = 1;
        if (args) {
          if (args == ":id") value += 1;
          else value += 2;
        }
        temp.push({
          value: value,
          data: e
        });
      }

      temp.sort((a, b) =>
      {
        if (a.value > b.value)
          return -1;
        if (a.value < b.value)
          return 1;
        return 0;
      });

      this.endpoints[r] = [];
      for (let t of temp)
        this.endpoints[r].push(t.data);
    }
  }
}

export default Executor;