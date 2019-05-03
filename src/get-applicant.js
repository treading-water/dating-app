function getApplicant(formData) {
    //convert data to variables
    const likesBurrito = formData.get('burrito') === 'no';
    const cat = parseInt(formData.get('cat'));
    const catNumber = parseInt(formData.get('cat-number'));

    //make our object literal
    const applicant = {
        name: formData.get('name'),
        income: formData.get('income'),
        burrito: likesBurrito,
        cat: cat,
        catNumber: catNumber,
        somethingInteresting: formData.get('something-interesting')
    };
    return applicant;
}

export default getApplicant;