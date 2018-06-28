enum Lang
{
  EN = "EN",
  ES = "ES"
};

const getEnum = (data, val: string, def) =>
{
  if (val) val = val.toUpperCase();
  for (let d in data)
    if (data[d].toUpperCase() == val)
      return d;
  return def;
}

export { Lang, getEnum };