import * as React from 'react';
import './JobForm.css';

type PartInfoProps =
    {}

export const PartInfo = () => {
    return (
        <React.Fragment>
            <div className="margin">
                <div className="card padding">
                    <div className="card-body">
                        <h5 className="card-title">Part</h5>
                        <form>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Part Name</label>
                                        <input type="string" className="form-control" id="partName"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="string" className="form-control" id="description"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input type="string" className="form-control" id="Quantity"></input>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Special Instruction</label>
                                        <textarea className="form-control" id="instructions" rows={10}></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Drag Picture Here</label>
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