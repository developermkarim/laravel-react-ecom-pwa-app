class Validation{

    static namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    static emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    static passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    static phoneNumberPattern = /^\+\d{1,3}-\d{6,14}$/;

};

export default Validation;