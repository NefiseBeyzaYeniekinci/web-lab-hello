import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            İletişime Geç
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Formu doldurarak benimle iletişime geçebilirsiniz.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
