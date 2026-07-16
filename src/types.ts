export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Course {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
}

export interface JobNotification {
  id: string;
  title: string;
  date: string;
  department: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
