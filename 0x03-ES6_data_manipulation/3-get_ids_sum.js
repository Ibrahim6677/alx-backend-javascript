
/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @returns {Number}
*/

export default function getStudentIdsSum(students, id) {
    if (students instanceof Array){
        return students.reduce(
            (acc, student) => acc + student.id, 0);
    }
    return 0;
}
