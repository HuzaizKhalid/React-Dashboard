import { useState } from "react";

const HelpAndSupportPage = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Support query submitted:", contactForm);
    // Reset form after submission
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "How do I start a new experiment?",
      answer:
        "To start a new experiment, navigate to the 'Create Experiment' page from the dashboard. Fill in the required details and click 'Run Experiment'.",
    },
    {
      question: "What file formats are supported for data upload?",
      answer:
        "We currently support CSV, TXT, and JSON file formats for data upload. Make sure your data is properly formatted before uploading.",
    },
    {
      question: "How can I monitor the progress of my fine-tuning job?",
      answer:
        "You can monitor the progress of your fine-tuning job on the 'Fine-tune Model' page. A real-time progress bar will show you the current status.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Help and Support
      </h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                id="message"
                name="message"
                rows="4"
                value={contactForm.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Documentation and Tutorials
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Getting Started Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              API Documentation
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Video Tutorials
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Best Practices for Model Fine-tuning
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
