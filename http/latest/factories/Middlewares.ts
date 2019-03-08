import Authentication from "@http/middlewares/Authentication";


class Middlewares
{
  static createAuthentication()
  {
    return new Authentication();
  }
}

export default Middlewares;