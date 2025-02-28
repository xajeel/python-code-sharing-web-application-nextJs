'use server';

import { db } from "@/db/cleint"
import { redirect } from 'next/navigation'

// New Snippet Form 

async function submitSnippet(formState: {message:string}, formData: FormData){

    // Gettign values from the form data
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Checking if the title and code are empty
    if (title.length > 50){
        return { message: 'Title must be less than 50 characters'};
    }
    if (typeof title !== 'string' || title.length < 3){
        return { message: 'Title must be Longer' }};
    if (typeof code !== 'string' || code.length < 3){
        return { message: 'Code must be Longer' }
    }

    // Creating a new snippet
    const snippets = await db.snippet.create({
        data: {
            title,
            code
        },
    });
    // Redirecting to the Home Page 
    redirect('/home');
}

export { submitSnippet };

// Update Values 
const updateValue = async (id: number, code: string) => {

    await db.snippet.update({
        where: {
            id: id
        },
        data: {
            code: code
        }
    });
    redirect(`/snippets/${id}`);
}

export { updateValue };

// delete Values 
const deletevalue = async (id:number) => {
    await db.snippet.delete({
        where: {
            id:id
        }
    })

    redirect('/home')
}

export { deletevalue };
