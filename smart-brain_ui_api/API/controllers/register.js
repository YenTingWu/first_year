
const handleRegister = (db, bcrypt) => (req, res) => {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password);
   
    if(!name || !email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    
    // Load hash from your password DB.
    
    // transaction can do more then two things
    db.transaction(trx => {

        // use trx to do the operation

        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')

        // return email to do the next step

        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0],
                    name: name,
                    joined: new Date(),
                })
                .then(user => {
                    res.json(user[0]);
                })
                
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => console.log(err));   
}

module.exports = {
    handleRegister: handleRegister
}