import React from 'react';

function Login() {
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
                                        <div className="form-group pb-1 row">
                                            <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">
                                                E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input placeholder="Email" type="email" className="form-control" required="true"/>
                                            </div>
                                        </div>
                                        <div className="form-group pt-1 row">
                                            <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">
                                                Password</label>
                                            <div className="col-md-6">
                                                <input type="password" placeholder="Password" className="form-control"
                                                       required="true"/>
                                            </div>
                                        </div>

                                        <div className="form-group p-2 row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>
                                                <a href="https://theukdpoa.com/password/reset" className="btn btn-link">
                                                    Forgot Your Password?
                                                </a>
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

export default Login;
