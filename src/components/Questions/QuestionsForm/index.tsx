import { TextInput, Button, Group, Box, Checkbox, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendMessage } from '../../../api/telegram';
import { notifications } from '@mantine/notifications';

import style from "./index.module.scss"

const QuestionsForm = () => {
   const [isLoading, setIsLoading] = useState(false);

   const form = useForm({
      initialValues: {
         fullname: '',
         questions: '',
         termsOfService: false,
      },

      validate: {
         fullname: (value) => (/^[A-Za-zА-Яа-яЁё\s]+$/.test(value) ? null : 'Имя должно содержать только буквы и не быть пустым'),
         termsOfService: (value) => (value === true ? null : 'вы должны дать согласие на обработку персональных данных'),
         questions: (value) => (value.trim() ? null : 'Задайте свои вопросы'),
      },
      clearInputErrorOnChange: true,
   });

   const handleSubmit = async ({ fullname, questions }: typeof form.values): Promise<void> => {
      try {
         setIsLoading(true)
         const message = `Полное имя:  ${fullname}  %0A%0AВопросы:  ${questions}`

         await sendMessage(message);

         form.reset()

         notifications.show({
            title: <div className={style.notificationTitle}>Форма отправлена</div>,
            message: <div className={style.notificationMessage}>Скоро мы ответим на ваш вопрос !</div>
         })

      } catch (e) {
         form.setFieldValue('email', e as string);
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <Box className={style.box}>
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

            <Textarea
               classNames={{
                  input: style.input,
                  label: style.label,
                  error: style.error
               }}
               size="md"
               label="Вопросы"
               withAsterisk
               placeholder="Задайте вопросы здесь"
               autosize
               minRows={2}
               maxRows={4}
               {...form.getInputProps('questions')}
            />

            {/*      <TextInput
               classNames={{
                  input: style.input,
                  label: style.label,
                  error: style.error
               }}
               size="md"
               label="Номер телефона"
               placeholder="Введите свой номер телефона"
               {...form.getInputProps('phone')}
            />
 */}
            <Group justify="space-between" mt="md" gap="30px">
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  label="Я даю согласие на обработку персональных данных"
                  {...form.getInputProps('termsOfService', { type: 'checkbox' })}
               />
               <Button radius={20} className={style.button} size='xl' loading={isLoading} type="submit">Отправить</Button>
            </Group>
         </form>
      </Box>
   );
}

export default QuestionsForm