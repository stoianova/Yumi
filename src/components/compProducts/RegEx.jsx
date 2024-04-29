
export const validName = new RegExp(
    // '^[a-z]{2,30}$/i'
    /^([A-z])+(.?[a-zA-Z])('?[a-zA-Z])$/
);

export const validNumber = new RegExp(
    // /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    /^[0-9]{10}$/
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
