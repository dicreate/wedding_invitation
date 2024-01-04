import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendMessage } from '../../api/telegram';
import { notifications } from '@mantine/notifications';

import style from "./index.module.scss"

const Form = () => {
   const [isLoading, setIsLoading] = useState(false)

   const form = useForm({
      initialValues: {
         fullname: '',
         phone: ''
      },

      validate: {
         fullname: (value) => (/^[A-Za-zА-Яа-яЁё\s]+$/.test(value) ? null : 'Имя должно содержать только буквы'),
         phone: (value) => (/^[-+()\d\s]+$/.test(value) ? null : 'Неверный формат номера телефона'),
      },
   });

   const handleSubmit = async ({ fullname, phone }: typeof form.values): Promise<void> => {
      try {
         setIsLoading(true)
         const message = `Полное имя: ${fullname} %0AНомер телефона: ${phone}`

         await sendMessage(message);

         form.values.fullname = ''
         form.values.phone = ''

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
      <Box mx="auto" className={style.box}>
         <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
               classNames={{
                  input: style.input,
                  label: style.label,
                  error: style.error
               }}
               size="md"
               withAsterisk
               label="Ваше имя и фамилия"
               placeholder="Имя и фамилия"
               {...form.getInputProps('fullname')}
            />

            <TextInput
               classNames={{
                  input: style.input,
                  label: style.label,
                  error: style.error
               }}
               size="md"
               withAsterisk
               label="Номер телефона"
               placeholder="Введите свой номер телефона"
               {...form.getInputProps('phone')}
            />

            <Group justify="flex-end" mt="md">
               <Button radius={10} className={style.button} size='xl' loading={isLoading} type="submit">Отправить</Button>
            </Group>
         </form>
      </Box>
   );
}

export default Form