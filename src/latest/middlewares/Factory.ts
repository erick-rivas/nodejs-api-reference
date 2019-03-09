import Authentication from "@lt/middlewares/Authentication";

class Factory
{
  static createAuthentication()
  {
    return new Authentication();
  }
}

export default Factory;