import ExecutorP from "@support/controllers/generators/Executor"

abstract class Executor extends ExecutorP
{
  protected genFile = "route-generator.csv";
  protected resources = [];
  protected classes = [];
  protected endpoints = [];
  protected params = [];
  protected queries = [];

  async extractData()
  {
    this.queries["GET"] = [];
    for (let data of this.dataSet) {

      //ENDPOINTS

      let resource = `${data.name.split("/")[1]}`;
      let endpoint = `${data.name}|${data.method}`;
      let className = data.class;

      if (this.resources.indexOf(resource) == -1) {
        this.resources.push(resource);
        this.classes[resource] = className;
        this.endpoints[resource] = [];
      }

      if (this.endpoints[resource].indexOf(endpoint) == -1) {
        this.endpoints[resource].push(endpoint);
        this.params[endpoint] = data.params.split("\t");
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
        if (this.queries["GET"].indexOf(className) == -1)
          this.queries["GET"][className] = params;
      }
    }
  }
}

export default Executor;