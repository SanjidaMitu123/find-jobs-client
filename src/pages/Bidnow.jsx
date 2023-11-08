import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../firebase/Authprovider";
import Swal from "sweetalert2";

function Bidnow() {
    const {user}= useContext(AuthContext);

    const [jobdetails,setcardetails] = useState ({});

    const {_id} = useParams();
    
    const jobs = useLoaderData();


    useEffect(()=>{
        const finddetails = jobs?.find((job1)=> job1._id == _id)


        setcardetails(finddetails);


},[_id,jobs])


    const {employername,minimumprice,maxprice ,deadline,jobtitle,description,category,img} = jobdetails || {}

    const bidnow = event =>{
        event.preventDefault(); 

        const form = event.target;
        const myemail= form.myemail.value;
        const deadline = form.deadline.value;
        const buyeremail= form.buyeremail.value;
        const bidprice= form.bidprice.value;
        const jobtitle= form.jobtitle.value;
        const description= form.description.value;
        const category= form.category.value;
        const img= form.img.value;
        const status= "pending";

        const newbid = { myemail,buyeremail,bidprice,deadline,jobtitle,description,category,img,status}
        fetch('https://b8a11-server-side-sanjida-mitu123-1j3zjc8ut.vercel.app/bids',{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newbid )
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                  title: 'success!',
                  text: 'You send bid request successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              }
          })


       }
    return (
        <div>
          
            <div>
        <div key={_id} className="bg-primary m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Place Your Bid </h1>
            <form 
            onSubmit={bidnow}
            >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">My Email</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="myemail"  defaultValue={user?user.email:""} placeholder="My Email" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Buyer Email</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="buyeremail" defaultValue={employername} placeholder="Buyer Email" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                </div>
             {/* row 2 */}
                                            <div className="flex">

                                            <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold"> Price(rang is {minimumprice} to {maxprice})</span>
                  </label>
                  <label className="input-group">
                  <input type="number" name="bidprice" placeholder="Amount" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                            <div className="form-control w-1/2">
                            <label className="label m-4 mb-0">
                            <span className="label-text text-xl font-bold">Deadline</span>
                            </label>
                            <label className="input-group">
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="Buyer Email" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                            </label>
                            </div>

                            </div>

                                                {/* row 3*/}
                                        <div className="flex">

                                        <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Job Title</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="jobtitle" defaultValue={jobtitle} placeholder="Job Title" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                        {/* row 4*/} 
                          
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
                              

                
                




                <input type="submit" value=" Bid on the project" className="  btn btn-block " />


            </form>
            </div>
            </div> 
        </div>
    )
}

export default Bidnow;
