// 1.A. Define getStatuses here:
//      Sample endpoint: 
//      https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=cats&count=3 

const getStatuses = async (searchTerm, numberOfStatuses) => {
    const rootURL = ' https://www.apitutor.org/twitter/simple/1.1/search/tweets.json';
    const endpoint = `${rootURL}?q=${searchTerm}&count=${numberOfStatuses}`;
    const response = await fetch(endpoint);
    const statuses = await response.json();
    return statuses;
}


// 1.B. Define getUserDetails here:
//      Sample endpoint: 
//      https://www.apitutor.org/twitter/1.1/users/show.json?screen_name=oprah

const getUserDetails = async (username) => {
    const rootURL = ' https://www.apitutor.org/twitter/1.1/users/show.json';
    const endpoint = `${rootURL}?screen_name=${username}`;
    const response = await fetch(endpoint);
    const userDetails = await response.json();
    return userDetails;
}



/****************/
/* Testing Code */
/****************/

// Helper functions:
const pauseToBePolite = async () => {
    console.log('Pausing for half a second to be polite (and also because Twitter throttles requests)...');
    await new Promise(r => setTimeout(r, 500));
}

const testGetStatuses = async () => {
    await pauseToBePolite();
    console.log('Should display 10 statuses about flowers:', await getStatuses('flowers', 10));
    
    await pauseToBePolite();
    console.log('Should display 5 statuses about cats:', await getStatuses('cats', 5));
}

const testGetUserDetails = async () => {
    await pauseToBePolite();
    console.log('Should display Oprah:', await getUserDetails('oprah'));
    
    await pauseToBePolite();
    console.log('Should display UNCA Athletics:', await getUserDetails('UNCAvlBulldogs'));
}

// uncomment this line when you've finished with Q1A:
testGetStatuses();

// uncomment this line when you've funished with Q1B:
testGetUserDetails()


