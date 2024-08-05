export default function createReportObject(employeesList) {  
    return {  
        allEmployees: employeesList,  
    
        getNumberOfDepartments() {  
            return Object.keys(this.allEmployees).length; // احصل على عدد الأقسام  
        }  
    };  
}
