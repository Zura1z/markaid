export type Course = {
  title: string;
  year: string;
  description: string;
};

export type CourseCardProps = {
  title: string;
  studentCount: number;
  assignmentCount: number;
  quizCount:number;
  footer: string;
};
