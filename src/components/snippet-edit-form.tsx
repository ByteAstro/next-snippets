"use client"

import { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
    snippet: Snippet
    editable: boolean
}

export default function SnippetEditForm({ snippet, editable }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const editSnippetAction = actions.editSnippet.bind(
        null, snippet.id, code
    );

    return <div>
        <Editor
            height="40vh"
            theme='vs-dark'
            language='javascript'
            defaultValue={snippet.code}
            options={{
                minimap: { enabled: false }
            }}
            onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
            <button className='p-2 border rounded'>
                Save
            </button>
        </form>
    </div>
}
