class Util
{
  static camelToSnake(s: string): string
  {
    return s.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "");
  }

  static snakeToCamel(s: string): string
  {
    return s.replace(/_\w/g, (m) => m[1].toUpperCase());
  }

  static iniToUpper(s: string): string
  {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  static iniToLower(s: string): string
  {
    return s.charAt(0).toLowerCase() + s.slice(1);
  }

  static sp(len: number): string
  {
    let res = "";
    for (let i = 0; i < len; i++)
      res += " ";
    return res;
  }
}

export default Util;