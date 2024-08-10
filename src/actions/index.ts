'use server'

import { revalidatePath } from 'next/cache';
import { db } from "@/db"
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });

    revalidatePath('/');
    redirect('/');
}


export async function createSnippet(formState: { message: string }, formData: FormData) {
    try {

        // Check the user's inputs and make sure they're valid
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return { message: 'Title string must be a longer' };
        };
        if (typeof code !== 'string' || code.length < 10) {
            return { message: 'Code must be a longer' };
        };
        // Create a mew record in the database
        await db.snippet.create({
            data: {
                title, code
            }
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { message: err.message };
        } else {
            return { message: 'Something went Wrong...' };
        }
    }
    revalidatePath('/');
    redirect('/');
}
