// 定义一个接口
export interface PersonInterface {
  id?: number;
  name: string;
  age: number;
  sex?: string;
}

// 定义一个类型别名
//export type Persons = Array<PersonInterface>; 或者
export type Persons = PersonInterface[];