import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendMessage } from '../../api/telegram';
import { notifications } from '@mantine/notifications';

import style from "./index.module.scss"

const Form = () => {
   const [isLoading, setIsLoading] = useState(false)

   const form = useForm({
      initialValues: {
         email: '',
         termsOfService: false,
      },

      validate: {
         email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
   });

   const handleSubmit = async ({ email, termsOfService }: typeof form.values): Promise<void> => {
      try {
         setIsLoading(true)
         const message = `Почта: ${email}, согласие: ${termsOfService}`

         await sendMessage(message);

         notifications.show({
            title: 'Форма отправлена',
            message: 'Мы рады видеть вас на нашей свадьбе !',
         })

      } catch (e) {
         form.setFieldValue('email', e as string);
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <Box maw={550} mx="auto" className={style.box}>
         <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
               classNames={{
                  input: style.input,
                  label: style.label
               }}
               size="md"
               withAsterisk
               label="Email"
               placeholder="your@email.com"
               {...form.getInputProps('email')}
            />

            <TextInput
               classNames={{
                  input: style.input,
                  label: style.label
               }}
               size="md"
               withAsterisk
               label="Email"
               placeholder="your@email.com"
               {...form.getInputProps('email')}
            />


            <Checkbox
               mt="md"
               label="I agree to sell my privacy"
               {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />

            <Group justify="flex-end" mt="md">
               <Button size='md' loading={isLoading} type="submit">Отправить</Button>
            </Group>
         </form>
      </Box>
   );
}

export default Form