export interface NavigationItem {
  title: string;
  url: string,
  children?: NavigationItem;
  forHidden?: boolean;
}
