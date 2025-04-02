import { useForm } from "react-hook-form";

function Register(){
const{register,handleSubmit,setValue}=useForm()
function getForm(fromData){
console.log(fromData);
}

return (
<div className="box">
<h1>Sign  Up Here...!</h1>
<form onSubmit={handleSubmit(getForm)}>
    
    <label>Enter First Name</label>
    <input type="text"  {...register('firstName')}/> <br></br>


    <label>Enter Last Name</label>
    <input type="text"  {...register('lastName')}/> <br></br>

    <label>Enter Age</label>
    <input type="text"  {...register('age')}/> <br></br>

    <label>Enter Email id</label>
    <input type="text"  {...register('email')}/> <br></br>


    <label>Enter Pincode</label>
    <input type="text"  {...register('address.pincode')}/> <br></br>
    
    <label>Enter City name</label>
    <input type="text"  {...register('address.cityname')}/> <br></br>
    
    <label>Enter state name</label>
    <input type="text"  {...register('address.statename')}/> <br></br>
    
<button type="submit">Submit</button>
</form>
</div>

)


}

export default Register;

