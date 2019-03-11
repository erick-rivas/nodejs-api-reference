import ExecutorP from "@support/controllers/generators/Executor"
import
{
  MIDDLEWARES_TEMPLATE, MIDDLEWARE_AUTH_TEMPLATE,
  MIDDLEWARE_FACTORY_TEMPLATE, SQL_EXECUTOR_TEMPLATE
} from "@support/controllers/generators/defaultGenerator/Templates"

class GenerateDefaults extends ExecutorP
{
  protected genFile = "model-generator.csv";

  async extractData() { }

  async generateTs()
  {
    let mids = MIDDLEWARES_TEMPLATE.toString().trim();
    let midAuth = MIDDLEWARE_AUTH_TEMPLATE.toString().trim();
    let midFact = MIDDLEWARE_FACTORY_TEMPLATE.toString().trim();
    let sqlExec = SQL_EXECUTOR_TEMPLATE.toString().trim();

    super.generateFile("", "Middlewares.ts", mids)
    super.generateFile("/middlewares", "Authentication.ts", midAuth);
    super.generateFile("/middlewares", "Factory.ts", midFact);
    super.generateDir("/sources");
    super.generateFile("/sources/sql", "Executor.ts", sqlExec);
  }

}

export default GenerateDefaults;