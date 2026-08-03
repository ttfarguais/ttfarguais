
    <div className="flex flex-col items-center m-auto py-6">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Contactez-nous !
      </h1>
      
      <div>Désolé, le formulaire est temporairement inactif.</div>
      <div>Merci d&apos;envoyer votre demande par mail à notre Président :</div>
        <div className="flex flex-col items-center m-auto py-1">
    <p className="text-xl font-bold select-all">
  jeanpaul.vergote@neuf.fr
</p></div>
        <div>À très vite à la table !<br/><br/></div>
    </div>
  );
}

/*

"use client";

import playerType from "../../../data/playerType";

import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTableTennis,
  FaInfoCircle,
  FaCommentDots
} from "react-icons/fa";


export default function Contact({
  handleChange,
  handleSubmit,
  formData = {},
  validateEmail,
  validatePhone,
  responseMessage,
  isSubmitted,
  isValidStatus
}) {


  const inputClass = (value) =>
    `w-full rounded-xl border px-4 py-3 bg-white transition 
    focus:outline-none focus:ring-4 focus:ring-green-100
    ${
      value
        ? "border-green-500 ring-4 ring-green-100"
        : "border-gray-300"
    }`;


const IconInput = ({ icon, value, onChange, ...props }) => (
  <div className="relative">

    <span
      className={`absolute left-4 top-1/2 -translate-y-1/2 ${
        value ? "text-green-500" : "text-gray-400"
      }`}
    >
      {icon}
    </span>

    <input
      {...props}
      value={value ?? ""}
      onChange={onChange}
      className={`${inputClass(value)} pl-12`}
    />

  </div>
);


  return (
    <div className="flex flex-col items-center py-10 px-4">


      {/* Titre */}
      <div className="text-center mb-5 max-w-2xl">

        <h1 className="text-xl font-bold text-solid mb-2">
          Envie de nous rej🏓indre ?
        </h1>

      </div>



      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-5 md:p-8"
      >

        <div className="flex flex-col gap-3">


          {/* Nom / Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">


            <IconInput
              icon={<FaUser />}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />


            <IconInput
              icon={<FaUser />}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              required
            />


          </div>




          {/* Age / Email / Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">


            <IconInput
              icon={<FaBirthdayCake />}
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Votre âge"
              required
            />



            <div>

              <IconInput
                icon={<FaEnvelope />}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre m@il"
                required
              />


              {isSubmitted && !validateEmail() && (
                <p className="text-red-600 text-sm mt-2">
                  Adresse e-mail invalide.
                </p>
              )}

            </div>




            <div>

              <IconInput
                icon={<FaPhone />}
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Votre téléphone"
                required
              />


              {isSubmitted && !validatePhone() && formData.tel && (
                <p className="text-red-600 text-sm mt-2">
                  Numéro de téléphone invalide.
                </p>
              )}

            </div>


          </div>





          {/* Commune */}
          <IconInput
            icon={<FaMapMarkerAlt />}
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            placeholder="Votre commune"
            required
          />






          {/* Type joueur */}
          <div className="relative">


            <FaTableTennis
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                formData.typePlayer
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            />


            <select
              name="typePlayer"
              value={formData.typePlayer}
              onChange={handleChange}
              required
              className={`w-full rounded-xl border px-4 py-3 pl-12 bg-white transition
              focus:outline-none focus:ring-4 focus:ring-green-100
              ${
                formData.typePlayer
                  ? "border-green-500 ring-4 ring-green-100 text-gray-900"
                  : "border-gray-300 text-gray-400"
              }`}
            >

              <option value="">
                Vous êtes un joueur...
              </option>


              {playerType.map((type,index)=>(
                <option key={index} value={type.title}>
                  {type.title}
                </option>
              ))}


            </select>


          </div>







          {/* Source */}
          <IconInput
            icon={<FaInfoCircle />}
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Comment avez-vous connu le club ?"
            required
          />







          {/* Message */}
          <div className="relative">


            <FaCommentDots
              className={`absolute left-4 top-5 ${
                formData.message
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            />


            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre demande..."
              rows={6}
              required
              className={`${inputClass(formData.message)} pl-12 resize-none`}
            />


          </div>







          {responseMessage && (

            <p
              className={`rounded-xl p-4 text-white text-center ${
                isValidStatus
                  ? "bg-solid"
                  : "bg-red-600"
              }`}
            >
              {responseMessage}
            </p>

          )}

          {/* Bouton */}
          <button
            type="submit"
            className="mx-auto block rounded-full bg-solid text-white px-10 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Envoyer m🏓n message
          </button>

        </div>
      </form>

    </div>
    </div>
  );
}
*/
