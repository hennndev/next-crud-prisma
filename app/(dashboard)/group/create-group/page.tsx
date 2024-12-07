import GroupForm from '@/app/components/dashboard/group/GroupForm'
import React from 'react'
import { LuArrowLeft } from 'react-icons/lu'

const CreateGroup = () => {
    return (
        <section className='flex-1 w-full py-6 px-10'>
            <section className='flex flex-col space-y-2 mb-12'>
                <h1 className='text-2xl font-semibold tracking-tight'>Create group</h1>
                <p className='text-gray-500 text-sm'>Create and configuration your new group</p>
            </section>
            <GroupForm/>
        </section>
    )
}

export default CreateGroup