export type Course = {
  id: number;
  title: string;
  description: string;
  teacher: number;
  students: number[];
};

// Props
export type CourseCardProps = {
  title: string;
  studentCount: number;
  assignmentCount: number;
  quizCount: number;
  footer: string;
};

export type IdProp = {
  id: number;
};
