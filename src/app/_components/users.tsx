'use client'

import { api } from "~/trpc/react"

const users = () => {
    const user = api.post.getusers.useQuery()

    return (
        <div>{JSON.stringify(user.data)}</div>
    )
}

export default users