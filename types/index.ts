export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
};