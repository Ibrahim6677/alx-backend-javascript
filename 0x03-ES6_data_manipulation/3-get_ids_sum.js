


export default function getStudentIdsSum(students, id) {
    if (students instanceof Array){
        return students.reduce(
            (acc, student) => acc + student.id, 0);
    }
    return 0;
}