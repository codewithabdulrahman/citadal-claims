import React from 'react';

function Register() {
    return (
        <main className="py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <img src="https://theukdpoa.com/img/29.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">The GDPR Cyber Security Evidence Log (CSEL)</div>
                            <div className="card-body">
                                <div className="row">
                                    <form>
                                        <div className="form-group  pb-2 row">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">
                                                Name
                                            </label>
                                            <div className="col-md-6">
                                                <input id="name" type="text" name="name" value="" required="required"
                                                       autoFocus="autofocus"
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group  pb-2 row">
                                            <label htmlFor="company_name"
                                                   className="col-md-4 col-form-label text-md-right">Company
                                                Name
                                            </label>
                                            <div className="col-md-6">
                                                <input id="company_name" type="text"
                                                       name="company_name" value=""
                                                       required="required"
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group  pb-2 row">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">
                                                E-Mail Address
                                            </label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" name="email"
                                                       value="" required="required"
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group  pb-2 row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">
                                                Password
                                            </label>
                                            <div className="col-md-6">
                                                <input id="password" type="password"
                                                       name="password" required="required"
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group  pb-2 row">
                                            <label htmlFor="password-confirm"
                                                   className="col-md-4 col-form-label text-md-right">
                                                Confirm Password
                                            </label>
                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password"
                                                       name="password_confirmation"
                                                       required="required"
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group  pb-2 row mb-0">
                                            <div className="col-md-6 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
