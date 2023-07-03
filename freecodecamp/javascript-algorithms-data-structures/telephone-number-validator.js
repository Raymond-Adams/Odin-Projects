const telephoneRegex = /^\d{10}$|^(1 ?)?(\(\d{3}\) ?|\d{3}[ -])\d{3}[ -]\d{4}$/;
const telephoneCheck = (str) => telephoneRegex.test(str);
