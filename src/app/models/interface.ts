export interface formData {
  yStart: number;
  yStop: number;
  xLength: number;
}
export interface Lab3Form {
  VDown: number;
  DDown1: number;
  DDown2: number;
  VUp: number;
  DUp1: number;
  DUp2: number;
}

export interface chartShow {
  name: string;
  show: boolean;
}
export interface Lab1Data {
  x: number;
  ai1: number;
  ai2: number;
}
export interface Lab2Data {
  X: number;
  Y: number;
  V: number;
  A: number;
}
export interface Lab3Data {
  X: number;
  V: number;
  mm: number;
  'm/s': number;
  'm/s^2': number;
}
export interface Lab4Data {
  t: number;
  V0: number;
  V1: number;
  V2: number;
  '"-V3"': number;
  'n(t) dla V1': number;
  'n(t) dla V2': number;
  'n(t) dla V3': number;
}
export interface FormLab3 {
  form: Lab3Form;
  switchFrom: boolean;
}
