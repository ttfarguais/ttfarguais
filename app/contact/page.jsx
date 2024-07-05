// 'use client'
// import { useState } from 'react';

// export default function Contact() {

//   return (
//     <div className="py-8 px-4 flex flex-col items-center m-auto gap-8 md:py-20">
//       <h1 className="text-xl font-bold">Contactez-nous !</h1>
//       <p>{message}</p>
//       <form onSubmit={handleSubmit} className="flex flex-col w-4/6 gap-10 md:py-20 xl:w-3/6">
//         <div className="flex flex-col justify-between gap-8">
//           <div className="flex-col flex w-full gap-2">
//             <label className="text-md md:text-lg">Nom:</label>
//             <input
//               type="text"
//               name="nom"
//               value={formData.nom}
//               onChange={handleChange}
//               className="border-2 px-4 py-2 bg-contrast-2"
//               required
//             />
//           </div>

//           <div className="flex-col flex w-full gap-2">
//             <label className="text-md md:text-lg">Prénom:</label>
//             <input
//               type="text"
//               name="prenom"
//               value={formData.prenom}
//               onChange={handleChange}
//               className="border-2 px-4 py-2 bg-contrast-2"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex-col flex gap-2">
//           <label className="text-md md:text-lg">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border-2 px-4 py-2 bg-contrast-2"
//             required
//           />
//         </div>

//         <div className="flex-col flex gap-2">
//           <label className="text-md md:text-lg">Votre message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="border-2 px-4 py-2 bg-contrast-2 h-40"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="text-contrast-3 py-1 px-4 rounded-xl border border-contrast-3 text-sm hover:bg-solid border-solid hover:text-contrast-1 transition-all w-2/4 m-auto"
//         >
//           Envoyer
//         </button>
//       </form>
//     </div>

//   );
// }
'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/');
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <p>Message from API: {message}</p>
    </div>
  );
}
