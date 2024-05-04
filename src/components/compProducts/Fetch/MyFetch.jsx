
// fetch('https://coffeemarket-775b0b283547.herokuapp.com/main/order/takeAway', {         // МОЙ КОД + ПРИМЕР БЕКА
//     method: 'POST', 
//     headers: { 'Content-Type': 'application/json' }, 
//     body: JSON.stringify(cart) 
// }) 
// .then(response => {
//     const contentType = response.headers.get('content-type');
//     if (!response.ok) {            
//         throw new Error('Network response was not ok.');
//     }           
//     if (!contentType || !contentType.includes('application/json')) {
//         throw new Error('Received non-JSON response from server.');
//     }
//         return response.json();       
// })
// .then(response => {
//     if (response.success) {
//         console.log('Success:', response.message);
//         alert('Registration successful!');
//         window.location.href = '/login';            
//     } 
//     else {
//         throw new Error(response.message);            }
// })   
//     console.log(response)
// .catch((error) => {
//     console.error('Error:', error);
//     alert('Error in registration: ' + error.message);
// });




// fetch('/api/registration', {                                                          // ПРИМЕР БЕКА
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json', 'X-XSRF-TOKEN': csrfToken },
//     body: JSON.stringify(formData)    
// })
// .then(response => {
//     const contentType = response.headers.get('content-type');
//         if (!response.ok) {            
//             throw new Error('Network response was not ok.');
//         }           
//         if (!contentType || !contentType.includes('application/json')) {
//             throw new Error('Received non-JSON response from server.');
//         }
//             return response.json();       
// })
// .then(data => {
//     if (data.success) {
//         console.log('Success:', data.message);
//         alert('Registration successful!');
//         window.location.href = '/login';            
//     } 
//     else {
//         throw new Error(data.message);
//     }
// })        
// .catch((error) => {
//     console.error('Error:', error);
//     alert('Error in registration: ' + error.message);
// });




// fetch('https://coffeemarket-775b0b283547.herokuapp.com/main/order/takeAway', {        //МОЙ КОД ОРИГИНАЛ
//     method: 'POST', 
//     headers: { 'Content-Type': 'application/json' }, 
//     body: JSON.stringify(cart) 
// }) 
// .then(response => response.json()) 
// .then(data => console.log(data)) 
// .catch(error => console.error(error));