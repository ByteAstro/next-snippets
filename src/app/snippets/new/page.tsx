"use client"
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function SnippetCreatePage() {
    const [formState, action] = useFormState(actions.createSnippet, { message: "" });

    return <form action={action}>
        <h3 className="font-semibold text-2xl my-8">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">
                    Title
                </label>
                <input
                    name="title"
                    className="border rounded p-2 w-full bg-transparent"
                    id="title"
                />
            </div>
            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">
                    Code
                </label>
                <textarea
                    name="code"
                    className="border rounded p-2 w-full bg-transparent"
                    id="code"
                />
            </div>

            {formState.message &&
                <div className='my-2 p-1 text-red-300'
                >{formState.message}</div>
            }

            <button type="submit" className="rounded p-2 bg-red-500">
                Create
            </button>
        </div>
    </form>;
}
