import getApplicant from '../src/get-applicant.js';
const test = QUnit.test;

test('creates potential date from form data', (assert) => {
    //Arrange
    const expected = {
        name: 'Steve',
        income: 'Decent',
        burrito: 'yes',
        cat: 9,
        catNumber: 3,
        somethingInteresting: 'buying flowers'
    };
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('income', expected.income);
    formData.set('burrito', 'yes');
    formData.set('cat', '9');
    formData.set('cat-number', '3');
    formData.set('something-interesting', expected.somethingInteresting);

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    //Assert
    assert.deepEqual(applicant, expected);
});