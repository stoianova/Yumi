
export const validName = new RegExp(
    /\W{10,11}/
);

export const validNumber = new RegExp(
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



