"use client"

import { submitSnippet } from '@/actions';
import Alert from '@/components/Alert';
import Button from '@/components/Button';

// import { useFormState } from 'react-dom';
import { useActionState } from 'react';


const CreateNewSnippet = () => {

    const [formState, action] = useActionState(submitSnippet, {message: ""});
    

  return (
    <div className="w-full md:w-1/2 mx-auto" >
        <form action={action}>
            <h3 className="font-bold text-2xl my-4" >Add New Snippet</h3>
            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-1">
                    <label className="w-12 font-bold" htmlFor="title">Title</label>
                    <input className="w-full border rounded bg-gray-50 p-1" id="title" name="title" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="w-12 font-bold" htmlFor="description">Code</label>
                    <textarea className="w-full border rounded bg-gray-50 p-3"  id="code" name="code"></textarea>
                </div>
            </div>
            <div>
                {
                    formState.message ? <Alert message={formState.message} />: null
                }
            </div>
            <div className="flex mt-4">
            <Button name="Add Snippet" />
            </div>
        </form>
    </div>
  )
}

export default CreateNewSnippet