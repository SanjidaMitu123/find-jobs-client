


import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function Updatejobdetails() {
  

   

    
    
    const jobs = useLoaderData();


   





    const {_id,employername,jobtitle,description,minimumprice,maxprice,category,img} = jobs;

   

    const updatejob = event =>{
        event.preventDefault(); 
       
        const form = event.target;
        
        const employername = form.employername.value;
        const jobtitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const minimumprice = form.minimumprice.value;
        const maxprice = form.maxprice.value;
        const category = form.category.value;
        const img = form.img.value;

        const updatedjob = { employername,jobtitle,deadline,description,minimumprice,maxprice,category,img };
        console.log(updatedjob);

        fetch(`https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/jobs/${_id}`,{
            method : 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedjob)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'success!',
              text: 'Updated Job successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })


     }
    return (
        <div>
        
            <div className="bg-primary m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Update Job details</h1>
            <form 
            onSubmit={updatejob}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Email of the employer</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="employername" defaultValue={employername} placeholder="Email of the employer" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Job Title</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="jobtitle"  defaultValue={jobtitle} placeholder="Job Title" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                        <input type="date" name="deadline"  placeholder="Deadline" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Description</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                    <input type="number" name="minimumprice" defaultValue={minimumprice} placeholder="Minimum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Maximum price</span>
                    </label>
                    <label className="input-group">
                    <input type="number" name="maxprice"  defaultValue={maxprice} placeholder="Maximum price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                        <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Image URL</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="img" defaultValue={img} placeholder="Image URL" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        </div>

                  

                      <input type="submit" value="Update job" className="  btn btn-block " />



            </form>
            </div>
        </div>
    )
}

export default Updatejobdetails;
