import { Link } from 'react-router-dom';


const Addjob = () => {
    return (
        <div>
             <div className="bg-primary m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Add Job details</h1>
            <form 
            // onSubmit={addproduct}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Email of the employer</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="Employername" placeholder="Email of the employer" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Job Title</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="Jobtitle" placeholder="Job Title" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                </div>

                 {/* row 2 */}
                 <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Deadline</span>
                        </label>
                        <label className="input-group">
                        <input type="date" name="Deadline" placeholder="Deadline" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Description</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="Description" placeholder="Description" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        </div>

                    {/* row 3 */}
                    <div className="flex">

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Minimum price</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="Minimum-price" placeholder="Minimum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Maximum price</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="Maxprice" placeholder="Maximum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    </div>
                                            {/* row 4 */}
                                            <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">category</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="category" placeholder="category" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                       

                        </div>

                  {/* row 5 */}
                                            <details className="dropdown">
                            <summary className="m-1 btn">category</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                            </details>

                      <input type="submit" value="Add job" className="  btn btn-block " />



            </form>
            <Link to='/addcat' > <button className="text-center text-xl font-bold  btn btn-warning m-5">Add Category</button> </Link> 
    
        </div>
        </div>
    );
};

export default Addjob;