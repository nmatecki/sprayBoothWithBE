import * as React from 'react';
import './JobForm.css';

type CustomerInfoProps =
    {}

export const CustomerInfo = () => {
    return (
        <React.Fragment>
            <div className="margin">
                <div className="card padding">
                    <div className="card-body">
                        <h5 className="card-title">Customer Info</h5>
                        <form>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Customer</label>
                                        <input type="string" className="form-control" id="customer"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Name</label>
                                        <input type="string" className="form-control" id="contactName"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="string" className="form-control" id="phone"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="string" className="form-control" id="Email"></input>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Address 1</label>
                                        <input type="string" className="form-control" id="address1"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Address 2</label>
                                        <input type="string" className="form-control" id="address2"></input>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label>City</label>
                                            <input type="string" className="form-control" id="city"></input>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>State</label>
                                            <input type="string" className="form-control" id="state"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label>Zip</label>
                                            <input type="string" className="form-control" id="zip"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Notes</label>
                                        <textarea className="form-control" id="notes" rows={8}></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};