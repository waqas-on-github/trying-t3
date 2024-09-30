'use client'

import { api } from "~/trpc/react"

const Users = () => {
    const user = api.post.getusers.useQuery()

    return (
        <div>{JSON.stringify(user.data)}</div>
    )
}

export default Users