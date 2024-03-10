export enum State {
  Alarm = 'alarm',
  PreAlarm = 'prealarm',
  Fault = 'fault',
}

export interface Message {
  Key: string;
  Tag: string;
  Name: string;
  Description?: string;
  Type: State;
  Level: State;
  Timestamp: string;
  Timesvalue: number;
  Acknowledged: boolean;
}
