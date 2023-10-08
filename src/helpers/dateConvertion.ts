

export const dateConvertion = ( date: string ) => {
    const dateToObject = new Date( date );

    return dateToObject.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


}