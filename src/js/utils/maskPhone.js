import IMask from 'imask';

export const maskPhone = phone => {
    const maskOptions = {
        mask: '+{375} (00) 000-00-00',
    };
    IMask(phone, maskOptions);
}