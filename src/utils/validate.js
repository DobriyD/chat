export default ({ isAuth, values, errors }) => {

    const rules = {

        email: (value) => {
            if (!value) {
                errors.email = 'Required';
            } else if (
                !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(value)
            ) {
                errors.email = 'Invalid email address';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Enter the password';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/i.test(
                value)) {
                errors.password = isAuth ? 'Wrong password' : 'Too sassy password';
            }
        }
    }

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key])
    );

};

