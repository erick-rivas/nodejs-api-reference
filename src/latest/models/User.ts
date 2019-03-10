import Model from "@util/Model";


class User extends Model
{
  id: number;
  email: string;
  password: string;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(email: string, password: string): User
  {
    this.email = email;
    this.password = password;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      email: this.email,
      password: this.password
    };
  }
}

export default User;