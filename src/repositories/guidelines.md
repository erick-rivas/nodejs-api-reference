# Business repositories

## Overview
  - *.ts:  Represent the abstractions (interfaces) of system actions.
<br/><br/>

### Code Guidelines

- Each model must follow the following structure
```typescript
//imports

class XModel extends Model
{
  //Attributes ...
  //Constructor
  //build();
  //toJSON();
}

export default XModel;
```
- Each attribute must be defined public
```typescript
  name: string
```
- The constructor only can have the identifier of the model as parameter
```typescript
  constructor(id: number)
  {
    super();
    this.id = id;
  }
```
- Each model **must have** a build() method to initialize all the variables, and must follow the following structure
```typescript
  build(attr1: type1, attr2: type2): XModel
  {
    this.attr1 = attr1;
    this.attr2 = attr2;
    return this;
  }
```
- Each models **must override** the toJSON() method and follow the following structure:
```typescript
  toJSON()
  {
    return {
      attr_1: this.attr1,
      attr_2: this.attr2
    };
  }
```
> The toJSON() method must use a snake_case and **can omit** some attributes such as passwords and sensitive attributes


### Quality checklist

- [ ] Only imports @models modules,
- [ ] All the attributes in Const.ts are enums type.
- [ ] All enums in Const.ts are written in uppercase.
- [ ] All models have build() methods.
- [ ] All models override toJSON() methods
- [ ] Any models export sensitive content in toJSON() method *e.gpasswords,secret_keys*.
- [ ] Mocks.ts methods implement a method to generate **all** models with at least 3 mocks each one.


