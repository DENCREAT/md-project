export interface NavigationItem {
  id?: symbol,
  title: string;
  url: string,
  children?: NavigationItem[];
  forHidden?: boolean;
}
