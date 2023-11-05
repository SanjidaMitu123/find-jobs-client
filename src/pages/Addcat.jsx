
import { Link } from "react-router-dom";
const Addcat = () => {
    return (
        <div>
           <div>
        <div className="bg-lime-300 m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Add Category</h1>
            <form 
            // onSubmit={addbrands}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Category Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="categoryname" placeholder="Category Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

              

                </div>
                <input type="submit" value="Add Category" className="  btn btn-block " />


            </form>
            <Link to='/addjobs'> <button  className=" text-center text-xl font-bold  btn btn-warning m-5" >Add Job Details</button> </Link>
        </div>
        
            
        </div>
        </div>
    );
};

export default Addcat;