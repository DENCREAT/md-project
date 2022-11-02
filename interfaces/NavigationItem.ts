export interface NavigationItem {
  id?: string,
  title: string;
  url: string,
  iconClass?: string,
  children?: NavigationItem[];
  forHidden?: boolean;
}
