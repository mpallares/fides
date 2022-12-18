export interface User {
  createdAt?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  longDescription?: string;
  company?: string;
  address?: string;
  phone?: string;
  shortDescription?: string;
  projects?: [Project];
  id: string;
}

export interface Project {
  city?: string;
  description?: string;
  phone?: string;
}
