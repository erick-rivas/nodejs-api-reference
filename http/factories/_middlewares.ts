import Authentication from "@middlewares/_authentication";

class Middlewares
{
  static createAuthentication()
  {
    return new Authentication();
  }
}

export default Middlewares;