const baseUrl = 'https://api.telegram.org/bot6408791319:AAEJNoTS-VX1DSQdHJNRFeurGobVcdZdmp0/'

export const sendMessage = async (message: string): Promise<void> => {
   const url = `${baseUrl}sendMessage?chat_id=-4092137206&text=${message}`;

   const response = await fetch(url);

   if(!response.ok) {
      const error = await response.json()

      await Promise.reject(error.description || 'Что-то пошло не так...')
   }
};