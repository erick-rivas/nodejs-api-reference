import { Response, Next } from "express";

enum Code
{
  BAD_REQUEST = 402,
  UNAUTHORIZED = 403
}

class Responses
{
  static next(next: Next)
  {
    next();
  }

  static sendError(res: Response, code: number)
  {
    res.status(code);
    res.send(code.toLocaleString());
  }

  static sendErrorMessage(res: Response, code: Code, message: string)
  {
    res.status(Code[code]);
    res.send(code.toLocaleString() + ": " + message);
  }
}

export default Responses;