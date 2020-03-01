import * as React from 'react';
import './JobForm.css';

type ProcessProps =
    {}

export const Process = () => {
    return (
        <React.Fragment>
            <div className="margin">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Process</h5>
                        <form>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Applicator Id</label>
                                        <input type="string" className="form-control" id="applicatorId"></input>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="card-subtitle mb-2 text-muted">Prep</h6>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-4">
                                    <label>Burn Off</label>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label>Temp</label>
                                            <input type="string" className="form-control" id="temp"></input>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>Time</label>
                                            <input type="string" className="form-control" id="Time"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label>Wash</label>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label>Type</label>
                                            <input type="string" className="form-control" id="washType"></input>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>Solvent</label>
                                            <input type="string" className="form-control" id="washTime"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label>Media Blast</label>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label>Grit</label>
                                            <input type="string" className="form-control" id="blastGrit"></input>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label>Pressure</label>
                                            <input type="string" className="form-control" id="blastPressure"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="card-subtitle mb-2 text-muted">Application</h6>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-row">
                                <label>Base Coat</label>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label>Name</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                                <div className="form-group col-sm-2">
                                    <label>Mixture</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>Water</option>
                                        <option>Solvent</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Ratio</label>
                                    <input type="string" className="form-control" id="ratio"></input>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Coats</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                                <div className="form-group col-sm-5">
                                    <label>Notes</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label>Gun Type</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>Gun Settings</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-row">
                                <label>Top Coat</label>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label>Name</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                                <div className="form-group col-sm-2">
                                    <label>Mixture</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>Water</option>
                                        <option>Solvent</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Ratio</label>
                                    <input type="string" className="form-control" id="ratio"></input>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Coats</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                                <div className="form-group col-sm-5">
                                    <label>Notes</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label>Gun Type</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label>Gun Settings</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-row">
                                <label>Cure</label>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-1">
                                    <label>Oven</label>
                                    <input type="string" className="form-control" id="name"></input>
                                </div>
                                <div className="form-group col-sm-2">
                                    <label>Type</label>
                                    <input type="string" className="form-control" id="ratio"></input>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Temp</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Time</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                                <div className="form-group col-sm-1">
                                    <label>Speed</label>
                                    <input type="string" className="form-control" id="coats"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};