export interface SocialLinks {
  linkedin: string;
  github: string;
  codolio: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  resumeUrl: string;
  links: SocialLinks;
}
