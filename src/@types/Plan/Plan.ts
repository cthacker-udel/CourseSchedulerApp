import type { Semester } from "../Semester/Semester";

/**
 * Plan type, contains a list of courses
 */
export type Plan = {
    name: string;
    semesters: Semester[];
};
