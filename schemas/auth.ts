import * as zod from 'zod'

export const LoginSchema = zod.object({
    email: zod.string().min(1, {message: "Email field is required"}).email("Email not valid"),
    password: zod.string().min(1, {message: "Password field is required"}).min(7, {message: "Minimum password length is 7 characters"})
})

export const SignupSchema = zod.object({
    name: zod.string().min(1, {message: "Name field is required"}),
    username: zod.string().min(1, {message: "Username field is required"}).min(3, {message: "Minimum username length is 3 characters"}).max(10, {message: "Maximum username length is 10 characters"}),
    email: zod.string().min(1, {message: "Email field is required"}).email("Email not valid"),
    password: zod.string().min(1, {message: "Password field is required"}).min(7, {message: "Minimum password length is 7 characters"})
})