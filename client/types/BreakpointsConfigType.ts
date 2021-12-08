import { Breakpoints } from 'enums';

export type BreakpointsConfigType = {
  [key in Breakpoints]: number;
}
