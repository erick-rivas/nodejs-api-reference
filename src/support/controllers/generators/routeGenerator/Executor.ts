import ExecutorP from "@support/controllers/generators/Executor"

abstract class Executor extends ExecutorP
{
  protected genFile = "route-generator.csv";
  protected resources = [];
  protected classes = [];
  protected endpoints = [];

  async extractData()
  {
    for (let data of this.dataSet) {

      let resource = `${data.name.split("/")[1]}`;
      let endpoint = `${data.name}|${data.method}`;
      let className = data.class;

      if (this.resources.indexOf(resource) == -1) {
        this.resources.push(resource);
        this.classes[resource] = className;
        this.endpoints[resource] = [];
      }

      if (this.endpoints[resource].indexOf(endpoint) == -1)
        this.endpoints[resource].push(endpoint);
    }
  }
}

export default Executor;