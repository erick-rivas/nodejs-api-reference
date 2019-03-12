# Template Generator

## Instructions

### Model generator

1. Open assets/dev/model-generator.csv
2. Modify generator contemplating the following rules
    - class_name: Name of the class *(e.g Player)*
    - attribute: Attribute name *(e.g Name)*
    - type: Attribute type *(e.g string)*
    - description: Attribute description to identify data type & generate mocks:
      - Use _MODEL to describe model types & arrays
      - Use _CONST to describe enums
      - You can use the following words to generate random data
        - name
        - noun
        - email
        - imageUrl
  - class_level: Relative number of generate mocks
    > For example: If a class has n childs, the parent may have 1 class_level while the children 2
  - collection: Extra data to describe _CONST type *(e.g [ACTIVE, RETIRED])*

### Route generator

3. Open assets/dev/route-generator.csv
4. Modify generator contemplating the following rules
  - class: Name of the resource related to the endpoint *(e.g Player)
  - name: Endpoint name *(e.g /players/:id)*
  - method: Endpoint method *(e.g GET, POST)*
  - params: Parameters of the endpoint
    > IMPORTANT: Use tabs (\t) to separate items (e.g a&nbsp;&nbsp;b&nbsp;&nbsp;c). <br/>
    It can be done coping excel columns inside one cell.

### Generate files
5. Open console and type
  - For api-generator
  ```bash
  $ npm run-script gen-api
  ```
  - For react-generator
  ```bash
  $ npm run-script gen-react
  ```
6. Check generate files in **/assets/dev/gen**
