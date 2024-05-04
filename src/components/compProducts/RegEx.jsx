
export const validName = new RegExp(
    // '^[a-z]{2,30}$/i'
    // /^([A-z])+(.?[a-zA-Z])('?[a-zA-Z])$/
    /\W{10,11}/
);

export const validNumber = new RegExp(
    // /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    // /^[0-9]{12}$/
    /^[380]+[0-9]{9}$/gm
);

export const validStreet = new RegExp(
    /^[a-z]{3,}$/i
);

export const validBuildNum = new RegExp(
    /^[0-9]{1,5}$/
);

export const validApart = new RegExp(
    /^[0-9]{1,5}$/
);

export const validTime = new RegExp(
    // /^[0-9]{2}+(:)[0-9]{2}/
    /\d/
);

export const validComments = new RegExp(
    /\W{1,1000}/
);



// if(validNumber.test(number.value) && validName.test(name.value) && time.value.length >1 && comments.value.length >1){
//     submitButton.removeAttribute('disabled')
// }
// else{
//     submitButton.setAttribute('disabled', true)
// }   }