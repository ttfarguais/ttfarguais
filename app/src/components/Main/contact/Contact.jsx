
"use client";
import playerType from "../../../data/playerType";
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


  return (
  <div className="flex flex-col items-center py-10 px-4">

    {/* Titre */}
    <div className="text-center mb-10 max-w-2xl">
      <h1 className="text-4xl font-bold text-solid mb-4">
        Envie de nous rej🏓indre ?
      </h1>

    </div>

    {/* Formulaire */}
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-6"
    >

      {/* Nom / Prénom */}
      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
        />

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Votre prénom"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
        />

      </div>

      {/* Age / Email / Téléphone */}
      <div className="grid md:grid-cols-3 gap-6">

        <div>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Votre âge"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
        />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre e-m@il"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
          />

          {isSubmitted && !validateEmail() && (
            <p className="text-red-600 text-sm mt-2">
              Adresse e-mail invalide.
            </p>
          )}

        <div>
          <input
            type="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            placeholder="Votre téléphone"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
          />

          {isSubmitted && !validatePhone() && formData.tel && (
            <p className="text-red-600 text-sm mt-2">
              Numéro de téléphone invalide.
            </p>
          )}
        </div>

      </div>

      {/* Commune */}
      <input
        type="text"
        name="municipality"
        value={formData.municipality}
        onChange={handleChange}
        placeholder="Votre commune"
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
      />

      {/* Type de joueur */}
      <select
        name="typePlayer"
        value={formData.typePlayer}
        onChange={handleChange}
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
      >
        <option value="">Je suis un joueur...</option>

        {playerType.map((type, index) => (
          <option key={index} value={type.title}>
            {type.title}
          </option>
        ))}
      </select>

       {/* Source */}
      <input
        type="text"
        name="municipality"
        value={formData.municipality}
        onChange={handleChange}
        placeholder="Comment nous avez vous connus ?"
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100"
      />

      {/* Message */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Votre demande..."
        rows={6}
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-4 focus:ring-green-100"
      />

      {responseMessage && (
        <p
          className={`rounded-xl p-4 text-white text-center ${
            isValidStatus ? "bg-solid" : "bg-red-600"
          }`}
        >
          {responseMessage}
        </p>
      )}

      <button
        type="submit"
        className="mx-auto block rounded-full bg-solid text-white px-10 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Envoyer mon message 🏓
      </button>

    </form>

  </div>
);
      }
