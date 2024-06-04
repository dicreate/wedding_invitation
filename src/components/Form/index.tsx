import { TextInput, Button, Group, Box, Radio, Checkbox, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendMessage } from '../../api/telegram';
import { notifications } from '@mantine/notifications';

import style from "./index.module.scss"

const Form = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [isPresence, setIsPresence] = useState<string>('');
   const [isTransfer, setIsTransfer] = useState<string>('');
   const [events, setEvents] = useState<string[]>([]);
   const [drinks, setDrinks] = useState<string[]>([]);
   const [presenceError, setPresenceError] = useState<string | null>(null);
   const [transferError, setTransferError] = useState<string | null>(null);

   const form = useForm({
      initialValues: {
         fullname: '',
         /* withWhom: '', */
         phone: '',
         wishes: '',
         termsOfService: false,
      },

      validate: {
         fullname: (value) => (/^[A-Za-zА-Яа-яЁё\s]+$/.test(value) ? null : 'Имя должно содержать только буквы и не быть пустым'),
         termsOfService: (value) => (value === true ? null : 'вы должны дать согласие на обработку персональных данных'),
         /*  phone: (value) => (/^[-+()\d\s]+$/.test(value) ? null : 'Неверный формат номера телефона'), */
      },
      clearInputErrorOnChange: true,
   });

   const handleSubmit = async ({ fullname, phone, wishes }: typeof form.values): Promise<void> => {
      try {
         setIsLoading(true)

         let isValid = true;

         form.validate();

         if (!isPresence) {
            setPresenceError('Укажите, будете ли вы присутствовать на свадьбе');
            isValid = false;
         } else {
            setPresenceError(null);
         }

         if (!isTransfer && isPresence === "Да") {
            setTransferError('Укажите, нужен ли вам трансфер');
            isValid = false;
         } else {
            setTransferError(null);
         }

         if (!isValid || form.validate().hasErrors) {
            setIsLoading(false)
            return;
         }

         const message = `Полное имя:  ${fullname} %0A%0AПрисутствие:  ${isPresence} %0A%0AТрансфер:  ${isTransfer} %0A%0AМероприятия:  ${events} %0A%0AНомер телефона:  ${phone} %0A%0AАлкогольные напитки:  ${drinks} %0A%0AПожелания:  ${wishes}`

         await sendMessage(message);

         form.reset()
         setEvents([])
         setDrinks([])

         notifications.show({
            title: <div className={style.notificationTitle}>Форма отправлена</div>,
            message: <div className={style.notificationMessage}> {isPresence === 'Да' ? 'Мы будем рады видеть вас на нашей свадьбе !' : 'Очень жаль, что вы не будете с нами на нашей свадьбе :('}</div>,
         })

      } catch (e) {
         form.setFieldValue('email', e as string);
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <div className={style.container}>
         <Box mx="auto" className={style.box}>
            <div className={style.description}>Пожалуйста, заполните приведенную ниже форму. Обратите внимание: заполнение первых трёх полей, а также подтверждение согласия на обработку персональных данных – обязательные поля для отправки формы. Однако мы настоятельно рекомендуем вам заполнить все поля для более полной информации. Если вы не хотите заполнять форму, вы всегда можете подтвердить свое присутствие лично.</div>
            <form onSubmit={(e) => {
               e.preventDefault();
               handleSubmit(form.values);
            }}>
               <TextInput
                  classNames={{
                     input: style.input,
                     label: style.label,
                     error: style.error
                  }}
                  size="md"
                  withAsterisk
                  label="Ваше имя и фамилия"
                  placeholder="Введите имя и фамилию"
                  {...form.getInputProps('fullname')}
               />

               <Radio.Group
                  value={isPresence}
                  onChange={setIsPresence}
                  name="presence"
                  label="Будете ли вы присутствовать на свадьбе ?"
                  withAsterisk
                  error={presenceError}
                  required
                  classNames={{
                     root: style.radioRoot,
                     label: style.radioFirstLabel,
                     error: style.error
                  }}
               >
                  <div className={style.description}>Сообщите, будете ли Вы с детьми, так как на детей места заказываются отдельно 😉.</div>
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

               <Radio.Group
                  value={isTransfer}
                  onChange={setIsTransfer}
                  name="transfer"
                  withAsterisk
                  error={transferError}
                  label="Нужен ли вам трансфер ?"
                  classNames={{
                     root: style.radioRoot,
                     label: style.radioFirstLabel,
                     error: style.error
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

               <Checkbox.Group
                  label="На каких мероприятиях будете с нами ?"
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

               {/*   <TextInput
                  classNames={{
                     input: style.input,
                     label: style.label,
                     error: style.error
                  }}
                  size="md"
                  label="С кем вы будете ?"
                  placeholder="С кем вы будете ?"
                  {...form.getInputProps('withWhom')}
               /> */}

               <Checkbox.Group
                  label="Какие предпочитаете алкогольные напитки ?"
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
                     value="Не пью"
                     label="Не пью" />
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
               <Textarea
                  classNames={{
                     input: style.input,
                     label: style.label,
                     error: style.error
                  }}
                  size="md"
                  label="Здесь вы можете поделиться своими идеями, мыслями, пожеланиями"
                  placeholder="Текст..."
                  autosize
                  minRows={2}
                  maxRows={4}
                  {...form.getInputProps('wishes')}
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
      </div>

   );
}

export default Form