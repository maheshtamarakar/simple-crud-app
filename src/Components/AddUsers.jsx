import { FormControl, FormGroup, Input, InputLabel } from '@material-ui/core'
import React from 'react'

export const AddUsers = () => {
    return (
        <FormGroup>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
        </FormGroup>
    )
}
