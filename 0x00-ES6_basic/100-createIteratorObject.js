export default function createIteratorObject(report) {  
    const employees = Object.values(report.allEmployees).flat();  
    let index = 0;  

    return {  
        next: function() {  
        if (index < employees.length) {  
            return { value: employees[index++], done: false };  
        } else {  
            return { done: true };  
        }  
        },  
            [Symbol.iterator]: function() {  
            return this; // اجعل الإيتيريتور يمكن استخدامه في حلقة for-of  
        }  
    };  
}
