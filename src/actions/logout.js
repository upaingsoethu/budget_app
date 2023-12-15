import { redirect } from "react-router-dom";
import { deleteData } from "../helper";
import { toast } from "react-toastify";

export async function logoutAction(){
     deleteData("userName")
     toast.success('Successfully deleted.')
    return redirect('/')
}