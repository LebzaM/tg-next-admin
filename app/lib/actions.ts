"use server"
import User from "./models";
import connectToDatabase from "./utils";
import { UserModel } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const addUser = async (formData: FormData): Promise<UserModel | null> => {
    try {
        connectToDatabase()
      const {
        name,
        lastname,
        telephone,
        email,
        manager,
        password,
        department,
        status,
      } = Object.fromEntries(formData);
  
      const newUser = new User({
        name,
        lastname,
        telephone,
        email,
        manager,
        password,
        department,
        status,
      });
  
      
      await newUser.save();
  
      
      return newUser;
    } catch (error) {
      console.error(error);
      
    }

    revalidatePath("/dashboard/employees")
    redirect("/dashboard/employees")
  };