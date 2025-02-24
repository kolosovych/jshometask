var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    }, 
];


const validEmail = arr
    .map(obj => obj.email) 
    .filter(email => /.+?@(gmail\.com|yahoo\.com)$/.test(email)); 

console.log(validEmail);
