export const grades = [
    {id: "preschool", label: "Preschool", color: "purple"},
    { id: "primary", label: "Primary Grades", color: "yellow" },
    { id: "upper-elementary", label: "Upper Elementary", color: "green" },
    { id: "middle-school", label: "Middle School", color: "blue" },
    { id: "high-school", label: "High School", color: "pink" },
] as const;

export type GradeLevel = (typeof grades)[number]["id"];