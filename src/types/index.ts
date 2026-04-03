export interface ServiceCard {
  title: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

export interface FooterNavSection {
  heading: string;
  links: Array<{ text: string; href: string }>;
}

export interface CopyCenter {
  name: string;
  distance: string;
  address: string;
  phone: string;
  phoneExt: string;
  email: string;
  hours: string;
  photos: Array<{ src: string; alt: string }>;
}

export interface NavLink {
  text: string;
  href: string;
  external?: boolean;
  hasDropdown?: boolean;
}
