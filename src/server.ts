import { fastify } from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'

import { env } from './env.ts';

import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { getRoomQuestionsRoute } from './http/routes/get-room-questions.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';

const port = env.PORT

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: '*'
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(getRoomsRoute)
app.register(getRoomQuestionsRoute)
app.register(createRoomRoute)
app.register(createQuestionRoute)

app.listen({ port }).then(() => {
    console.log(`Server running on port: ${port}`)
})