import { fastify } from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { fastifyMultipart } from '@fastify/multipart'
import { env } from './env.ts';

import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { getRoomQuestionsRoute } from './http/routes/get-room-questions.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';
import { uploadAudioRoute } from './http/routes/upload-audio.ts';

const port = env.PORT

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: '*'
})

app.register(fastifyMultipart)

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(getRoomsRoute)
app.register(getRoomQuestionsRoute)
app.register(createRoomRoute)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({ port, host: '0.0.0.0' }).then(() => {
    console.log(`Server running on port: ${port}`)
})