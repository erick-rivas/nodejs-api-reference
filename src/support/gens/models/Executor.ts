import Util from "@support/gens/Util"
import ExecutorP from "@support/gens/Executor"

abstract class Executor extends ExecutorP
{
  protected genFile = "model-generator.csv";
  protected classes = [];
  protected levels = [];
  protected attrs = [];
  protected models = [];
  protected consts = [];

  async extract()
  {
    for (let data of this.dataSet) {

      let className = Util.snakeToCamel(data.class_name);
      let attribute = Util.snakeToCamel(data.attribute);
      let type = Util.snakeToCamel(data.type);

      if (attribute == "id") continue;

      if (this.classes.indexOf(className) == -1) {
        this.classes.push(className);
        this.levels[className] = data.class_level;
        this.attrs[className] = [];
        this.models[className] = [];
        this.consts[className] = [];
      }

      this.attrs[className].push({
        name: attribute,
        type: type,
        description: data.description,
        collection: data.collection
      });

      if (data.description == "_MODEL") {
        if (type.endsWith("[]"))
          this.models[className][type.slice(0, -2)] = 0;
        else
          this.models[className][type] = 0;
      }

      else if (data.description == "_CONST")
        this.consts[className][type] = data.collection;
    }
  }
}

export default Executor;