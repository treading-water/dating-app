const test = QUnit.test;

const applicantApi = {
    save(applicant) {
        // serialize to json
        const json = JSON.stringify(applicant);
        // save to local storage
        localStorage.setItem('applicant', json);
    },
    get() {
        // get from local storage
        const json = localStorage.getItem('applicant');
        //deserialize to object
        const applicant = JSON.parse(json);
        //return it
        return applicant;
    }
};

test('round-trip applicant', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const applicant = { name: 'tester' };

    //Act 
    // Call the function you're testing and set the result to a const
    applicantApi.save(applicant);
    const result = applicantApi.get();
    
    //Assert
    assert.deepEqual(result, applicant);
});