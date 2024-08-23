'use client' // client-side rendering to correctly use useAtom()
import React from 'react'
import { signIn } from 'next-auth/react'

const page:React.FC = () => {
    return (
        <>
            <div className="flex justify-center  w-screen">
                <div className="flex w-60 flex-col">
                    <button
                        className="p-2 rounded-md border-2" 
                        onClick={() => signIn("google")}>
                        Google
                    </button>
                    <button
                        className="p-2 rounded-md border-2" 
                        onClick={() => signIn("instagram")}>
                        Instagram
                    </button>

                </div>

            </div>
        </>
    )
}

export default page