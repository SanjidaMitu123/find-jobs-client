
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Addcat = () => {



    const addcat = event =>{
        event.preventDefault(); 

        const form = event.target;
        const categoryname = form.categoryname.value;
       

        const newcategory = { categoryname}
        fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/category',{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newcategory )
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                  title: 'success!',
                  text: 'Job Category added successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              }
          })


       }

    return (
        <div>
           <div>
        <div className="bg-primary m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Add Category</h1>
            <form 
            onSubmit={addcat}
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