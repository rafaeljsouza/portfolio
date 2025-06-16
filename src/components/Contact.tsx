'use client'

import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const t = useTranslations('Contact')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const token = await recaptchaRef.current?.executeAsync()
    recaptchaRef.current?.reset()

    try {
      const response = await fetch('https://formspree.io/f/mwpboave', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          'g-recaptcha-response': token,
        }),
      })

      if (response.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch (err) {
        console.error(err)
        setStatus('error')
    }
  }

  return (
    <section className="py-16 px-6 md:px-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder={t('name')}
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('email')}
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
          required
        />
        <textarea
          name="message"
          placeholder={t('message')}
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
          required
        />
        <ReCAPTCHA
          sitekey="6LeeyV4rAAAAAGVnGic_p5mfGVKXnKN5o_3X30YN" // substitua pela sua chave
          size="invisible"
          ref={recaptchaRef}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('sending') : t('send')}
        </button>

        {status === 'sent' && <p className="text-green-400 mt-2">Mensagem enviada com sucesso!</p>}
        {status === 'error' && <p className="text-red-400 mt-2">Erro ao enviar. Tente novamente.</p>}
      </form>
    </section>
  )
}
