export const metadata = {
  title: "AOK Smart Living Website",
  description: "Official website of AOK Limited – revolutionizing Nigerian homes with smart control, monitoring, and automation.",
};

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center text-left px-6 md:px-20 bg-gradient-to-b from-white to-gray-300">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/aok-logo.png"
            alt="AOK Limited Logo"
            width={250}
            height={250}
            className="mb-6"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AOK Smart Living</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">Revolutionizing Nigerian homes with smart control, monitoring, and automation</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-xl text-white">Go to Web App</a>
            <a
              href="https://tally.so/r/wo8465"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-6 py-3 rounded-xl"
            >
              Join Waitlist
            </a>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-b from-gray-300 to-white">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800">
          <p>AOK Limited is a Nigerian smart home company committed to making everyday living simpler, safer, and more energy-efficient. In a country where electricity supply is often unstable and energy costs are rising, our mission is to help households take control of their power usage and daily appliances — without needing to be tech experts.</p>
          <p>We provide intuitive home automation solutions that allow you to remotely monitor and control your appliances, track electricity consumption, and set smart schedules — all through a user-friendly app. Whether you're trying to reduce your electricity bill, manage usage during power outages, or just want more convenience and peace of mind, AOK brings the technology to your fingertips.</p>
          <p>Our goal is to make smart living accessible to everyone — from individuals in single apartments to families in multi-room homes. With a range of flexible product tiers and services, we ensure there's a solution for every lifestyle and budget.</p>
          <p>AOK Limited is not just improving how people live — we're helping build smarter communities across Nigeria, one home at a time.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-300">
        <h2 className="text-3xl font-semibold text-center mb-8">What We Offer</h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-lg list-disc list-inside">
          <li>Control and monitor your appliances based on your needs</li>
          <li>Energy usage tracking per device/room</li>
          <li>Schedule devices to turn on/off</li>
          <li>Know when power is available or out</li>
          <li>Full smart integration with security cameras and automation</li>
        </ul>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-300 to-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Tiers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-400">
            <Image src="/tier2.jpg" alt="Tier 1" width={500} height={300} className="rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Basic Smart Living</h3>
            <p className="text-sm mb-4">Basic smart control and monitoring for appliances and sockets. Monitor power usage and remotely toggle devices from anywhere. Ideal for beginners who want an introduction to smart living.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-400">
            <Image src="/tier1.jpg" alt="Tier 2" width={500} height={300} className="rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Enhanced Smart Living</h3>
            <p className="text-sm mb-4">All Basic Smart Living features plus the ability to schedule appliances, receive energy consumption reports, and monitor specific devices. This tier is great for those seeking control and insights on their energy usage. First month free after installation</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-500">
            <Image src="/tier3.jpg" alt="Tier 3" width={500} height={300} className="rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Complete Smart Experience</h3>
            <p className="text-sm mb-4">Our most advanced package. Everything from Basic Smart Living and Enhanced Smart Living, plus full automation setups, security camera integration, voice assistant compatibility, and AI-driven automation rules tailored to your lifestyle. First month free after installation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-b from-white to-gray-300">
        <h2 className="text-3xl font-semibold mb-6">Ready to get started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">We're gearing up to launch full-scale home installations very soon!!</p>     <p className="text-lg max-w-2xl mx-auto mb-6"> If you're excited to transform your living space into a smart, energy-efficient home, join our waitlist now. You’ll be the first to know when we begin installations and receive early access to our exclusive services.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-xl text-white">Go to Web App</a>
          <a
            href="https://tally.so/r/wo8465"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-6 py-3 rounded-xl"
          >
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 px-6 md:px-20 bg-gradient-to-b from-gray-300 to-white text-center">
        <p className="mb-4">Contact us at <a href="mailto:aoksmartliving@gmail.com" className="underline">aoksmartliving@gmail.com</a></p>
        <div className="flex justify-center gap-4 text-xl">
          <a
            href="https://www.instagram.com/aoksmartliving?igsh=Z255bm80c2duenh5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Instagram
          </a>

          <a
            href="https://x.com/aoksmartliving?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Twitter/X
          </a>
          <a href="#" className="hover:text-black">Facebook</a>
        </div>
      </footer>
    </main>
  );
}
