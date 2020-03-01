import * as React from 'react';
import './JobForm.css';

export const Packaging = () => {
    return (
        <div className="margin">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Packaging</h5>
                    <form>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Packaged By</label>
                                    <input type="string" className="form-control" id="partName"></input>
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input type="string" className="form-control" id="description"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}