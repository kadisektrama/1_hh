import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    Select,
} from 'antd'

import { TUser } from '../../../../types/types'

type TMapDispatchToProps = {
    createUser: (body: TUser) => void
}

const createUser: React.FC<TMapDispatchToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TUser>()

    const onSubmit = handleSubmit(data => {
        console.log(data)
        props.createUser(data)
    })

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onSubmit}
                layout='horizontal'
                style={{ maxWidth: 600 }}
            >
                <Form.Item label='First_name'>
                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.first_name && <p className="error">first_name is required</p>}
                </Form.Item>

                <Form.Item label='Last_name'>
                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.last_name && <p className="error">last_name is required</p>}
                </Form.Item>

                <Form.Item label='Roles'>
                    <Controller
                        name="roles"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <Select {...field}>
                                <Select.Option value={'guest'}>guest</Select.Option>
                                <Select.Option value={'host'}>host</Select.Option>
                                <Select.Option value={'admin'}>admin</Select.Option>
                            </Select>
                        }
                    />

                    {errors.roles ? <p className="error">roles is required</p> : null}
                </Form.Item>

                <Form.Item label='Email'>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 32 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.email?.type === 'required' && <p className="error">email is required</p>}
                    {errors.email?.type === 'maxLength' && <p className="error">email min length is 6 simbols</p>}
                    {errors.email?.type === 'minLength' && <p className="error">email max length is 32 simbols</p>}
                </Form.Item>

                <Form.Item label='Phone'>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.phone && <p className="error">phone is required</p>}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default createUser