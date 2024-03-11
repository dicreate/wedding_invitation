import { TextInput, Button, Group, Box, Radio, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendMessage } from '../../api/telegram';
import { notifications } from '@mantine/notifications';

import style from "./index.module.scss"

const Form = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [isPresence, setIsPresence] = useState('Да');
   const [events, setEvents] = useState<string[]>([]);
   const [drinks, setDrinks] = useState<string[]>([]);

   const form = useForm({
      initialValues: {
         fullname: '',
         withWhom: '',
         phone: '',
         termsOfService: false,
      },

      validate: {
         fullname: (value) => (/^[A-Za-zА-Яа-яЁё\s]+$/.test(value) ? null : 'Имя должно содержать только буквы и не быть пустым'),
         termsOfService: (value) => (value === true ? null : 'вы должны дать согласие на обработку персональных данных'),
         /*  phone: (value) => (/^[-+()\d\s]+$/.test(value) ? null : 'Неверный формат номера телефона'), */
      },
   });

   const handleSubmit = async ({ fullname, withWhom, phone }: typeof form.values): Promise<void> => {
      try {
         setIsLoading(true)
         const message = `Полное имя:  ${fullname} %0A%0AПрисутствие:  ${isPresence} %0A%0AС кем:  ${withWhom}  %0A%0AМероприятия:  ${events} %0A%0AНапитки:  ${drinks}  %0A%0AНомер телефона:  ${phone}`

         await sendMessage(message);

         form.reset()
         setEvents([])
         setDrinks([])

         notifications.show({
            title: <div className={style.notificationTitle}>Форма отправлена</div>,
            message: <div className={style.notificationMessage}> {isPresence === 'да' ? 'Мы будем рады видеть вас на нашей свадьбе !' : 'Очень жаль, что вы не будете с нами на нашей свадьбе :('}</div>,
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

            <Radio.Group
               value={isPresence}
               onChange={setIsPresence}
               name="presence"
               label="Будете ли вы присутствовать на свадьбе ?"
               withAsterisk
               classNames={{
                  root: style.radioRoot,
                  label: style.radioFirstLabel
               }}
            >
               <Radio
                  size="xl"
                  classNames={{
                     root: style.radioRoot,
                     label: style.radioLabel,
                     radio: style.radioRadio
                  }}
                  value="Да"
                  label="Да" />
               <Radio
                  size="xl"
                  classNames={{
                     root: style.radioRoot,
                     label: style.radioLabel,
                     radio: style.radioRadio
                  }}
                  value="Нет"
                  label="Нет" />
            </Radio.Group>

            <TextInput
               classNames={{
                  input: style.input,
                  label: style.label,
                  error: style.error
               }}
               size="md"
               label="С кем вы будете ?"
               placeholder="С кем вы будете ?"
               {...form.getInputProps('withWhom')}
            />


            <Checkbox.Group
               label="На каких мероприятиях будете с нами?"
               value={events}
               onChange={setEvents}
               classNames={{
                  label: style.label,
               }}
            >
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Венчание"
                  label="Венчание" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Выездная роспись"
                  label="Выездная роспись" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Праздничный ужин"
                  label="Праздничный ужин" />
            </Checkbox.Group>

            <Checkbox.Group
               label="Что предпочитаете пить ?"
               value={drinks}
               onChange={setDrinks}
               classNames={{
                  label: style.label,
               }}
            >
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Водка"
                  label="Водка" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Красное вино"
                  label="Красное вино" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Белое вино"
                  label="Белое вино" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Шампанское"
                  label="Шампанское" />
               <Checkbox
                  size="xl"
                  classNames={{
                     label: style.checkboxLabel,
                     root: style.checkboxRoot,
                     input: style.checkboxInput
                  }}
                  value="Безалкогольные напитки"
                  label="Безалкогольные напитки" />
            </Checkbox.Group>

            <TextInput
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

export default Form