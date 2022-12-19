'use client';

import Tags from './Tags'
import TableComponent from './Table'
import Suggestions from './Suggestions';

import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Stack } from '@mui/system';
import { useSearchParams } from 'next/navigation';


export default function page() {
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams()
    const query = searchParams.get('query');
    const router = useRouter()
    const [word, setWord] = useState("")

    useEffect(() => {
        if(!query) return;
        setWord(query)
    }, [])

    function handleChange(e) {
        setWord(e.target.value)
    }

    useEffect(() => {
        if (word === undefined) return;
        router.push(`/words?query=${word}`)
        // startTransition(() => {router.push(`/words?query=${word}`)});
    }, [word])

    return (
        <>
            <h2 style={{ color: "black", backgroundColor: "#F5F5F5", padding: "20px 10px 20px 30px", borderRadius: "8px" }}> W O R D &nbsp; S E A R C H</h2>
            {isPending &&  <div>is Pending</div>}
            <Stack flexDirection={'row'}>
                <TextField value={word} id="standard-basic" label="Search" variant="outlined" onChange={handleChange} sx={{ marginTop: "50px", width: "300px", minWidth: "250px", backgroundColor: isPending && 'lightyellow'}} />
                <Suggestions word={word} setWord={setWord} />
            </Stack>

            <Tags setWord={setWord} />

            <h4 style={{ color: "gray", paddingLeft: "5px", marginTop: "50px" }}>S Y N O N Y M S</h4>
            <TableComponent query={query}/>
        </>
    )
}

 