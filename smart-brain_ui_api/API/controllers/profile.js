
const handleProfileGet = db => (req, res) => {
    const { id } = req.params;
    let found = false;
    db.select('*') // select all the data 
        .from('users') // from the database whose name is users 
        .where({id}) 

        // we select the data where the name is equal to req.params.id
        // and here probably will be only one object inside an array
        // It will pass to 'user' below

        .then(user => { 
            if(user.length) {
                res.json(user[0])
            }
            else {
                // If there is no any object inside the user array
                // then we return 400 bad request and 'Not found' awareness

                // which means if the user enter a account not existed 
                // we reject him from logging in

                res.status(400).json('Not found');
            }
        })
        .catch(err => res.status(400).json('error getting user'));
}

module.exports = {
    handleProfileGet: handleProfileGet
}